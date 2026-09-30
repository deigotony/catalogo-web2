process.env.NODE_ENV = 'test';

const app=require('../src/app');
const request=require("supertest");
const sequelize=require("../src/config/database");

describe("Testes de usuários", ()=>{
    let t;
    beforeAll(async ()=>{
        await sequelize.authenticate();
    })
    beforeEach(async ()=>{
        /*
        as alterações feitas pelo teste não devem ser realizadas de fato no banco de dados,
        então decidi fazer com transações de sequelize (que podem dar rollback)

        pra isso também precisei usar CLS
        */
        t=await sequelize.transaction();

    })
    afterEach(async ()=>{
        await t.rollback();
    })
    afterAll(async ()=>{
        await sequelize.close();
    })

    describe("Criação de usuários", ()=>{
        test.each([
            ['Rodrigo', 'rodrigo@gmail.com', '12345'],
            ['Diego', 'diego@gmail.com', '123456'],
            ['Wemerson', 'wemerson@gmail.com', '12356']
        ])(("Usuário %s de email %s e senha %s criado com sucesso."), async (a, b, c)=>{
            const resposta=await request(app).post("/usuarios").send({
                nome: a,
                email: b,
                senha: c
            });
            expect(resposta.status).toBe(201);
            expect(resposta.usuario.nome).toBe(a);
            expect(resposta.usuario.email).toBe(b);
            expect(resposta.usuario.senha).toBe(c);
        })
    })
    describe("Erros de criação de usuário", ()=>{
        it('E-mail inválido', async ()=>{
            const resposta=await request(app).post('/usuarios').send({
                nome: 'a',
                email: 'email',
                senha: '123'
            });
            expect(resposta.body).toStrictEqual({"erro": "email inválido"});
        })
        describe('Campos vazios', ()=>{
            test.each([
                ['', '', ''],
                ['', 'a@gmail.com', '123'],
                ['a', '', '123'],
                ['a', 'a@gmail.com', '']
            ])(('nome %s email %s senha %s'), async (a, b, c)=>{
                const resposta=await request(app).post('/usuarios').send({
                    nome: a,
                    email: b,
                    senha: c
                })
                expect(resposta.status).toBe(400);
                expect(resposta.body).toStrictEqual({"erro":"todos os campos são obrigatórios"});
            })
        })
        it ('E-mail duplicado', async()=>{
            await request(app).post('/usuarios').send({
                nome: "a",
                email: "a@gmail.com",
                senha: "123"
            })
            const resposta=await request(app).post('/usuarios').send({
                nome: 'b',
                email: 'email@gmail.com',
                senha: '1233'
            });
            expect(resposta.status).toBe(400);
            expect(resposta.body).toStrictEqual({'erro': 'email já cadastrado no sistema'});
        })
    })
})