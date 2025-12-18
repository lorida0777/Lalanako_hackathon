pipeline {
    agent any

    environment {
        DOCKER_COMPOSE_VERSION = '2.23.0'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Images') {
            steps {
                sh 'docker-compose build --no-cache'
            }
        }

        stage('Test Backend') {
            steps {
                sh 'docker-compose up -d backend'
                sh 'sleep 10'
                sh 'curl -f http://localhost:8000/docs || exit 1'
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker-compose down || true'
                sh 'docker-compose up -d'
            }
        }
    }

    post {
        always {
            sh 'docker-compose logs'
            sh 'docker system prune -f'
        }
        success {
            echo 'Déploiement LALÀNAKO réussi !'
        }
        failure {
            echo 'Échec du déploiement.'
        }
    }
}