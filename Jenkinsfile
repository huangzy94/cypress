
pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                bat 'npm i'
				echo 'build process'
                echo "branch: ${env.BRANCH_NAME}"
                echo "current SHA: ${env.GIT_COMMIT}"
            }
        }
        stage('Test') {
            steps {
                bat 'npm run test'
				archiveArtifacts 'mochawesome-report/*.html'
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
