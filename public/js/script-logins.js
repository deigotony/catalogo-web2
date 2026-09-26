async function cadastrarUsuario(event){
    console.log('entrou');
    event.preventDefault();
    const usuario=document.getElementById("usuario");
    const senha=document.getElementById("senha");
    if (!usuario.checkValidity() || !senha.checkValidity()) return;
    try{
        const resposta= await fetch("/dados/usuarios", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: usuario.value,
                senha: senha.value
            })
        })
        const dados=await resposta.json();
        console.log(dados);
    } catch(error){console.log("Erro:", error);}
}
async function logarUsuario(event){
    event.preventDefault();
    const usuario=document.getElementById("usuario");
    const senha=document.getElementById("senha");
    if (!usuario.checkValidity() || !senha.checkValidity()) return;
    try{
        const resposta= await fetch("/login", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: usuario.value,
                senha: senha.value
            })
        })
        const dados=await resposta.json();
        console.log(dados);
    } catch(error){console.log("Erro:", error);}
}