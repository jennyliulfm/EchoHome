pipeline {
    agent any 
    stages {
        stage('Build') { 
            steps {
               sh 'npm --version'
               sh 'npm install'
               sh 'npm build'
            }
        }
        stage('Test') { 
            steps {
                sh 'echo "Hello world"'
            }
        }
        stage('Deploy') { 
            steps {
                // 
            }
        }
    }
}
