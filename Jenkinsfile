
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
				junit 'reports'
				archiveArtifacts 'cypress/videos/Catering/*.mp4'
                echo 'e2e test process'
			script{
			allure([
			includeProperties: false, jdk: '', results: [[path: 'reports']]
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
