
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
                bat 'npm run test'                          // 执行package.jsom的脚本
                echo 'e2e test process'
           }
        }
        stage('Deploy') {
            steps {
                println "Deploy"
            }
        }
    }
    post {      // 构建结束后操作
     always{    
                archiveArtifacts 'cypress/videos/Catering/*.mp4'
     }
     failure{
                archiveArtifacts 'cypress/screenshots/Catering/catering_login.js/*.png'
                archiveArtifacts 'mochawesome-report/assets/*'
                archiveArtifacts 'mochawesome-report/*'
            script{
                emailext attachLog: true,
                // 邮件模板这里的引号一定要注意写对（坑）
                body: '''${SCRIPT, template="groovy-html.template"}''',
                mimeType: 'text/html',
                charset:'UTF-8',
                // PlatformGroup #10 构建失败
                subject: "Jenkins构建通知 - $PROJECT_NAME-${currentBuild.fullDisplayName} - $BUILD_STATUS!",
                to: '13683339705@163.com'
         }
     }
 }
}
