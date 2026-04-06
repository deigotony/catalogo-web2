function login(event) {
  event.preventDefault();
  const usuario = document.getElementById("usuario").value;

  localStorage.setItem("usuario", usuario);
  window.location.href = "catalogo.html";
}

function salvarItem(event) {
  event.preventDefault();

  const item = {
    nome: document.getElementById("nome").value,
    data: document.getElementById("data").value,
    imagem: document.getElementById("imagem").value,
    descricao: document.getElementById("descricao").value
  };

  let itens = JSON.parse(localStorage.getItem("itens")) || [];
  itens.push(item);

  localStorage.setItem("itens", JSON.stringify(itens));

  alert("Item cadastrado!");
}

function carregarCatalogo() {
  const catalogo = document.getElementById("catalogo");
  if (!catalogo) return;

  const itens = JSON.parse(localStorage.getItem("itens")) || [];

  catalogo.innerHTML = "";

  itens.forEach(item => {
    catalogo.innerHTML += `
      <div class="card">
        <img src="${item.imagem}" alt="">
        <div class="card-content">
          <h3>${item.nome}</h3>
          <p><strong>Lançamento:</strong> ${item.data}</p>
          <p>${item.descricao}</p>
        </div>
      </div>
    `;
  });
}

carregarCatalogo();