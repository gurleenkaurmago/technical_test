var request = require('supertest');
var app = require('../server.js');
const ch = require('child_process');
describe('GET1 /', function() {
 it('respond with hello world', function(done) {
 //navigate to root and check the the response is "hello world"
 request(app).get('/').expect('Hello World', done);
 });
});

describe('GET2 /', function() { 
ch.exec('git rev-parse HEAD', function(err, stdout) { //creates a child process so that it can take last commit hash from git


 it('respond with description, version and last commit hash', function(done)  {
     request(app).get('/status').expect('{"myapplication":[{"version":"1.0","description":"pre-interview technical test","lastcommitsha":stdout}]}',done);
 })

});
});