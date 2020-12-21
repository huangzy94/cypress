
pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                bat 'npm install'
				bat 'npm install -g serve'
            }
        }
        stage('Test') {
            steps {
                bat 'npm run test'
			script{
			allure([
			includeProperties: false, jdk: '', results: [[path: 'cypress/reports']]
			])
			}
           }
        }
        stage('Deploy') {
            steps {
                println "Deploy"
            }
        }
    }
}