package com.houserental.test.controller;

import com.houserental.test.dto.User;
import com.houserental.test.dto.User;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Akshat on 10/19/20.
 */
@RestController
@RequestMapping("/house")

public class ApiController {
    ArrayList<User> users= new ArrayList<>();
    ArrayList<HouseType> types= new ArrayList<HouseType>();


    @GetMapping("/users")
    @ResponseBody
    public  List<User> getUserDetails() {
//        User user1= new User("Batman","xyz@gmail.com", "Andheri","Tommy");
//        User user2= new User("Spiderman","abc@gmail.com","san francisco","Paulie");
//        users.add(user1);
//        users.add(user2);
          return users;
    }
    @PostMapping("/users")
    public void addUser(@RequestBody User newUser) {
        users.add(newUser);

        System.out.println("New user: "+ newUser);

    }
    @GetMapping("/type")
    @ResponseBody
    public  List<HouseType> getHouseType() {
//        User user1= new User("Batman","xyz@gmail.com", "Andheri","Tommy");
//        User user2= new User("Spiderman","abc@gmail.com","san francisco","Paulie");
//        users.add(user1);
//        users.add(user2);
        return types;
    }
    @PostMapping("/type")
    public void addHouseType(@RequestBody HouseType newHouseType) {

        types.add(newHouseType);
        System.out.println("New house: "+ newHouseType);

    }
}
