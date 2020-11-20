FROM store/oracle/serverjre:1.8.0_241-b07
RUN useradd -ms /bin/bash tb5
USER tb5
WORKDIR /kttv-webadmin
COPY ./target/*-1.0.jar kttv-webadmin.jar
EXPOSE 8081
ENTRYPOINT ["java", "-Dspring.profiles.active=prod", "-Dlog4j2.contextSelector=org.apache.logging.log4j.core.async.AsyncLoggerContextSelector", "-jar" ,"kttv-webadmin.jar"]
