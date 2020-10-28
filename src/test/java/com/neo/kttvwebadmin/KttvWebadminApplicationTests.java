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
    	//$2a$10$dVUldV1Ve8S1loKjbSUJReQg3TaHTWoZ0XSogOBck7OKzI4Z6ukWm
    	String s = passwordEncoder.encode("12345678");//$2a$10$nNqlbUEzWTGFblkDDwy5oe7lKIR9istoTs.mFMHaj8Wlzv.p5tVqO
    	System.out.println(s + "|" + passwordEncoder.matches("12345678","$2a$10$nNqlbUEzWTGFblkDDwy5oe7lKIR9istoTs.mFMHaj8Wlzv.p5tVqO"));
    	Locale l = new Locale("vi_VN");
    	;
//    	System.out.println("l.getCountry()" + l.getCountry()  + "| " 
//    	+ l.getDisplayCountry() + "|"+ l.getDisplayLanguage() + "|"+ l.getDisplayName() +"|"+l.getLanguage() + "+"+ l.get);
	}
}
