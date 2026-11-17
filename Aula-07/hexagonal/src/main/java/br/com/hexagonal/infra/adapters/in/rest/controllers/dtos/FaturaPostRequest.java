package br.com.hexagonal.infra.adapters.in.rest.controllers.dtos;

import java.math.BigDecimal;

public record FaturaPostRequest(Long pedidoId, BigDecimal valor) {
}
