
process.env.NODE_ENV = 'test';

const { request } = require('chai');

const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../server')

chai.use(chaiHttp)
chai.should()

describe('Greeting home route should return 200 status code', () => {
  it('should return 200 success code', (done) => {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        res.should.have.status(200)
        res.should.be.an('object')
        res.text.should.contain('{"status":"success","message":"Hello World"}')
        done()
      })
  })
})
