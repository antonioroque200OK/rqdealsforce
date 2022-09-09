package com.roqueantonio.rqdealsforce.services;

import com.roqueantonio.rqdealsforce.entities.Sale;
import com.roqueantonio.rqdealsforce.repositories.SaleRepository;
import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SmsService {

    public static final String ACCOUNT_SID = System.getenv("TWILIO_SID");

    public static final String AUTH_TOKEN = System.getenv("TWILIO_KEY");

    @Autowired
    private SaleRepository saleRepository;

    public void sendSms(Long saleId) {
        // TODO: Refactor this assignment to handle 'sale not found'
        Sale sale = saleRepository.findById(saleId).get();

        String date = sale.getDate().getMonthValue() + "-" + sale.getDate().getDayOfMonth() + "-"
                + sale.getDate().getYear();

        String message = "Seller " + sale.getSellerName() + " closed deal in " +
                date + " with value of " + String.format("%.2f", sale.getAmount());

        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);

        Message sellNotification = Message.creator(
                new com.twilio.type.PhoneNumber("+5598987058414"),
                new com.twilio.type.PhoneNumber("+19853324345"),
                message).create();

        System.out.println(sellNotification.getSid());
    }
}
