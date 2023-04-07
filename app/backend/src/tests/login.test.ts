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

describe('Testes Login sem sucesso', () => {

  it('testa rota "/login" sem parametros', async function() {
    const httpResponse = await chai
      .request(app)
      .post('/login');
    expect(httpResponse.status).to.be.equal(400);
  });

  it ('deve retonar um status 400, caso email não informado', async () => {
    const httpResponse = await chai
      .request(app)
      .post('/login')
      .send({})
    expect(httpResponse.status).to.be.equal(400)
    expect(httpResponse.body).to.be.deep.equal({
      message: 'All fields must be filled'
    })
  })
});

// describe('Testes Login válido', () => {
//   it ('deve retornar um status 200, em caso de sucesso', async () => {
//     const user = {
//       email: 'user@user.com',
//       password: 'secret_user'
//     };
    
//     const httpResponse = await chai
//       .request(app)
//       .post('/login')
//       .send({  
//         email: 'user@user.com',
//         password: 'secret_user' 
//       });
      
//     expect(httpResponse.status).to.be.equal(200);
//   })
// });

