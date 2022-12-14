package com.roqueantonio.rqdealsforce.repositories;

import java.time.LocalDate;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.roqueantonio.rqdealsforce.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {

    @Query("SELECT obj FROM Sale obj WHERE obj.date BETWEEN :fromDate AND :toDate ORDER BY obj.amount DESC")
    Page<Sale> findSales(
            LocalDate fromDate,
            LocalDate toDate,
            Pageable pageable);

}
