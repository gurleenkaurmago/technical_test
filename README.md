# technical_test
I have used jenkins for building Ci/CD pipeline .

I first created an AWS virtual machine where I enabled port 8080(for jenkins) and port 3000(where my rest API would run), then installed jenkins as well as docker on my virtual machine.

On my local machine , I created a Rest API on VSCode which includes files like package.json and server.js which perform the task as asked in the question.

I have included my Dockerfile in the project itself and the entire project was then pushed to github.

I then created branches namely dev and test in github and checked out code in them.

then I created pipeline project in jenkins with the following pipeline script.



which automatically created a docker image and pushed the image to docker hub.
