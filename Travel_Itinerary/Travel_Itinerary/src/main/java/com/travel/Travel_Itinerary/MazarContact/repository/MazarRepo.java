package com.travel.Travel_Itinerary.MazarContact.repository;

import com.travel.Travel_Itinerary.MazarContact.entity.MazarContact;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface MazarRepo extends JpaRepository<MazarContact, Long> {
    List<MazarContact> findByNameContainingIgnoreCase(String name);

    List<MazarContact> findByCityContainingIgnoreCase(String city);

    List<MazarContact> findByNameContainingIgnoreCaseAndCityContainingIgnoreCase(String name, String city);
}
