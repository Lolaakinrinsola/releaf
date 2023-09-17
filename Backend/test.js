const User= require('./Model/userModel')
const mongoose = require("mongoose");
const chai=require('chai')
const server=require('./server')
const chaiHttp =require('chai-http')

const API='http://localhost:3005'
const should=chai.should();
 
chai.use(chaiHttp);

describe("/GET user",()=>{
    before(function () {
        this.timeout(10000);
      });
    
    it('it should get all users based on the query',(done)=>{
        chai
        .request(API)
        .get("/suggestions?q=redwood")
        .end((err, response) => {
              chai.expect(response).to.have.status(200);
              chai.expect(response.body.data).to.be.an('object');
              chai.expect(response.body.status).to.be.eql('success');
              done();
        });
    })
})