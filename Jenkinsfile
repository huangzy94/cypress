
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
				archiveArtifacts 'cypress/videos/Catering/*.mp4'
                echo 'e2e test process'
			script{
			allure([
			includeProperties: false, jdk: '', results: [[path: 'mochawesome-report']]
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
