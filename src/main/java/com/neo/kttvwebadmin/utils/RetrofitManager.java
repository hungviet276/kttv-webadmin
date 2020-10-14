/**
 * 
 */
package com.neo.kttvwebadmin.utils;

import org.springframework.beans.factory.annotation.Value;

import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.logging.HttpLoggingInterceptor;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

import javax.annotation.PostConstruct;

/**
 * @author admin
 *
 */
@Component
public class RetrofitManager {

	@Value("${api_url}")
	private  String API_URL;

	private  Retrofit.Builder builder;

	private  Retrofit retrofit;

	@PostConstruct
	public void initBuilder() {
		builder  = new Retrofit.Builder().baseUrl(API_URL)
				.addConverterFactory(GsonConverterFactory.create());
		retrofit  = builder.build();
	}

	private  OkHttpClient.Builder httpClient = new OkHttpClient.Builder();

	private  HttpLoggingInterceptor logging = new HttpLoggingInterceptor()
			.setLevel(HttpLoggingInterceptor.Level.BASIC);

	public  <S> S createService(Class<S> serviceClass) {
		if (!httpClient.interceptors().contains(logging)) {
			httpClient.addInterceptor(logging);
			builder.client(httpClient.build());
			retrofit = builder.build();
		}
		return retrofit.create(serviceClass);
	}

	public  <S> S createService(Class<S> serviceClass, final String token) {
		if (token != null) {
			httpClient.interceptors().clear();
			httpClient.addInterceptor(chain -> {
				Request original = chain.request();
				Request.Builder builder1 = original.newBuilder().header("Authorization", token);
				Request request = builder1.build();
				return chain.proceed(request);
			});
			builder.client(httpClient.build());
			retrofit = builder.build();
		}
		return retrofit.create(serviceClass);
	}
}
