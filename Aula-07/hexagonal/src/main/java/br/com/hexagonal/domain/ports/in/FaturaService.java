package br.com.hexagonal.domain.ports.in;

import java.math.BigDecimal;
import java.util.UUID;

public class FaturaService {
    UUID faturarPedido(Long pedidoId, BigDecimal valor);
}
