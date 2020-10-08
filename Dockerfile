FROM openjdk:8-jre-slim
WORKDIR /nbd-api
COPY ./target/*-1.0.jar kttv-webadmin.jar
EXPOSE 8081
ENTRYPOINT ["java", "-jar", "-Dspring.profiles.active=true" ,"kttv-webadmin.jar"]
