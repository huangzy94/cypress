
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
                echo 'e2e test process'
           }
        }
        stage('Deploy') {
            steps {
                println "Deploy"
                archiveArtifacts 'mochawesome-report/*'
            script{
			allure([
			includeProperties: false, jdk: '', results: [[path: 'mochawesome-report']]
			])
			}
            }
        }
    }
    post {
     failure{
            script{
                emailext attachLog: true,
                // 邮件模板这里的引号一定要注意写对（坑）
                body: '''${SCRIPT, template="groovy-html.template"}''',
                mimeType: 'text/html',
                charset:'UTF-8',
                // PlatformGroup #10 构建失败
                subject: "${currentBuild.fullDisplayName} 构建失败",
                to: '18655174391@163.com'
         }
     }
 }
}
