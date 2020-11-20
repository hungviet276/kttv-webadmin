package com.neo.kttvwebadmin.utils;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.Date;

/**
 * @author thanglv on 10/16/2020
 * @project NBD
 */
public class ObjectValue implements Serializable {

    @JsonProperty("ts_id")
    private Long tsId;

    @JsonProperty("value")
    private Float value;

    @JsonProperty("timestamp")
    private Long timestamp;

    @JsonProperty("status")
    private Integer status;

    @JsonProperty("manual")
    private Integer manual;

    @JsonProperty("warning")
    private Integer warning;

    @JsonProperty("create_user")
    private String createUser;

    public ObjectValue() {
    }

    public Long getTsId() {
        return tsId;
    }

    public void setTsId(Long tsId) {
        this.tsId = tsId;
    }

    public Float getValue() {
        return value;
    }

    public void setValue(Float value) {
        this.value = value;
    }

    public Long getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Long timestamp) {
        this.timestamp = timestamp;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public Integer getManual() {
        return manual;
    }

    public void setManual(Integer manual) {
        this.manual = manual;
    }

    public Integer getWarning() {
        return warning;
    }

    public void setWarning(Integer warning) {
        this.warning = warning;
    }

    public String getCreateUser() {
        return createUser;
    }

    public void setCreateUser(String createUser) {
        this.createUser = createUser;
    }

    @Override
    public String toString() {
        return "{tsId: "+ tsId +", value:"+ value +", timestamp:"+ timestamp +", status:"+ status +", manual:"+ manual +", warning:"+ warning +", createUser:"+ createUser +"}";
    }
}
