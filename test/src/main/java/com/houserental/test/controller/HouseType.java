package com.houserental.test.controller;

public class HouseType {
 private int rooms;
 private int zipcode;
 private boolean condo;
 private double rentalCost;

    public HouseType(int rooms, int zipcode, Boolean condo) {
        this.rooms = rooms;
        this.zipcode = zipcode;
        this.condo = condo;
    }

    public int getRooms() {
        return rooms;
    }

    public void setRooms(int rooms) {
        this.rooms = rooms;
    }

    public int getZipcode() {
        return zipcode;
    }

    public void setZipcode(int zipcode) {
        this.zipcode = zipcode;
    }



    public double getRentalCost() {
        return rentalCost;
    }

    public void setRentalCost(double rentalCost) {
        this.rentalCost = rentalCost;
    }

    public boolean isCondo() {
        return condo;
    }

    public void setCondo(boolean condo) {
        this.condo = condo;
    }
}
