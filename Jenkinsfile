pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        bat 'npm install'
        
      }
    }
  stages {
    stage('Test') {
      steps {
         bat 'npm run test'
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
