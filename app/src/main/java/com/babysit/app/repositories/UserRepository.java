package com.babysit.app.repositories;


import com.babysit.app.entities.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends
        JpaRepository<UserEntity,Long>,
        JpaSpecificationExecutor<UserEntity> {
}
