package com.houserental.test.main;

import org.apache.logging.log4j.Level;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;

/**
 * Created by Akshat on 6/19/20.
 */
@EnableAutoConfiguration
@SpringBootApplication
@ComponentScan(basePackages = "com.houserental.test")
public class Application  {
    private static final Logger logger = LogManager.getLogger(Application.class);


    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @Bean
    public CommandLineRunner run(ApplicationContext appContext) {
        return args -> {

            logger.log(Level.INFO, "Starting Application");


        };
    }



}


