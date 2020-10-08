/**
 * 
 */
package com.neo.kttvwebadmin.utils;

import org.springframework.beans.factory.annotation.Value;

import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.logging.HttpLoggingInterceptor;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

/**
 * @author admin
 *
 */
public class RetrofitManager {

	@Value("${api.url}")
	private static final String API_URL = "http://10.252.10.175:8080/api/v1/";

	private static Retrofit.Builder builder = new Retrofit.Builder().baseUrl(API_URL)
			.addConverterFactory(GsonConverterFactory.create());

	private static Retrofit retrofit = builder.build();

	private static OkHttpClient.Builder httpClient = new OkHttpClient.Builder();

	private static HttpLoggingInterceptor logging = new HttpLoggingInterceptor()
			.setLevel(HttpLoggingInterceptor.Level.BASIC);

	public static <S> S createService(Class<S> serviceClass) {
		if (!httpClient.interceptors().contains(logging)) {
			httpClient.addInterceptor(logging);
			builder.client(httpClient.build());
			retrofit = builder.build();
		}
		return retrofit.create(serviceClass);
	}

	public static <S> S createService(Class<S> serviceClass, final String token) {
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
