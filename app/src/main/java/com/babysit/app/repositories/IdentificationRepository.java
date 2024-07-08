package com.babysit.app.repositories;

import com.babysit.app.entities.IdentificationEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface IdentificationRepository extends
        JpaRepository<IdentificationEntity , Long>,
        JpaSpecificationExecutor<IdentificationEntity>
{
}
