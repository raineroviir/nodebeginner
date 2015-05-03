var server = require('../server');
var expect = require('chai').expect;
var http = require('http');
var assert = require('assert');
var index = require('../index');
var router = require('../router');
var requestHandlers = require('../requestHandlers');

describe('server', function () {
  before(function () {
		server.start();
  });

	after(function () {
  server.close(function () { console.log('Server closed!'); });
	});
});

describe('/', function () {
	  it('should return 200', function (done) {
	    http.get('http://localhost:8888', function (res) {
	      assert.equal(200, res.statusCode);
	      done();
	  });
	}); 
});