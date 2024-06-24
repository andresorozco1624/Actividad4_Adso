package com.babysit.app.repositories;

import com.babysit.app.entities.ServiceEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.List;

public interface ServiceRepository extends
        JpaRepository<ServiceEntity, Long>,
        JpaSpecificationExecutor<ServiceEntity> {

   // List<ServiceEntity> findByfk_user_id (Long id);
}
