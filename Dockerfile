FROM openjdk:8-jre-slim
WORKDIR /kttv-webadmin
COPY ./target/*-1.0.jar kttv-webadmin.jar
EXPOSE 8081
ENTRYPOINT ["java", "-Dspring.profiles.active=prod", "-Dlog4j2.contextSelector=org.apache.logging.log4j.core.async.AsyncLoggerContextSelector", "-jar" ,"kttv-webadmin.jar"]
