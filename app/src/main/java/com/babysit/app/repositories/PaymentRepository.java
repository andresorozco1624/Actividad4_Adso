package com.babysit.app.repositories;

import com.babysit.app.entities.PaymentEntity;
import com.babysit.app.utils.PaymentState;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PaymentRepository extends
        JpaRepository<PaymentEntity,Long>,
        JpaSpecificationExecutor<PaymentEntity> {

    List<PaymentEntity> findByState (PaymentState paymentState);
}
