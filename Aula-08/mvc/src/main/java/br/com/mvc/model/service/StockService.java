package br.com.mvc.model.service;

import java.math.BigInteger;
import java.util.List;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import br.com.mvc.model.entity.Product;
import br.com.mvc.model.entity.ProductStatus;
import br.com.mvc.model.repository.ProductRepository;

@Service
public class StockService {
    private final ProductRepository productRepository;

    public StockService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> listarTodos() {
        return productRepository.findAll();
    }

    public Product buscarPorId(BigInteger id) {
        return productRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Produto não encontrado com o id: " + id));
    }

    @Transactional
    public void entradaEstoque(BigInteger id, Integer quantidade) {
        if (quantidade == null || quantidade <= 0) {
            throw new IllegalArgumentException("A quantidade de entrada deve ser maior que 0!");
        }

        Product produto = buscarPorId(id);

        if (produto.getStatus() == ProductStatus.DESCONTINUADO) {
            throw new IllegalArgumentException("Produto descontinuado não pode sofrer movimentação de estoque!");
        }

        int estoqueAnterior = produto.getQuantity() != null ? produto.getQuantity() : 0;
        int novoEstoque = estoqueAnterior + quantidade;
        produto.setQuantity(novoEstoque);

        if (estoqueAnterior == 0 && novoEstoque > 0) {
            produto.setStatus(ProductStatus.DISPONIVEL);
        }

        productRepository.save(produto);
    }

    @Transactional
    public void saidaEstoque(BigInteger id, Integer quantidade) {
        if (quantidade == null || quantidade <= 0) {
            throw new IllegalArgumentException("A quantidade de saída deve ser maior que 0!");
        }

        Product produto = buscarPorId(id);

        if (produto.getStatus() == ProductStatus.DESCONTINUADO) {
            throw new IllegalArgumentException("Produto descontinuado não pode sofrer movimentação de estoque!");
        }

        int estoqueAtual = produto.getQuantity() != null ? produto.getQuantity() : 0;

        if (quantidade > estoqueAtual) {
            throw new IllegalArgumentException("Estoque insuficiente! Saldo atual: " + estoqueAtual);
        }

        int novoEstoque = estoqueAtual - quantidade;
        produto.setQuantity(novoEstoque);

        if (novoEstoque == 0) {
            produto.setStatus(ProductStatus.INDISPONIVEL);
        }

        productRepository.save(produto);
    }

    @Transactional
    public void descontinuarProduto(BigInteger id, Boolean isAdmin) {
        if (isAdmin == null || !isAdmin) {
            throw new IllegalArgumentException("Apenas administradores podem descontinuar produtos!");
        }

        Product produto = buscarPorId(id);
        produto.setStatus(ProductStatus.DESCONTINUADO);
        productRepository.save(produto);
    }
}
