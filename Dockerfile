FROM openjdk:8-jre-slim
WORKDIR /nbd-api
COPY ./target/*-1.0.jar kttv-webadmin.jar
EXPOSE 8081
ENTRYPOINT ["java", "-Dspring.profiles.active=dev", "-jar" ,"kttv-webadmin.jar"]
