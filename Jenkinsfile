pipeline {
    agent any

    environment {
        NODE_ENV = 'test'
    }

    stages {

        stage('Checkout') {
            steps {
                echo 'Cloning repository...'
                git branch: 'master', url: 'https://github.com/ziedhannachi/playwright-demo_web_shop.git'
                
                // Vérifie le contenu du workspace
                bat 'dir /s'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing Node.js dependencies...'
                bat 'npm install'
                
                // Installe les navigateurs pour Playwright
                bat 'npx playwright install'
            }
        }

        stage('Run E2E Tests') {
            steps {
                echo 'Running only @e2e tests...'
                
                // Lancer uniquement les scénarios tagués @e2e
                bat 'npx cucumber-js --tags "@e2e" --format html:tests\\reports\\report.html'
            }
        }

        stage('Publish Reports') {
            steps {
                echo 'Publishing Cucumber HTML report...'

                // Archiver tous les rapports HTML générés
                archiveArtifacts artifacts: 'tests/reports/**/*.html', allowEmptyArchive: true

                // Publier le rapport HTML directement dans Jenkins
                publishHTML(target: [
                    reportName: 'Cucumber E2E Report',
                    reportDir: 'tests/reports',
                    reportFiles: 'report.html',
                    keepAll: true
                ])
            }
        }
    }

    post {
        always {
            echo 'Cleaning workspace...'
            cleanWs()
        }
        success {
            echo 'Pipeline succeeded!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
