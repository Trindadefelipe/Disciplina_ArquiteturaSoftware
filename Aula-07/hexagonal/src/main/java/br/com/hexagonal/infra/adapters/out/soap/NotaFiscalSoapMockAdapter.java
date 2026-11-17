package br.com.hexagonal.infra.adapters.out.soap;

import java.util.Random;
import org.springframework.stereotype.Component;
import br.com.hexagonal.domain.entities.Fatura;
import br.com.hexagonal.domain.ports.out.soap.NotaFiscalSoapPort;

@Component
public class NotaFiscalSoapMockAdapter implements NotaFiscalSoapPort {

    @Override
    public String emitirNotaFiscal(Fatura fatura) {
        Random random = new Random();
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < 44; i++) {
            sb.append(random.nextInt(10));
        }
        return sb.toString();
    }
}
