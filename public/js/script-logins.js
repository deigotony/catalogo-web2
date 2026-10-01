async function cadastrarUsuario(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;

    try {
        const response = await fetch('/usuarios', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({nome, email, senha })
        });

        const data = await response.json().catch(() => ({}));

        if (response.ok) {
            alert('Conta criada com sucesso!');
            window.location.href = './login.html';
        } else {
            console.log('Resposta do backend:', data);
            alert(data.erro || data.mensagem || `Erro ${response.status}: Dados inválidos.`);
        }
    } catch (error) {
        console.error('Erro na requisição:', error);
        alert('Erro ao conectar ao servidor.');
    }
}
async function logarUsuario(event){
    event.preventDefault();

    const email=document.getElementById("usuario").value;
    const senha=document.getElementById("senha").value;
    
    try{
        const resposta= await fetch("/usuarios/login", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, senha})
        })
        const dados=await resposta.json();

        if(resposta.ok){
            alert('login efetuado com sucesso');
            window.location.href = './cadastro.html';
        }else{
            alert(dados.erro || 'falha ao efetuar login');
        }
    } catch(error){console.log("Erro:", error);}
}