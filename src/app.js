const express=require("express");
const itemRoutes=require("./routes/itemRoutes");
const usuarioRoutes=require("./routes/usuarioRoutes");
const categoriaRoutes=require("./routes/categoriaRoutes");

const app=express();

app.use(express.json());
    app.use(express.static("public")); // requisições de arquivos estáticos (como HTML) são feitas em public/
/*app.use(session({
    secret: 'chave-weberson',
    resave: false, // não salvar se não houver mudanças
    saveUninitialized: false, // não salvar sessões inúteis
    cookie: {
        maxAge: 1000 * 60 * 60 // 1 hora
    }
}));*/

app.use("/usuarios", usuarioRoutes);
app.use("/itens", itemRoutes);
app.use("/categorias", categoriaRoutes);

// URL inválida
/*
app.use((req, res)=>{
    if (req.method=='GET'){res.status(404).json({erro: 'Página não encontrada'});}
})*/

module.exports=app;