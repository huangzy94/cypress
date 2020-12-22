
pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                bat 'npm i'
				echo 'build process'
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
	tools {
		Node.js 'Node.js 13'
	}
}
