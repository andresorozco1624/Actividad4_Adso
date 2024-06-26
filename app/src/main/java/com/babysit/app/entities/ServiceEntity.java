package com.babysit.app.entities;

import com.babysit.app.utils.ServiceState;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Builder;
import lombok.Data;

import java.awt.*;
import java.time.Duration;
import java.time.LocalDateTime;

@Entity
@Data



@Table(name = "service")

public class ServiceEntity {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "fare",nullable = false)
    private double fare;

    @Column(name = "date",nullable = false)
    private LocalDateTime date;

    @Column(name = "hour",nullable = false)
    private Duration hour;


    @Column(name = "state",nullable = false)
    @Enumerated(EnumType.STRING)
    private ServiceState state;

    @Column(name = "indication")
    private String indication;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "fk_userId", nullable = false)
    private UserEntity user;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "fk_babysitId")
    private UserEntity babysit;

    @JsonIgnore
    @OneToOne
    @JoinColumn(name = "fk_pagoId")
    private PaymentEntity pagoId;



}
