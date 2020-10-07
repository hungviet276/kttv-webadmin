FROM tomcat:8.0.51-jre8-alpine
RUN value=`cat conf/server.xml` && echo "${value//8080/7777}" >| conf/server.xml
EXPOSE 7777
RUN rm -rf /usr/local/tomcat/webapps/*
COPY ./target/*.war /usr/local/tomcat/webapps/ROOT.war
CMD ["catalina.sh", "run"]
