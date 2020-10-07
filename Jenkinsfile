pipeline {
    agent any
    stages {
        stage('Clone') {
            steps {
                git branch: "develop", url: 'https://10.252.10.175/thanglv/kttv-webadmin.git'
            }
        }
        stage('Build') {

            steps {
                script {
                     def pom = readMavenPom file: 'pom.xml'
                     version = pom.version
                     name = pom.name
                    sh 'mvn clean install package -Dlog4j2.contextSelector=org.apache.logging.log4j.core.async.AsyncLoggerContextSelector -Dspring.profiles.active=dev '
                    sh 'mvn dockerfile:build'
                    sh "docker-compose up -d --build"
                }
            }
        }
    }
}
