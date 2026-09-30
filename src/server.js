const app=require("./app");
const sequelize=require('./config/database');
const PORT=8080;

/*const express=require('express');
const session=require('express-session');
const itens=require('../dados/itens.json');
const usuarios=require('../dados/usuarios.json');

const fs=require('fs');
//armazenamento de arquivos
const multer=require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/imagens/');
    },
    filename: (req, file, cb) => {
        cb(
            null,
            file.originalname
        );
    }
});
const upload = multer({ storage });

const path=require('path');
const { stringify } = require('querystring');

// rotas GET

// (procura o arquivo com o nome da requisição a partir do public)
app.use(express.static('public'));

app.get('cadastro.html', (req, res) => {
    if (!req.session.user) {
        return res.status(401).json({
            erro: "Você precisa estar logado!"
        });
    }

    res.sendFile(path.join(__dirname, 'cadastro.html'));
});


app.get('/dados/itens', async (req, res)=>{
    res.json(itens);
})
app.get('/dados/usuarios/:email', async (req, res)=>{
    const {email}=req.params;
    let obj=usuarios.find(usuario=> usuario.email===email);
    if (!obj) return res.json({erro: 'Usuário não encontrado'});
    res.json(obj);
})

app.get('/catalogo/:id', (req, res)=>{
    let obj=itens.find(item=> item.id===id);
    if (!obj) return res.json({erro: 'Item não encontrado'});
})

// rotas POST
app.use(express.json());

// imagens dos itens
app.post('/imagens', upload.single('foto'), async (req, res)=>{
    res.json({sucesso: true});
})
//login e logout
app.post('/login', async(req, res)=>{
    const { email, senha } = req.body;

    const usuario = usuarios.find(
        u => u.email === email && u.senha === senha
    );
    if (!usuario) return res.sendStatus(400);
    req.session.regenerate((err)=>{
        if (err) return res.sendStatus(500);
        req.session.user={email: usuario.email};
        req.session.success='Autenticado como '+usuario.email;
        res.status(200).json({sucesso: "Login bem-sucedido"});
    })
});

app.get('/logout', function(req, res){ // DEVE SER UM LOGOUT.
  req.session.destroy(function(){
    res.redirect('/');
  });
});
*/

async function iniciarBanco(){
    try{
        await sequelize.authenticate();
        await sequelize.sync();
        console.log("Banco conectado");
        app.listen(PORT, ()=>{console.log(`Servidor rodando na porta ${PORT}`)});
    } catch (error){
        console.log(error);
    }
}
iniciarBanco();