package br.com.mvc;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.UUID;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.bean.override.mockito.MockitoBean;

import br.com.mvc.model.entity.Product;
import br.com.mvc.model.entity.ProductStatus;
import br.com.mvc.model.entity.Sale;
import br.com.mvc.model.repository.ProductRepository;
import br.com.mvc.model.repository.SaleRepository;
import br.com.mvc.model.service.FaturamentoClient;
import br.com.mvc.model.service.SaleService;

@SpringBootTest
class SaleServiceTest {

    @Autowired
    private SaleService saleService;

    @Autowired
    private SaleRepository saleRepository;

    @Autowired
    private ProductRepository productRepository;

    @MockitoBean
    private FaturamentoClient faturamentoClient;

    private Product product;

    @BeforeEach
    void setUp() {
        saleRepository.deleteAll();
        productRepository.deleteAll();

        product = Product.builder()
            .name("Caneta Dunder Mifflin")
            .price(new BigDecimal("10.00"))
            .quantity(20)
            .status(ProductStatus.DISPONIVEL)
            .build();
        product = productRepository.save(product);
    }

    @Test
    void deveCriarPedidoComSucesso() {
        Sale sale = saleService.criarPedido(product.getId(), 5);

        assertNotNull(sale.getId());
        assertEquals("ABERTO", sale.getStatus());
        assertEquals(5, sale.getQuantity());
        assertEquals(new BigDecimal("50.00"), sale.getTotalPrice());
        assertNull(sale.getFaturaId());
    }

    @Test
    void deveFecharPedidoEGuardarIdFaturaDevolvido() {
        Sale sale = saleService.criarPedido(product.getId(), 2);
        String uuidFatura = UUID.randomUUID().toString();

        when(faturamentoClient.solicitarFaturamento(eq(sale.getId().longValue()), any(BigDecimal.class)))
            .thenReturn(uuidFatura);

        Sale saleFechada = saleService.fecharPedido(sale.getId());

        assertEquals("FECHADO", saleFechada.getStatus());
        assertEquals(uuidFatura, saleFechada.getFaturaId());

        Product productAtualizado = productRepository.findById(product.getId()).orElseThrow();
        assertEquals(18, productAtualizado.getQuantity());
    }

    @Test
    void naoDeveFecharPedidoDuasVezes() {
        Sale sale = saleService.criarPedido(product.getId(), 1);
        when(faturamentoClient.solicitarFaturamento(anyLong(), any(BigDecimal.class)))
            .thenReturn(UUID.randomUUID().toString());

        saleService.fecharPedido(sale.getId());

        assertThrows(IllegalStateException.class, () -> {
            saleService.fecharPedido(sale.getId());
        });
    }
}
