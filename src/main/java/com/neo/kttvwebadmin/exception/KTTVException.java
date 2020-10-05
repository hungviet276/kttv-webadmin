package com.neo.kttvwebadmin.exception;

public class KTTVException extends Exception {
	private static final long serialVersionUID = 1L;

	private int code;

    private String message;

    public KTTVException(int code, String message) {
        this.code = code;
        this.message = message;
    }

    public KTTVException(String message) {
        this.code = 400;
        this.message = message;
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    @Override
    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
