package br.com.hexagonal.infra.adapters.out.persistence;

import java.util.Map;
import java.util.Optional;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;
import org.springframework.stereotype.Repository;
import br.com.hexagonal.domain.entities.Fatura;
import br.com.hexagonal.domain.ports.out.persistence.FaturaRepository;

@Repository
public class FaturaRepositoryMemoryAdapter implements FaturaRepository {

    private final Map<UUID, Fatura> faturas = new ConcurrentHashMap<>();

    @Override
    public void salvar(Fatura fatura) {
        faturas.put(fatura.getId(), fatura);
    }

    @Override
    public Optional<Fatura> buscarPorId(UUID id) {
        return Optional.ofNullable(faturas.get(id));
    }
}
