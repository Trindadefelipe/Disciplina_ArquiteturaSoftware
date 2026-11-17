package br.com.mvc.model.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Enumerated;
import jakarta.persistence.EnumType;
import jakarta.persistence.PrePersist;
import java.math.BigDecimal;
import java.math.BigInteger;

@Data 
@NoArgsConstructor 
@Builder 
@AllArgsConstructor 
@Entity
@Table(name = "product")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private BigInteger id;

    @Column(name = "name")
    private String name;

    @Column(name = "price")
    private BigDecimal price;

    @Builder.Default
    @Enumerated(EnumType.STRING)
    @Column(name = "status", nullable = false)
    private ProductStatus status = ProductStatus.INDISPONIVEL;

    @Builder.Default
    @Column(name = "quantity", nullable = false)
    private Integer quantity = 0;

    @PrePersist
    public void prePersist() {
        if (this.status == null) {
            this.status = ProductStatus.INDISPONIVEL;
        }
        if (this.quantity == null) {
            this.quantity = 0;
        }
    }
}
