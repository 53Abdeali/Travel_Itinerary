package com.travel.Travel_Itinerary.MazarContact.controller;

import com.travel.Travel_Itinerary.MazarContact.entity.MazarContact;
import com.travel.Travel_Itinerary.MazarContact.service.MazarService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;



@RestController
@RequestMapping("/api/mazars")
@CrossOrigin(origins = "http://localhost:3000")
public class MazarController {
    
    @Autowired
    private MazarService mazarService;

    @GetMapping("/all")
    public List<MazarContact> getMazars() {
        return mazarService.getAllMazars();
    }

    @GetMapping("/{id}")
    public MazarContact getMazarById(@PathVariable Long id) {
        return mazarService.getMazarById(id);
    }

    @GetMapping("/search")
    public List<MazarContact> searchMazarsByName(@RequestParam String name){
        return mazarService.searchMazarsByName(name);
    }  

    @GetMapping("/searchByCity")
    public List<MazarContact> searchMazarsByCity(@RequestParam String city){
        return mazarService.searchMazarsByCity(city);
    }

    @GetMapping("/searchByNameAndCity")
    public List<MazarContact> searchMazarsByNameAndCity(@RequestParam String name, @RequestParam String city){
        return mazarService.searchMazarsByNameAndCity(name, city);
    }  
}
