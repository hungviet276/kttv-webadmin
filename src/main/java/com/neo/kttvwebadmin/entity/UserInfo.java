package com.neo.kttvwebadmin.entity;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * class user_info
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserInfo {

    private String username;

    private String password;

    private String name;

    private String mobile;

    private String position;

    private String email;

    private int gender;

    private int statusId;

    private int checkRole;

    private int dateRole;

    private int cardNumber;

    private String code;

    private String officeCode;

    private Date createdDate;

    private String createdBy;
}
