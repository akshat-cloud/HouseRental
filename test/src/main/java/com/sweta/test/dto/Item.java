package com.sweta.test.dto;

/**
 * Created by sweta on 6/19/19.
 */
public class Item {
    private int id;
    private String item;

    public Item(int id, String item) {
        this.id = id;
        this.item = item;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getItem() {
        return item;
    }

    public void setItem(String item) {
        this.item = item;
    }
}
