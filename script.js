let total = 0;
let lista = [];

const adicionar = (nome, valor) => {
    total += parseFloat(valor);
    lista.push(nome);

    document.getElementById("total").innerText = total.toFixed(2);

    atualizarLista();
};

const atualizarLista = () => {
    const ul = document.getElementById("lista");
    ul.innerHTML = "";

    lista.forEach(item => {
        const li = document.createElement("li");
        li.innerText = item;
        ul.appendChild(li);
    });
};

const limpar = () => {
    total = 0;
    lista = [];
    document.getElementById("total").innerText = "0";
    document.getElementById("lista").innerHTML = "";
};