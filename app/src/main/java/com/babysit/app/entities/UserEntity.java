package com.babysit.app.entities;


import com.babysit.app.entities.AddressEntity;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.awt.*;
import java.util.Collection;
import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity

@Table(name = "user")

public class UserEntity implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;




    @Column(name = "first_name", columnDefinition = "varchar(15)", nullable = false)
    private String firstName;

    @Column(name = "last_name", columnDefinition = "varchar(15)", nullable = false)
    private String lastName;

    @Column(name = "noidentification", columnDefinition = "varchar(30)", nullable = false)
    private String noIdentification;

    @Column(name = "phone", columnDefinition = "varchar(10)", nullable = false, unique = true)
    private String phone;

    @Column(name = "email", columnDefinition = "varchar(30)", nullable = false, unique = true)
    private String email;

    @Column(name = "password", columnDefinition = "varchar(250)", nullable = false)
    private String password;

    @Column(name = "ubication", columnDefinition = "varchar(50)", nullable = false)
    private String ubication;

    @Column(name = "age", columnDefinition = "varchar(10)", nullable = false)
    private String age;

    @Column(name = "fare")
    private Long fare;

    @Column(name = "username")
    private String username;


    @Column(name = "description", nullable = false)
    private String description;



    @ManyToOne
    @JoinColumn(name = "fk_rolId", nullable = false)
    private RolEntity rol;


    @OneToMany(cascade = CascadeType.ALL, mappedBy = "user")
    private List <ServiceEntity> serviceUser;


    @OneToMany(cascade = CascadeType.ALL, mappedBy = "babysit")
    private List <ServiceEntity> serviceBabysit;


    @ManyToMany
    @JoinTable(
            name = "babysit_favorites",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "babysit_id")
    )
    private List<UserEntity> favoriteBabysits;


    @ManyToOne
    @JoinColumn(name = "fk_identificationId",nullable = false)
    private IdentificationEntity identification;


    @ManyToOne
    @JoinColumn(name = "fk_addressId",nullable = false)
    private AddressEntity address;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(rol.getTitle()));
    }



    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
