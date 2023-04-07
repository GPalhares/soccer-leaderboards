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

describe('Testes leaderboard sem sucesso', () => {

  it('testa rota "/leaderboard"', async function() {
    const httpResponse = await chai
      .request(app)
      .get('/leaderboard');
    expect(httpResponse.status).to.be.equal(200);
  });

  it ('testa rota "/leaderboard/away", ', async () => {
    const httpResponse = await chai
      .request(app)
      .get('/leaderboard/away')
    expect(httpResponse.status).to.be.equal(200)
  })
  it ('testa rota "/leaderboard/home", ', async () => {
    const httpResponse = await chai
      .request(app)
      .get('/leaderboard/home')
    expect(httpResponse.status).to.be.equal(200)
  })
});


