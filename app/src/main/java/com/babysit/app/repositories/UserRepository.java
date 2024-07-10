package com.babysit.app.repositories;


import com.babysit.app.entities.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends
        JpaRepository<UserEntity,Long>,
        JpaSpecificationExecutor<UserEntity> {
    UserEntity findByEmailAndPassword(String email, String password);

    Optional<UserEntity> findByEmail (String email);

    Optional<UserEntity> findByUsername(String username);
}
