package com.infractions.services;

import lombok.extern.slf4j.Slf4j;
import com.infractions.repositories.ContraventionRepository;
import com.infractions.coreapi.GetContraventionsByNationalCardNumber;
import org.axonframework.queryhandling.QueryHandler;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class ContraventionQueryHandler {
    private ContraventionRepository contraventionRepository;

    public ContraventionQueryHandler(ContraventionRepository contraventionRepository) {
        this.contraventionRepository = contraventionRepository;
    }

    @QueryHandler
    public Page on(GetContraventionsByNationalCardNumber query){
        log.info(query.getNationalCardNumber());
        if(query.getNationalCardNumber().equals(null) ||
        query.getNationalCardNumber().equals("") ||
        query.getNationalCardNumber().equals("undefined")){
            return contraventionRepository.findAll(PageRequest.of(query.getPage(),query.getSize()));
        }
        else return contraventionRepository.findAllByOwnerNationalCardId(query.getNationalCardNumber(), PageRequest.of(query.getPage(), query.getSize()));
    }
}
