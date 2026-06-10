// Variáveis de controle de estado
let totalPacotes = 0;
const LIMITE_MAXIMO = 50;

// Mapeamento dos elementos do DOM
const counterValueEl = document.getElementById('counter-value');
const statusBarEl = document.getElementById('status-bar');
const statusTextEl = document.getElementById('status-text');
const btnAdd1 = document.getElementById('btn-add-1');
const btnAdd5 = document.getElementById('btn-add-5');

/**
 * Altera a quantidade de pacotes na baia de forma segura
 * @param {number} valor - Quantidade a ser somada (1 ou 5)
 */
function alterarContador(valor) {
    // Garante que a adição do lote não vai ultrapassar o limite ergonômico de 50
    if (totalPacotes + valor <= LIMITE_MAXIMO) {
        totalPacotes += valor;
    } else {
        // Se um lote de +5 ultrapassar 50, ele adiciona apenas o restante até atingir 50
        totalPacotes = LIMITE_MAXIMO;
    }
    
    atualizarInterface();
}

/**
 * Atualiza os elementos visuais e aplica o CSS condicional
 */
function atualizarInterface() {
    // Atualiza o número na tela (Manipulação de Números e Strings)
    counterValueEl.textContent = totalPacotes.toString();

    // Verifica se atingiu a lotação máxima
    if (totalPacotes >= LIMITE_MAXIMO) {
        // Altera classes CSS condicionalmente
        statusBarEl.className = "status-esgotado";
        statusTextEl.textContent = "LOTAÇÃO ESGOTADA";
        
        // Desabilita/Trava os botões de entrada (Simula a parada da esteira)
        btnAdd1.disabled = true;
        btnAdd5.disabled = true;
    } else {
        // Mantém ou retorna ao estado disponível
        statusBarEl.className = "status-disponivel";
        statusTextEl.textContent = "BAIA DISPONÍVEL";
        
        // Habilita os botões de entrada
        btnAdd1.disabled = false;
        btnAdd5.disabled = false;
    }
}

/**
 * Reseta o contador simulando o despacho da carga para o caminhão
 */
function despacharBaia() {
    totalPacotes = 0;
    atualizarInterface();
}