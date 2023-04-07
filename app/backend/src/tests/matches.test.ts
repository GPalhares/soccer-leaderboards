import * as sinon from 'sinon';
import * as chai from 'chai';
require('dotenv').config();

// @ts-ignore
import jwt = require('jsonwebtoken');
// @ts-ignore
import chaiHttp = require('chai-http');
const JWT_SECRET = 'jwt-teste';

import { app } from '../app';


const { expect } = chai;

chai.use(chaiHttp);

describe('Testes matches', () => {

  it('testa rota "/matches"', async function() {
    const httpResponse = await chai
      .request(app)
      .get('/matches');
    expect(httpResponse.status).to.be.equal(200);
  });

  it('testa rota "/matches" create match', async function() {
    const httpResponse = await chai
      .request(app)
      .post('/matches')
      .send({})
    expect(httpResponse.status).to.be.equal(401);
  });

});


