package com.babysit.app.repositories;

import com.babysit.app.contracts.ServiceResponseDetailDto;
import com.babysit.app.entities.ServiceEntity;
import com.babysit.app.entities.UserEntity;
import com.babysit.app.utils.ServiceState;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.List;
import java.util.Optional;

public interface ServiceRepository extends
        JpaRepository<ServiceEntity, Long>,
        JpaSpecificationExecutor<ServiceEntity> {



    List<ServiceEntity> findByState(ServiceState state);

    List<ServiceEntity> findByUserAndState(UserEntity user, ServiceState state);


    List<ServiceEntity> findByUser(UserEntity userEntity);

    List<ServiceEntity> findByBabysitAndState(UserEntity userEntity, ServiceState serviceState);
}
