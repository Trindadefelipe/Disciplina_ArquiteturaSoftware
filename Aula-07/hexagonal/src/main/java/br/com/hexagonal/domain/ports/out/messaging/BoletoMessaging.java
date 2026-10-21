package br.com.hexagonal.domain.ports.out.messaging;

import br.com.hexagonal.domain.entities.Fatura;

public class BoletoMessaging {
    String emitirBoleto(Fatura fatura);
}
