
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
                bat 'npm run cypress'
				junit 'reports/automated_testing_[hash].xml'
				archiveArtifacts 'cypress/videos/Catering/*.mp4'
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
