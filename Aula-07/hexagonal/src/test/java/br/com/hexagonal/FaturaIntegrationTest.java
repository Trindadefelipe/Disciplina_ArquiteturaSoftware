package br.com.hexagonal;

import static org.junit.jupiter.api.Assertions.*;

import java.math.BigDecimal;
import java.util.UUID;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import br.com.hexagonal.domain.entities.Fatura;
import br.com.hexagonal.domain.ports.in.FaturaService;
import br.com.hexagonal.domain.ports.out.persistence.FaturaRepository;

@SpringBootTest
class FaturaIntegrationTest {

    @Autowired
    private FaturaService faturaService;

    @Autowired
    private FaturaRepository faturaRepository;

    @Test
    void deveFaturarPedidoComTodosRequisitos() {
        Long pedidoId = 12345L;
        BigDecimal valor = new BigDecimal("199.90");

        UUID faturaId = faturaService.faturarPedido(pedidoId, valor);

        assertNotNull(faturaId);

        Fatura fatura = faturaRepository.buscarPorId(faturaId).orElse(null);
        assertNotNull(fatura);
        assertEquals(pedidoId, fatura.getPedidoId());
        assertEquals(valor, fatura.getValor());
        assertNotNull(fatura.getEmitidoEm());

        assertNotNull(fatura.getCodigoBarras());
        assertFalse(fatura.getCodigoBarras().isBlank());

        assertNotNull(fatura.getChaveAcesso());
        assertEquals(44, fatura.getChaveAcesso().length());

        assertNotNull(fatura.getHashEmail());
        assertFalse(fatura.getHashEmail().isBlank());
    }

    @Test
    void naoDeveCriarFaturaComPedidoInvalido() {
        assertThrows(RuntimeException.class, () -> {
            faturaService.faturarPedido(null, new BigDecimal("100.00"));
        });

        assertThrows(RuntimeException.class, () -> {
            faturaService.faturarPedido(0L, new BigDecimal("100.00"));
        });
    }

    @Test
    void naoDeveCriarFaturaComValorInvalido() {
        assertThrows(RuntimeException.class, () -> {
            faturaService.faturarPedido(1L, null);
        });

        assertThrows(RuntimeException.class, () -> {
            faturaService.faturarPedido(1L, BigDecimal.ZERO);
        });
    }
}
