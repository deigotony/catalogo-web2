async function carregarCatalogo() {
    const container = document.getElementById('catalogo');

    try {
        const response = await fetch('/itens');
        const itens = await response.json();

        if (!response.ok) {
            container.innerHTML = '<p>Erro ao carregar o catálogo.</p>';
            return;
        }

        if (itens.length === 0) {
            container.innerHTML = '<p>Nenhum item cadastrado.</p>';
            return;
        }

        container.innerHTML = itens.map(item => `
            <div class="item">
                <h3>${item.nome}</h3>
                <p>${item.descricao}</p>
                <small>Data: ${item.data}</small>
            </div>
        `).join('');

    } catch (error) {
        container.innerHTML = '<p>Erro de conexão com o servidor.</p>';
    }
}

carregarCatalogo();