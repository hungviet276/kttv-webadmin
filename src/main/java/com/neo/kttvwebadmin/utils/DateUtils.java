package com.neo.kttvwebadmin.utils;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * @author thanglv on 11/14/2020
 * @project NBD
 */
public class DateUtils {
    public static boolean isValid(String value, String dateFormatString) {
        if (null == value) {
            return true;
        }
        if (value.length() != dateFormatString.length()) {
            return false;
        }
        try {

            int day = Integer.parseInt(value.substring(0, 2));
            int month = Integer.parseInt(value.substring(3, 5));
            int year = Integer.parseInt(value.substring(6, 10));

            SimpleDateFormat simpleDateFormat = new SimpleDateFormat(dateFormatString);
            Date date = simpleDateFormat.parse(value);
            return true;
        } catch (ParseException e) {
            return false;
        }
    }
}
