package com.travel.Travel_Itinerary.MazarContact.service;

import com.travel.Travel_Itinerary.MazarContact.entity.MazarContact;
import com.travel.Travel_Itinerary.MazarContact.repository.MazarRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MazarService {

    @Autowired
    private MazarRepo mazarRepo;

    public List<MazarContact> getAllMazars() {
        return mazarRepo.findAll();
    }

    public MazarContact getMazarById(Long id) {
        return mazarRepo.findById(id).orElse(null);
    }

    public List<MazarContact> getMazarsByVisited(String visited) {
        return mazarRepo.findByVisitedContainingIgnoreCase(visited);
    }
    public MazarContact getMazarsImage(String image) {
        return mazarRepo.findByImage(image);
    }

    public List<MazarContact> searchMazarsByName(String name) {
        return mazarRepo.findByNameContainingIgnoreCase(name);
    }

    public List<MazarContact> searchMazarsByCity(String city) {
        return mazarRepo.findByCityContainingIgnoreCase(city);
    }

    public List<MazarContact> searchMazarsByNameAndCity(String name, String city) {
        return mazarRepo.findByNameContainingIgnoreCaseAndCityContainingIgnoreCase(name, city);
    }
}
