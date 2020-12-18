pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        println "Build"
        
      }
    }
  stages {
    stage('Test') {
      steps {
         println "Test"
      }
    }
  stages {
    stage('Deploy') {
      steps {
        println "Deploy"
      }
    }
  }
  tools {
    Node.js 'Node.js 13'
  }   
    environment {
      CHROME_BIN = '/bin/google-chrome'
  }
}
