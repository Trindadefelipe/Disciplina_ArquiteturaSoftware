package br.com.mvc.model.service;

import java.math.BigDecimal;
import java.util.Map;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

@Component
public class FaturamentoClient {

    private final RestTemplate restTemplate;
    private final String hubUrl;

    public FaturamentoClient(RestTemplate restTemplate, @Value("${hub.faturamento.url:http://localhost:8081/fatura}") String hubUrl) {
        this.restTemplate = restTemplate;
        this.hubUrl = hubUrl;
    }

    public String solicitarFaturamento(Long pedidoId, BigDecimal valor) {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        Map<String, Object> payload = Map.of(
            "pedidoId", pedidoId,
            "valor", valor
        );

        HttpEntity<Map<String, Object>> request = new HttpEntity<>(payload, headers);
        ResponseEntity<Map> response = restTemplate.postForEntity(hubUrl, request, Map.class);

        if (response.getBody() != null && response.getBody().get("faturaId") != null) {
            return response.getBody().get("faturaId").toString();
        }

        throw new IllegalStateException("Resposta invalida do hub de faturamento");
    }
}
