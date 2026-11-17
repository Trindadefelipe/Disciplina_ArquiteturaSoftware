package br.com.hexagonal.domain.entities;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.UUID;
import lombok.Builder;
import lombok.Getter;

@Getter 
public class Fatura {
    private UUID id;
    private Long pedidoId;
    private BigDecimal valor;
    private LocalDateTime emitidoEm;
    private String codigoBarras;
    private String chaveAcesso;
    private String rps;
    private String hashEmail;

    @Builder
    public Fatura(
        UUID id,
        Long pedidoId,
        BigDecimal valor,
        LocalDateTime emitidoEm,
        String codigoBarras,
        String chaveAcesso,
        String rps,
        String hashEmail
    ) {
        if (pedidoId == null || pedidoId <= 0) {
            throw new RuntimeException("A fatura precisa de um pedido!");
        }
        
        if (valor == null || valor.compareTo(BigDecimal.ZERO) <= 0) {
            throw new RuntimeException("O valor da fatura deve ser maior que zero!");
        }
        
        this.id = id != null ? id : UUID.randomUUID();
        this.pedidoId = pedidoId;
        this.valor = valor;
        this.emitidoEm = emitidoEm != null ? emitidoEm : LocalDateTime.now();
        this.codigoBarras = codigoBarras;
        this.chaveAcesso = chaveAcesso != null ? chaveAcesso : rps;
        this.rps = this.chaveAcesso;
        this.hashEmail = hashEmail;
    }

    public static Fatura criar(Long pedidoId, BigDecimal valor) {
        return Fatura.builder()
            .id(UUID.randomUUID())
            .pedidoId(pedidoId)
            .valor(valor)
            .emitidoEm(LocalDateTime.now())
            .build();
    }

    public void inserirBoleto(String codigoBarras) {
        this.codigoBarras = codigoBarras;
    }

    public void inserirNotaFiscal(String chaveAcesso) {
        this.chaveAcesso = chaveAcesso;
        this.rps = chaveAcesso;
    }

    public void inserirEmail(String hashEmail) {
        this.hashEmail = hashEmail;
    }

    public UUID getId() {
        return this.id;
    }

    public Long getPedidoId() {
        return this.pedidoId;
    }

    public BigDecimal getValor() {
        return this.valor;
    }

    public LocalDateTime getEmitidoEm() {
        return this.emitidoEm;
    }

    public String getCodigoBarras() {
        return this.codigoBarras;
    }

    public String getChaveAcesso() {
        return this.chaveAcesso;
    }

    public String getRps() {
        return this.rps;
    }

    public String getHashEmail() {
        return this.hashEmail;
    }
}
