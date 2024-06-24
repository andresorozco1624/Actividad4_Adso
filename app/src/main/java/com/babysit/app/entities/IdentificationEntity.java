package com.babysit.app.entities;


import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Data

@Table(name = "identification")

public class IdentificationEntity {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column (name = "title")
    private String title;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "identification")
    private List<UserEntity> userEntities;

}
