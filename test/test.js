var request = require('supertest');
var app = require('../server.js');
describe('GET /', function() {
 it('respond with hello world', function(done) {
 //navigate to root and check the the response is "hello world"
 request(app).get('/').expect('Hello World', done);
 });

 ch.exec('git rev-parse HEAD', function(err, stdout) {


 it('respond with description, version and last commit hash', function(done)  {
     request(app).get('/status').expect('{"myapplication":[{"version":"1.0","description":"pre-interview technical test","lastcommitsha":stdout}]}',done);
 })
});
});
