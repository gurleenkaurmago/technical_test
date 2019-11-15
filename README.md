# technical_test
I have used jenkins for building Ci/CD pipeline .

I first created an AWS virtual machine where I enabled port 8080(for jenkins) and port 3000(where my rest API would run), then installed jenkins as well as docker on my virtual machine.

On my local machine , I created a Rest API on VSCode which includes files like package.json and server.js which perform the task as asked in the question.

I have included my Dockerfile in the project itself and the entire project was then pushed to github.

I then created branches namely dev and test in github and checked out code in them.

then I created pipeline project in jenkins with the following pipeline script.

node{
    stage('pull project from github') {
        git 'https://github.com/gurleenkaurmago/technical_test'
    }
    
    //stage('two1') {
     //   sh 'pwd'
    //}
    
    stage (' test') { 
        
       
        //sh 'chmod +x ./script/test '
        //sh './script/test' //some permission problem with mocha otherwise running fine on local machine
    }
    
    stage ('build docker image') {
        sh 'docker build -t test-image . '
    }
    
    stage ('login dockerhub'){
        sh 'docker login --username $USERNAME --password $PASSWORD'
    }
    
    stage ('tag repo'){
        sh 'docker tag test-image gurleenkaurmago/tech_test:2.0'
        
    }
    
    stage ('push image to dockerhub'){
        sh 'docker push gurleenkaurmago/tech_test'
        
    }
}
    
which automatically created a docker image and pushed the image to docker hub.

pull docker image using "docker pull gurleenkaurmago/tech_test:2.0" and then run docker image on port 3000 

I have installed jenkins and docker on same the server
