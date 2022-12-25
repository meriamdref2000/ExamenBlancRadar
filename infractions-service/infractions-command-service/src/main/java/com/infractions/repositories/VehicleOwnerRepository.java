package com.infractions.repositories;
import com.infractions.model.VehicleOwner;
import org.springframework.data.jpa.repository.JpaRepository;
public interface VehicleOwnerRepository extends JpaRepository<VehicleOwner,String> {
}
