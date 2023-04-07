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

describe('Testes teams sem sucesso', () => {

  it('testa rota "/teams"', async function() {
    const httpResponse = await chai
      .request(app)
      .get('/teams');
    expect(httpResponse.status).to.be.equal(200);
  });

  it ('testa rota "/teams/id", ', async () => {
    const httpResponse = await chai
      .request(app)
      .get('/teams/3')
    expect(httpResponse.status).to.be.equal(200)
  })

});


