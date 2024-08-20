package com.travel.Travel_Itinerary.feedback.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.travel.Travel_Itinerary.feedback.model.Feedback;

@Service
public class FeedbackService {

    @Autowired
    private JavaMailSender mailSender;

    public void sendFeedback(Feedback feedback) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo("aliabdealifakhri53@gmail.com"); 
        message.setSubject("Bohra Itinerary Feedback from " + feedback.getName());
        message.setText("Name: " + feedback.getName() + "\n\nPhone: " + feedback.getPhone() + 
                        "\n\nITS ID: " + feedback.getItsId() + "\n\n" + feedback.getMessage());
        mailSender.send(message);
    }
}
