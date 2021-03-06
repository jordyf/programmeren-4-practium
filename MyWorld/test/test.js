/**
 * Created by Jordy Frijters on 6-5-2017.
 */

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server.js');
var should = chai.should();
chai.use(chaiHttp);
describe('API Test', function() {
    it('Test GET /api/v1/cities', function(done) {
        chai.request(server)
            .get('/api/v1/cities')
            .end(function(err, res) {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
    });
});