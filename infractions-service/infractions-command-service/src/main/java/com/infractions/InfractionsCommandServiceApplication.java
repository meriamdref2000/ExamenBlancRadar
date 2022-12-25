package com.infractions;

import org.axonframework.commandhandling.CommandBus;
import org.axonframework.commandhandling.SimpleCommandBus;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class InfractionsCommandServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(InfractionsCommandServiceApplication.class, args);
    }
    @Bean
    CommandBus commandBus(){
        return SimpleCommandBus.builder().build();
    }


}
