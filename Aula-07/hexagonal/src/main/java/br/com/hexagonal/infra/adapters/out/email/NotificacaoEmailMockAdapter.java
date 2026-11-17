package br.com.hexagonal.infra.adapters.out.email;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import org.springframework.stereotype.Component;
import br.com.hexagonal.domain.entities.Fatura;
import br.com.hexagonal.domain.ports.out.email.NotificacaoEmailPort;

@Component
public class NotificacaoEmailMockAdapter implements NotificacaoEmailPort {

    @Override
    public String enviarEmail(Fatura fatura) {
        String conteudo = "Fatura=" + fatura.getId() + ";Pedido=" + fatura.getPedidoId() + ";Valor=" + fatura.getValor();
        try {
            MessageDigest digest = MessageDigest.getInstance("SHA-256");
            byte[] encodedHash = digest.digest(conteudo.getBytes(StandardCharsets.UTF_8));
            StringBuilder hexString = new StringBuilder();
            for (byte b : encodedHash) {
                String hex = Integer.toHexString(0xff & b);
                if (hex.length() == 1) {
                    hexString.append('0');
                }
                hexString.append(hex);
            }
            return hexString.toString();
        } catch (NoSuchAlgorithmException e) {
            return Integer.toHexString(conteudo.hashCode());
        }
    }
}
