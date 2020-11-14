package com.neo.kttvwebadmin.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

/**
 * @author thanglv on 11/14/2020
 * @project NBD
 */

@Configuration
public class BeanConfig {

    @Bean("restTemplate")
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }
}
