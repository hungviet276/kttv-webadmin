package com.neo.kttvwebadmin;

import java.util.Locale;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

//@SpringBootTest
class KttvWebadminApplicationTests {

//    @Test
    void contextLoads() {
    	BCryptPasswordEncoder passwordEncoder  = new BCryptPasswordEncoder();
    	String s = passwordEncoder.encode("12345678");
    	System.out.println(s);
    	
    }

    public static void main(String[] args) {
    	BCryptPasswordEncoder passwordEncoder  = new BCryptPasswordEncoder();
    	String s = passwordEncoder.encode("12345678");
    	System.out.println(s);
    	Locale l = new Locale("vi_VN");
    	;
//    	System.out.println("l.getCountry()" + l.getCountry()  + "| " 
//    	+ l.getDisplayCountry() + "|"+ l.getDisplayLanguage() + "|"+ l.getDisplayName() +"|"+l.getLanguage() + "+"+ l.get);
	}
}
