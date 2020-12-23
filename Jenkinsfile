
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
				archiveArtifacts 'mochawesome-report/*'
                echo 'e2e test process'
			script{
			allure([
			includeProperties: false, jdk: '', results: [[path: 'allure-report']]
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
