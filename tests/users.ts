/* eslint-disable */
const ch = require('chai');
const path = require('path');
const dotEnvPath = path.resolve('./.env');
const chaiHttp = require('chai-http');
const expect = ch.expect;
const dotenv = require('dotenv');

dotenv.config({
  path: dotEnvPath,
});

// Assertion
ch.should();
ch.use(chaiHttp);

describe('User CRUD endpoints.', () => {
  describe('POST', () => {
    it('Deve criar um novo usuário', (done) => {
      const user = {
        name: 'Teste',
      };

      ch.request(`${process.env.BASE_URL_ENDPOINTS}`)
        .post('/users')
        .set('X-Api-Key', process.env.API_KEY)
        .send(user)
        .end((err: any, response: any) => {
          response.should.have.status(201);
          response.body.should.be.a('object');
          response.body.should.have
            .property('data')
            .have.property('User')
            .have.property('name')
            .eq('Teste');
          done();
        });
    });
  });
  describe('GET', () => {
    it('Deve retornar todas as users', (done) => {
      ch.request(`${process.env.BASE_URL_ENDPOINTS}`)
        .get('/users')
        .set('X-Api-Key', process.env.API_KEY)
        .end((err: any, response: any) => {
          response.should.have.status(200);
          done();
        });
    });
  });
  describe('PUT', () => {
    it('Deve atualizar user', (done) => {
      const userId = '602c4bae402794387623316a';
      const user = {
        name: 'Teste2',
      };
      ch.request(`${process.env.BASE_URL_ENDPOINTS}`)
        .put(`/users/${userId}`)
        .set('X-Api-Key', process.env.API_KEY)
        .send(user)
        .end((err: any, response: any) => {
          response.should.have.status(200);
          response.body.should.be.a('object');
          response.body.should.have
            .property('data')
            .have.property('User')
            .have.property('name')
            .eq('Teste2');
          done();
        });
    });
  });
  describe('DELETE', () => {
    it('Deve deletar um user', (done) => {
      const userId = '602c42f0c9b5fe2d19dae4c5';
      ch.request(`${process.env.BASE_URL_ENDPOINTS}`)
        .delete(`/users/${userId}`)
        .set('X-Api-Key', process.env.API_KEY)
        .end((err: any, response: any) => {
          response.should.have.status(204);
          done();
        });
    });
  });
});
