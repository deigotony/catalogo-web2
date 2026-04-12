function login(event) {
	event.preventDefault();
	const usuario = document.getElementById("usuario").value;
	const senha = document.getElementById("senha").value;
	if (usuario === "" || senha === "") {
		alert("Preencha todos os campos!");
		return;
	}
	const usuarioSalvo = localStorage.getItem("usuarioSalvo");
	const senhaSalva = localStorage.getItem("senhaSalva");
	if (usuario === usuarioSalvo || senha === senhaSalva) {
		alert("Login realizado com sucesso!");
		localStorage.setItem("usuario", usuario);
		window.location.href = "catalogo.html"
	} else {
		alert("Usuário ou senha incorretos!")
	}
}
function salvarItem(event) {
	event.preventDefault();
	const nome = document.getElementById("nome").value;
	const data =  document.getElementById("data").value;
	const imagem = document.getElementById("imagem").value;
	const descricao = document.getElementById("descricao").value;
	if (!nome || !data || !imagem || !descricao) {
		alert("Preencha todos os campos!");
		return;
	}
	const item = { nome, data, imagem, descricao };
	let itens = JSON.parse(localStorage.getItem("itens")) || [];
	itens.push(item);
	localStorage.setItem("itens", JSON.stringify(itens));
	alert("Item cadastrado!");
	document.querySelector("form").reset();
}
function carregarCatalogo() {
	const catalogo = document.getElementById("catalogo");
	if (!catalogo) return;
	const itens = JSON.parse(localStorage.getItem("itens")) || [];
	catalogo.innerHTML = "";
	itens.forEach(item => {
		const card = document.createElement("div");
		card.classList.add("card");

		card.innerHTML += `
        	<img src="${item.imagem}" alt="">
        	<div class="card-content">
          		<h3>${item.nome}</h3>
          		<p><strong>Lançamento:</strong> ${item.data}</p>
          		<p>${item.descricao}</p>
        	</div>
    	`;

		catalogo.appendChild(card);
		function verificarLogin() {
			const usuario = localStorage.getItem("usuario");

			if (!usuario) {
				alert("Você precisa estar logado!");
				window.location.href = "login.html";
		}
}

verificarLogin();
	});
}


carregarCatalogo();