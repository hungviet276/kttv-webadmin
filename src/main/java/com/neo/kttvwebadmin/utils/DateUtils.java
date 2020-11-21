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
            SimpleDateFormat simpleDateFormat = new SimpleDateFormat(dateFormatString);
            simpleDateFormat.parse(value);
            return true;
        } catch (ParseException e) {
            return false;
        }
    }

    public static String getStringDateFormat(String format) {
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat(format);
        return simpleDateFormat.format(new Date());
    }

    public static String getStringDateFormat(Date date, String format) {
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat(format);
        return simpleDateFormat.format(date);
    }
}
