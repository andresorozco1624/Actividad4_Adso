package com.babysit.app.repositories;

import com.babysit.app.entities.RolEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface RolRepository extends
        JpaRepository <RolEntity, Long>,
        JpaSpecificationExecutor<RolEntity> {
}
