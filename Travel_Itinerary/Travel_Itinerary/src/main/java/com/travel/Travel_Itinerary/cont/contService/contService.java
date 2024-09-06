package com.travel.Travel_Itinerary.cont.contService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.travel.Travel_Itinerary.cont.contModel.contModel;

@Service
public class contService {
    
    @Autowired
    private JavaMailSender jms;

    public void sendMessage(contModel cModel){
        SimpleMailMessage msg = new SimpleMailMessage();
        msg.setTo("aliabdealifakhri53@gmail.com");
        msg.setSubject("Rihalat-ul-Mumin Query Message Form : " + cModel.getName());
        msg.setText("Assalam\n + \n Name: " + cModel.getName() + "\n\n Phone: "+ cModel.getPhone() + "\n\n ItsID: "+ cModel.getItsId() + "\n\n Message: "+ cModel.getMessage());

        jms.send(msg);
    }

}
