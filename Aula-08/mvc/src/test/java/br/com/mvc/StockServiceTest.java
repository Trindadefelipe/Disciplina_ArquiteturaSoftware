package br.com.mvc;

import static org.junit.jupiter.api.Assertions.*;

import java.math.BigDecimal;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import br.com.mvc.model.entity.Product;
import br.com.mvc.model.entity.ProductStatus;
import br.com.mvc.model.repository.ProductRepository;
import br.com.mvc.model.repository.SaleRepository;
import br.com.mvc.model.service.StockService;

@SpringBootTest
class StockServiceTest {

    @Autowired
    private StockService stockService;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private SaleRepository saleRepository;

    private Product produto;

    @BeforeEach
    void setUp() {
        saleRepository.deleteAll();
        productRepository.deleteAll();
        produto = Product.builder()
                .name("Papel A4 Dunder Mifflin")
                .price(new BigDecimal("29.90"))
                .build();
        produto = productRepository.save(produto);
    }

    @Test
    @DisplayName("RF01: Produto novo deve iniciar com status INDISPONIVEL e estoque 0")
    void deveIniciarComoIndisponivel() {
        Product p = stockService.buscarPorId(produto.getId());
        assertEquals(ProductStatus.INDISPONIVEL, p.getStatus());
        assertEquals(0, p.getQuantity());
    }

    @Test
    @DisplayName("RF02: Quando o produto sai de zero, deve ficar DISPONIVEL")
    void deveFicarDisponivelAoEntrarEstoque() {
        stockService.entradaEstoque(produto.getId(), 10);
        Product p = stockService.buscarPorId(produto.getId());

        assertEquals(10, p.getQuantity());
        assertEquals(ProductStatus.DISPONIVEL, p.getStatus());
    }

    @Test
    @DisplayName("RF03: Quando o estoque zera, deve ficar INDISPONIVEL")
    void deveFicarIndisponivelAoZerarEstoque() {
        stockService.entradaEstoque(produto.getId(), 5);
        stockService.saidaEstoque(produto.getId(), 5);
        Product p = stockService.buscarPorId(produto.getId());

        assertEquals(0, p.getQuantity());
        assertEquals(ProductStatus.INDISPONIVEL, p.getStatus());
    }

    @Test
    @DisplayName("RF04: Não deve permitir saída maior do que o estoque disponível")
    void naoDevePermitirSaidaMaiorQueEstoque() {
        stockService.entradaEstoque(produto.getId(), 3);
        assertThrows(IllegalArgumentException.class, () -> {
            stockService.saidaEstoque(produto.getId(), 5);
        });
    }

    @Test
    @DisplayName("RF05: Apenas ADM pode descontinuar o produto")
    void apenasAdmPodeDescontinuar() {
        assertThrows(IllegalArgumentException.class, () -> {
            stockService.descontinuarProduto(produto.getId(), false);
        });

        stockService.descontinuarProduto(produto.getId(), true);
        Product p = stockService.buscarPorId(produto.getId());
        assertEquals(ProductStatus.DESCONTINUADO, p.getStatus());
    }

    @Test
    @DisplayName("RF06: Produto descontinuado não pode ser manipulado no estoque")
    void naoDeveManipularProdutoDescontinuado() {
        stockService.descontinuarProduto(produto.getId(), true);

        assertThrows(IllegalArgumentException.class, () -> {
            stockService.entradaEstoque(produto.getId(), 10);
        });

        assertThrows(IllegalArgumentException.class, () -> {
            stockService.saidaEstoque(produto.getId(), 5);
        });
    }
}
