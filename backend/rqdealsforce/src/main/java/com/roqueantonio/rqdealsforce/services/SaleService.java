package com.roqueantonio.rqdealsforce.services;

import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.roqueantonio.rqdealsforce.entities.Sale;
import com.roqueantonio.rqdealsforce.repositories.SaleRepository;

@Service
public class SaleService {

    @Autowired
    private SaleRepository repository;

    public Page<Sale> findSales(
            String minDate,
            String maxDate,
            Pageable pageable) {

        LocalDate today = LocalDate.ofInstant(Instant.now(), ZoneId.systemDefault());

        LocalDate yearInterval = today.minusDays(365);
        LocalDate fromDate = minDate.equals("") ? yearInterval : LocalDate.parse(minDate);
        LocalDate toDate = maxDate.equals("") ? today : LocalDate.parse(maxDate);

        return repository.findSales(fromDate, toDate, pageable);
    }
}
