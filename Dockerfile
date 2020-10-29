FROM store/oracle/serverjre:1.8.0_241-b07
WORKDIR /kttv-webadmin
COPY ./target/*-1.0.jar kttv-webadmin.jar
EXPOSE 8081
ENTRYPOINT ["java", "-Dspring.profiles.active=dev", "-jar" ,"kttv-webadmin.jar"]