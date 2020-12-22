
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
				junit 'reports/automated_testing_[hash].xml'
				archiveArtifacts 'cypress/videos/Catering/*.mp4'
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
