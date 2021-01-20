
pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'npm i'								   // bat命令用于windows环境，sh用于linux环境
				echo 'build process'
            }
        }
        stage('Test') {
            steps {
                sh 'npm run test'                          // 执行package.json的Scripts
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
     always{    // 无论构建结果失败与否，都执行
                archiveArtifacts 'cypress/videos/Catering/*.mp4'     // archiveArtifacts 指添加%WORKSPACE%文件
                archiveArtifacts 'mochawesome-report/assets/*'
                archiveArtifacts 'mochawesome-report/*'   
     }
     failure{   // 构建结果为失败时执行
            script{
                emailext attachmentsPattern 'cypress/screenshots/Catering/catering_login.js/*.png'
                emailext attachmentsPattern 'mochawesome-report/assets/*'
                emailext attachmentsPattern 'mochawesome-report/*'
                // 附件中携带构建LOG
                emailext attachLog: true,
                body: '您的UI自动化测试项目貌似失败了，详情请查看附件',
                mimeType: 'text/html',
                charset:'UTF-8',
                // 构建失败通知
                recipientProviders: [culprits()], subject: "Jenkins构建通知 - ${currentBuild.fullDisplayName} - 构建失败!",
                to: '13683339705@163.com,huangzy94@dingtalk.com'
         }
     }
 }
}
