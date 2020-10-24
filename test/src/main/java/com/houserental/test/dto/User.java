package com.houserental.test.dto;

/**
 * Created by Akshat on 6/19/19.
 */
public class User {
    private String password;
    private String username;
    private String name;
    private boolean owner;
    private int userId;

    public User(String password, String username, String name, boolean owner, int userId) {
        this.password = password;
        this.username = username;
        this.name = name;
        this.owner = owner;
        this.userId = userId;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    @Override
    public String toString() {
        return "User{" +
                "password='" + password + '\'' +
                ", username='" + username + '\'' +
                ", name='" + name + '\'' +
                ", owner=" + owner +
                ", userId=" + userId +
                '}';
    }
}