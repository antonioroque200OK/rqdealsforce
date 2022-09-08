package com.roqueantonio.rqdealsforce.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.roqueantonio.rqdealsforce.entities.Sale;
import com.roqueantonio.rqdealsforce.services.SaleService;

@RestController
@RequestMapping(path = "/sales")
public class SaleController {

    @Autowired
    private SaleService saleService;

    @GetMapping
    public Page<Sale> findSales(
            @RequestParam(value = "fromDate", defaultValue = "") String minDate,
            @RequestParam(value = "toDate", defaultValue = "") String maxDate,
            Pageable pageable) {

        return saleService.findSales(minDate, maxDate, pageable);
    }

}
