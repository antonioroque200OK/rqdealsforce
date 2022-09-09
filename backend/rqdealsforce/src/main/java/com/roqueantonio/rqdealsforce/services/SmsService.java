package com.roqueantonio.rqdealsforce.services;

import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;

import org.springframework.stereotype.Service;

@Service
public class SmsService {

    public static final String ACCOUNT_SID = System.getenv("TWILIO_SID");

    public static final String AUTH_TOKEN = System.getenv("TWILIO_KEY");

    public void sendSms() {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);

        Message message = Message.creator(
                new com.twilio.type.PhoneNumber("+5598987058414"),
                new com.twilio.type.PhoneNumber("+19853324345"),
                "TEST").create();

        System.out.println(message.getSid());
    }
}
