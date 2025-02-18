let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nomeAmigo = input.value.trim();

    if (nomeAmigo !== '') {
        if (!amigos.includes(nomeAmigo)) {
            amigos.push(nomeAmigo);
            input.value = ''; 
            atualizarListaAmigos(); 
        } else {
            alert('Esse nome já está na lista.');
        }
    } else {
        alert('Por favor, digite um nome.');
    }
}

function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; 

    
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; 

}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Nenhum amigo para sortear.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `O amigo sorteado é: ${amigoSorteado}`;
}