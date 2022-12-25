package com.infractions.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import com.infractions.coreapi.VehicleType;

import javax.persistence.*;
import java.util.List;

@Entity
@Data @NoArgsConstructor @AllArgsConstructor
public class Vehicle {
    @Id
    private String registrationNumber;
    private VehicleType type;
    private String brand;
    private String model;
    private  int  fiscalPower;
    @OneToMany(mappedBy = "vehicle", fetch = FetchType.EAGER)
    private List<VehicleOwnerShip> ownerShips;
}
