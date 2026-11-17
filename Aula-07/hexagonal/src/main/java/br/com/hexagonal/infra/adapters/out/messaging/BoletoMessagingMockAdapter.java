package br.com.hexagonal.infra.adapters.out.messaging;

import java.util.Random;
import org.springframework.stereotype.Component;
import br.com.hexagonal.domain.entities.Fatura;
import br.com.hexagonal.domain.ports.out.messaging.BoletoMessaging;

@Component
public class BoletoMessagingMockAdapter implements BoletoMessaging {

    @Override
    public String emitirBoleto(Fatura fatura) {
        Random random = new Random();
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < 47; i++) {
            sb.append(random.nextInt(10));
        }
        return sb.toString();
    }
}
