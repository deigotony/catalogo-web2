process.env.NODE_ENV = 'test';

const repository=require("../repositories/UsuarioRepository");
const request=require("supertest");
const sequelize=require("../config/database");

describe("Testes de usuários", ()=>{
    beforeAll(async ()=>{
        await sequelize.sync();
    })
    beforeEach(async ()=>{
        t=await sequelize.transaction();
    })
    afterEach(async ()=>{
        await t.rollback();
    })
    afterAll(async ()=>{
        await sequelize.close();
    })
})