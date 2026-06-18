async function cadastrarItem(event){
    event.preventDefault();
    var imagem=document.getElementById("imageUpload");
    var nome=document.getElementById("nome");
    var data=document.getElementById("data");
    var descricao=document.getElementById("descricao");
    if (!imagem || !nome || !data || !descricao) return;
    try{
        const resposta=await fetch('/itens', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                nome: nome.value,
                imagem: imagem.files[0].name,
                data: data.value,
                descricao: descricao.value
            })
        })
        const formData = new FormData();
        formData.append('foto', imagem.files[0]);
        const resp2 = await fetch('/imagens', {
            method: "POST",
            body: formData
        })
    } catch(err){ return err;}
}