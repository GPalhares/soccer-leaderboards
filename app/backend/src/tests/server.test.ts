import * as sinon from 'sinon';
import * as chai from 'chai';
require('dotenv').config();
// @ts-ignore
import jwt = require('jsonwebtoken');
// @ts-ignore
import chaiHttp = require('chai-http');

const { expect } = chai;

chai.use(chaiHttp);

import { App } from '../app'


const PORT = 5555;

describe('App', () => {
  let server: App;
  server = new App();

  it('deve chamar o método listen com a porta solicitada', (done) => {
    const appSpy = sinon.spy(server, 'start');
    server.start(PORT);
    expect(appSpy.calledWith(PORT)).to.equal(true);
    done();
  });


});
