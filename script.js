let saldo = 500;
let total = 0;

// FUNÇÃO PARA ADICIONAR NOVO GASTO
function adicionarGasto() {
    // PEGAR OS VALORES DOS CAMPOS
    let descricaoInput = document.getElementById("descricao");
    let valorInput = document.getElementById("valor");

    let descricao = descricaoInput.value.trim();
    let valor = Number(valorInput.value);

    // VALIDAÇÃO DOS CAMPOS
    if (descricao === "" || valor <= 0 || isNaN(valor)) {
        alert("Preencha uma descrição válida e um valor maior que zero!");
        return;
    }

    // ATUALIZA OS VALORES NO CÓDIGO
    total += valor;
    saldo -= valor;

    // CRIA O ELEMENTO DO GASTO COM O BOTÃO DE REMOVER
    let divGasto = document.createElement("div");
    divGasto.classList.add("gasto");

    divGasto.innerHTML = `
        <span class="descricao-gasto">${descricao}</span>
        <div class="acoes-gasto">
            <span class="valor-gasto">R$ ${valor.toFixed(2)}</span>
            <button class="btn-remover" title="Excluir gasto" onclick="removerGasto(this, ${valor})">🗑️</button>
        </div>
    `;

    // ADICIONA O GASTO NA LISTA
    document.getElementById("listaGastos").appendChild(divGasto);

    // ATUALIZA TELA
    atualizarTela();

    // LIMPA OS CAMPOS
    descricaoInput.value = "";
    valorInput.value = "";
    descricaoInput.focus();
}

// FUNÇÃO PARA REMOVER UM GASTO
function removerGasto(botao, valor) {
    // Devolve o valor ao saldo e reduz o total
    total -= valor;
    saldo += valor;

    // Remove a linha HTML do gasto
    let itemGasto = botao.closest(".gasto");
    itemGasto.remove();

    // Atualiza a tela com novos valores
    atualizarTela();
}

// FUNÇÃO DE ATUALIZAÇÃO DA INTERFACE
function atualizarTela() {
    document.getElementById("total").textContent = "R$ " + total.toFixed(2);
    document.getElementById("saldo").textContent = "R$ " + saldo.toFixed(2);

    // Destaca em vermelho se o saldo ficar menor que zero
    let elementoSaldo = document.getElementById("saldo");
    if (saldo < 0) {
        elementoSaldo.style.color = "#ff8a8a";
    } else {
        elementoSaldo.style.color = "#ffffff";
    }
}