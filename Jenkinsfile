pipeline {
    agent any
    stages {
        stage('Clone') {
            steps {
                git branch: "prod", url: 'https://192.168.1.21:9998/tb5/kttv-webadmin.git'
            }
        }
        stage('Build') {

            steps {
                script {
                     def pom = readMavenPom file: 'pom.xml'
                     version = pom.version
                     name = pom.name
                    sh 'mvn -DskipTests clean verify install -Dlog4j2.contextSelector=org.apache.logging.log4j.core.async.AsyncLoggerContextSelector -Dspring.profiles.active=prod '
                    sh 'mvn dockerfile:build'
                    sh "docker-compose up -d --build"
                }
            }
        }
    }
}
