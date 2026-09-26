let item;
async function mostrarItens(){
    const resposta=await fetch('/dados/itens'); // pega o json dos itens pelo express
    const itens=await resposta.json();
    for (let i=0; i<itens.length; i++){
        item=itens[i];
        item.imagem='imagens/'+item.imagem;
        const novoItem=criarCard();
        novoItem.id=item.id;
        document.getElementById("catalogo").appendChild(novoItem);
    }
}
function criarCard(){
    const card=document.createElement("div");
    card.classList.add("card");
    card.setAttribute("style", "width:250px");

    const imagem=document.createElement("img");
    imagem.classList.add("card-img-top");
    imagem.setAttribute("src", item.imagem);
    imagem.setAttribute("style", "height:130px");

    const body=document.createElement("div");
    body.classList.add("card-body");
    body.setAttribute("style", "height:200px");

    const titulo=document.createElement("div");
    titulo.classList.add("card-title");
    titulo.textContent=item.nome;

    const texto=document.createElement("div");
    texto.classList.add("card-text");
    texto.classList.add("h6");
    texto.textContent=item.descricao;

    const botao=document.createElement("a");
    botao.classList.add("btn");
    botao.classList.add("btn-primary");
    botao.textContent="Ver mais";
    botao.setAttribute("href", 'catalogo/'+item.id);

    body.appendChild(titulo);
    body.appendChild(texto);
    body.appendChild(botao);

    card.appendChild(imagem);
    card.appendChild(body);
        
    return card;
}
mostrarItens();