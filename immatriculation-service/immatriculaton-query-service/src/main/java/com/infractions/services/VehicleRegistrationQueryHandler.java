package com.infractions.services;

import com.infractions.entities.Vehicle;
import com.infractions.entities.VehicleOwner;
import com.infractions.repositories.VehicleOwnerRepository;
import com.infractions.repositories.VehicleOwnerShipRepository;
import com.infractions.repositories.VehicleRepository;
import lombok.extern.slf4j.Slf4j;
import com.infractions.coreapi.GetAllOwners;
import com.infractions.coreapi.GetAllVehiclesQuery;
import com.infractions.coreapi.GetVehicleByRegistrationNumber;
import org.axonframework.queryhandling.QueryHandler;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Slf4j
@Transactional
public class VehicleRegistrationQueryHandler {
    private VehicleRepository vehicleRepository;
    private VehicleOwnerRepository vehicleOwnerRepository;
    private VehicleOwnerShipRepository vehicleOwnerShipRepository;

    public VehicleRegistrationQueryHandler(VehicleRepository vehicleRepository, VehicleOwnerRepository vehicleOwnerRepository, VehicleOwnerShipRepository vehicleOwnerShipRepository) {
        this.vehicleRepository = vehicleRepository;
        this.vehicleOwnerRepository = vehicleOwnerRepository;
        this.vehicleOwnerShipRepository = vehicleOwnerShipRepository;
    }
    @QueryHandler
    public List<Vehicle> vehicles(GetAllVehiclesQuery query){
        return vehicleRepository.findAll();
    }

    @QueryHandler
    public List<VehicleOwner> owners(GetAllOwners query){
        return vehicleOwnerRepository.findAll();
    }
    @QueryHandler
    public Vehicle vehicleByReNumber(GetVehicleByRegistrationNumber query){
        return vehicleRepository.findById(query.getRegistrationNumber())
                .orElseThrow(()->new RuntimeException("Vehicle Registration Number does not exist"));
    }

}
