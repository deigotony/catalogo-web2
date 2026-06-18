const express=require('express');
const session=require('express-session');
const itens=require('./dados/itens.json');
const usuarios=require('./dados/usuarios.json');

const fs=require('fs');
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

const app=express();
const PORT=8080;
// sessão dura 1 hora
app.use(session({
    secret: 'chave-weberson',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60
    }
}));
const path=require('path');
const { stringify } = require('querystring');

// rotas GET

// (procura o arquivo com o nome da requisição a partir do public)
app.use(express.static('public'));

app.get('/privado/cadastro.html', (req, res) => {
    if (!req.session.user) {
        return res.status(401).json({
            erro: "Você precisa estar logado!"
        });
    }

    res.sendFile(path.join(__dirname, '/privado/cadastro.html'));
});

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public/main.html'));
})

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

// cadastro de usuários
app.post('/dados/usuarios', async (req, res)=>{
    const user=req.body;
    let obj=usuarios.find(usuario=> usuario.email===user.email);
    if (obj) return res.status(409).json({aviso: 'Usuário já cadastrado!'})
    usuarios.push(user);

    // escreve no próprio arquivo usuarios.json
    const usuariosJson = JSON.stringify(usuarios);
    fs.writeFileSync("./dados/usuarios.json", usuariosJson, "utf8");
    res.send({sucesso: 'Usuário cadastrado com sucesso.'});
})
// cadastro de itens
// json dos itens
app.post('/itens', async (req, res)=>{
    const { nome, imagem, data, descricao } = req.body;
    const numero=itens.length+1;
    itens.push({id: numero, nome: nome, imagem: imagem, descricao: descricao, data: data});
    const itensJson=JSON.stringify(itens);
    fs.writeFileSync("./dados/itens.json", itensJson, "utf8");
    res.status(200).json({sucesso: "item cadastrado com sucesso"});
})
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

app.get('/logout', function(req, res){
  req.session.destroy(function(){
    res.redirect('/');
  });
});

// URL inválida
app.use((req, res)=>{
    if (req.method=='GET'){res.status(404).json({erro: 'Página não encontrada'});}
})

// POST inválido
app.use((req, res)=>{
    if (req.method=='POST') {res.status(405).json({erro: 'POST negado'});}
})

app.listen(PORT, ()=>{console.log(`Servidor rodando na porta ${PORT}`)});