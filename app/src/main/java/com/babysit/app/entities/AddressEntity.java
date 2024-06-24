package com.babysit.app.entities;

import com.babysit.app.entities.UserEntity;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Data


@Table(name = "address")
public class AddressEntity {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "city")
    private String city;

    @Column(name = "state")
    private String state;

    @Column(name = "country")
    private String country;

    @OneToMany (cascade = CascadeType.ALL, mappedBy = "address")
    private List <UserEntity> userEntities;
}
