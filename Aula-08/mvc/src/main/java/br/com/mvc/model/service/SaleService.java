package br.com.mvc.model.service;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.time.LocalDateTime;
import java.util.List;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import br.com.mvc.model.entity.Product;
import br.com.mvc.model.entity.Sale;
import br.com.mvc.model.repository.SaleRepository;

@Service
public class SaleService {

    private final SaleRepository saleRepository;
    private final ProductService productService;
    private final StockService stockService;
    private final FaturamentoClient faturamentoClient;

    public SaleService(
        SaleRepository saleRepository,
        ProductService productService,
        StockService stockService,
        FaturamentoClient faturamentoClient
    ) {
        this.saleRepository = saleRepository;
        this.productService = productService;
        this.stockService = stockService;
        this.faturamentoClient = faturamentoClient;
    }

    public List<Sale> listarTodas() {
        return saleRepository.findAll();
    }

    public Sale buscarPorId(BigInteger id) {
        return saleRepository.findById(id)
            .orElseThrow(() -> new IllegalArgumentException("Venda nao encontrada com id: " + id));
    }

    @Transactional
    public Sale criarPedido(BigInteger productId, Integer quantity) {
        if (quantity == null || quantity <= 0) {
            throw new IllegalArgumentException("A quantidade deve ser maior que zero!");
        }

        Product product = productService.findById(productId);
        if (product == null) {
            throw new IllegalArgumentException("Produto nao encontrado!");
        }

        int estoqueAtual = product.getQuantity() != null ? product.getQuantity() : 0;
        if (quantity > estoqueAtual) {
            throw new IllegalArgumentException("Estoque insuficiente para criar o pedido!");
        }

        BigDecimal total = product.getPrice().multiply(BigDecimal.valueOf(quantity));

        Sale sale = Sale.builder()
            .product(product)
            .quantity(quantity)
            .totalPrice(total)
            .status("ABERTO")
            .createdAt(LocalDateTime.now())
            .build();

        return saleRepository.save(sale);
    }

    @Transactional
    public Sale fecharPedido(BigInteger saleId) {
        Sale sale = buscarPorId(saleId);

        if ("FECHADO".equalsIgnoreCase(sale.getStatus())) {
            throw new IllegalStateException("Este pedido ja foi fechado e faturado!");
        }

        stockService.saidaEstoque(sale.getProduct().getId(), sale.getQuantity());

        String faturaId = faturamentoClient.solicitarFaturamento(
            sale.getId().longValue(),
            sale.getTotalPrice()
        );

        sale.setFaturaId(faturaId);
        sale.setStatus("FECHADO");

        return saleRepository.save(sale);
    }
}
