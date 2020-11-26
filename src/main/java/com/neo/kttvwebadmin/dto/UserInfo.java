package com.neo.kttvwebadmin.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@JsonIgnoreProperties(ignoreUnknown = true)
public class UserInfo {
    private String id;
    private String name;
    private String mobile;
    private String position;
    private String email;
    private Integer gender;
    private String genders;
    private Integer statusId;
    private String statusIds;
    private Integer checkRole;
    private String dateRole;
    private String dateRoles;
    private Integer cardNumber;
    private String cardNumbers;
    private String code;
    private String officeCode;
    private Integer group_id;
    private Date createdDate;
    private String createdDates;
    private String createdBy;
    private String text;
}
