const express=require("express");
const path = require("path")
const itemRoutes=require("./routes/itemRoutes");
const usuarioRoutes=require("./routes/usuarioRoutes");
const categoriaRoutes=require("./routes/categoriaRoutes");
const { estaAutenticado } = require("./middleware/authMiddleware");

const app=express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/cadastro.html", estaAutenticado, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/cadastro.html"));
});
app.use(express.static("public")); // requisições de arquivos estáticos (como HTML) são feitas em public/
/*app.use(session({
    secret: 'chave-weberson',
    resave: false, // não salvar se não houver mudanças
    saveUninitialized: false, // não salvar sessões inúteis
    cookie: {
        maxAge: 1000 * 60 * 60 // 1 hora
    }
}));*/
app.use(express.static(path.join(__dirname, "../public")));
app.use("/usuarios", usuarioRoutes);
app.use("/itens", itemRoutes);
app.use("/categorias", categoriaRoutes);

// URL inválida
/*
app.use((req, res)=>{
    if (req.method=='GET'){res.status(404).json({erro: 'Página não encontrada'});}
})*/

module.exports=app;