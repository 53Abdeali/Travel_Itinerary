package com.travel.Travel_Itinerary.feedback.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.travel.Travel_Itinerary.feedback.model.Feedback;
import com.travel.Travel_Itinerary.feedback.service.FeedbackService;

@RestController
@RequestMapping("/api")
public class FeedbackController {

    @Autowired
    private FeedbackService feedbackService;

    @PostMapping("/feedback")
    public ResponseEntity<String> submitFeedback(@RequestBody Feedback feedback) {
        feedbackService.sendFeedback(feedback);
        return new ResponseEntity<>("Feedback submitted successfully", HttpStatus.OK);
    }
}
