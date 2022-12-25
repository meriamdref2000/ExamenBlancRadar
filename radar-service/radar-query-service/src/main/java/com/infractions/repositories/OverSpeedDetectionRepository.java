package com.infractions.repositories;

import com.infractions.entities.OverSpeedDetection;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OverSpeedDetectionRepository extends JpaRepository<OverSpeedDetection,String> {
    List<OverSpeedDetection> findByVehicleRegistrationNumber(String regNumber);
}
