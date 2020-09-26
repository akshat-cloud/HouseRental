package com.sweta.test.controller;

import com.sweta.test.dto.Item;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by sweta on 6/19/19.
 */
@RestController
@RequestMapping("/shopping")

public class ApiController {


    @GetMapping("/items")
    @ResponseBody
    public List<Item> getUserById() {
        Item item1 = new Item(1,"Towel");
        Item item2 = new Item(2,"Soap");
        List<Item> items = new ArrayList<>();
        items.add(item1);
        items.add(item2);
        return items;


    }
}
