/**
 * 
 */
package com.neo.kttvwebadmin.services;

import com.neo.kttvwebadmin.dto.Login;
import com.neo.kttvwebadmin.entity.UserInfo;

import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.POST;

/**
 * @author admin
 *
 */
public interface UserService {

	@POST("authenticate")
	public Call<Login> authenticate(@Body UserInfo userInfo);

}
