async function cadastrarItem(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const data = document.getElementById('data').value;
    const descricao = document.getElementById('descricao').value;
    const categoriaId = document.getElementById('categoriaId').value;
    const imageInput = document.getElementById('imageUpload');

    const formData = new FormData();
    formData.append('nome', nome);
    formData.append('data', document.getElementById('data').value);
    formData.append('descricao', descricao);
    formData.append('categoriaId', categoriaId);

    if (imageInput.files[0]) {
        formData.append('imagem', imageInput.files[0]);
    }

    try {
        const response = await fetch('/itens', {
            method: 'POST',
            body: formData
        });

        const result = await response.json();

        if (response.ok) {
            alert('item cadastrado com sucesso');
            window.location.href = './catalogo.html';
        } else if (response.status === 401) {
            alert('sessão expirada ou não autorizada');
            window.location.href = './login.html';
        } else {
            alert(result.erro || 'erro ao cadastrar item');
        }
    } catch (error) {console.error('Erro:', error);}
}