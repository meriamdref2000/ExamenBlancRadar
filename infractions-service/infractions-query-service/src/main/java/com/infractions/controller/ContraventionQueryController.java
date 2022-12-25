package com.infractions.controller;

import com.infractions.coreapi.GetContraventionsByNationalCardNumber;
import org.axonframework.messaging.responsetypes.ResponseTypes;
import org.axonframework.queryhandling.QueryGateway;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

import java.util.concurrent.CompletableFuture;

@RestController
@RequestMapping("/query")
//@CrossOrigin("*")
public class ContraventionQueryController {
    private QueryGateway queryGateway;

    public ContraventionQueryController(QueryGateway queryGateway) {
        this.queryGateway = queryGateway;
    }


    @GetMapping("/infractions")
    public CompletableFuture<Page> contravrntionByNationalCardNumber(
                                                                     @RequestParam(name = "page",defaultValue = "0") int page,
                                                                     @RequestParam(name = "size",defaultValue = "10") int size,
                                                                     @RequestParam(name = "cin") String natCardNumber){
        return queryGateway.query(
                new GetContraventionsByNationalCardNumber(natCardNumber,page,size),
                ResponseTypes.instanceOf(Page.class)
        );
    }
}
