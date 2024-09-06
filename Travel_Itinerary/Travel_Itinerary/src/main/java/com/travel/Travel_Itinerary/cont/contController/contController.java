package com.travel.Travel_Itinerary.cont.contController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.travel.Travel_Itinerary.cont.contModel.contModel;
import com.travel.Travel_Itinerary.cont.contService.contService;

@RestController
@RequestMapping("/api")
public class contController {

    @Autowired
    private contService cs;

    @PostMapping("/contact")
    public ResponseEntity<String> submitMessage(@RequestBody contModel cModel){
        cs.sendMessage(cModel);
        return new ResponseEntity<>("Feedback submitted successfully", HttpStatus.OK);
    }
    

}
