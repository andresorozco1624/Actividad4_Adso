package com.babysit.app.entities;

import com.babysit.app.utils.PaymentState;
import com.babysit.app.utils.PaymentType;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import org.antlr.v4.runtime.misc.NotNull;

import java.time.LocalDateTime;

@Entity
@Data


@Table(name = "payment")

public class PaymentEntity {
    @Id
    @Column(name = "id")
    private Long id;

    @Column(name = "date")
    private LocalDateTime date;


    @Column(name = "fare", nullable = false)
    private double fare;

    @Column(name = "type")
    @Enumerated(EnumType.STRING)
    private PaymentType type;

    @Column(name = "state",nullable = false)
    @Enumerated(EnumType.STRING)
    private PaymentState state;

    @JsonIgnore
    @OneToOne(cascade = CascadeType.ALL, mappedBy = "pagoId")
    private ServiceEntity serviceEntity;

}
