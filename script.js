// ==================== LÓGICA (JAVASCRIPT) ====================

// --- CONFIGURAÇÃO DO GRÁFICO (Chart.js) ---
const ctx = document.getElementById('meuGrafico').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Modelo Predatório Tradicional', 'Modelo Sustentável (Equilibrado)'],
        datasets: [{
            label: 'Eficiência de Produção (%)',
            data: [80, 95],
            backgroundColor: '#ff9800',
            borderWidth: 1
        }, {
            label: 'Preservação de Recursos Naturais (%)',
            data: [25, 90],
            backgroundColor: '#4caf50',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: { beginAtZero: true, max: 100 }
        }
    }
});

// --- CONFIGURAÇÃO DO JOGO ---
let prod = 50;
let amb = 50;
let indice = 0;

const dilemas = [
    {
        texto: "Surgiu uma lagarta na plantação de Soja e Feijão. O que fazer?",
        opA: "Aplicar inseticida químico forte (Rápido, mas elimina polinizadores importantes).",
        opB: "Utilizar defensivos biológicos (Focado na praga, protegendo as abelhas locais).",
        efA: { p: 20, a: -25 }, efB: { p: 10, a: 15 }
    },
    {
        texto: "Como você vai planejar a próxima colheita de Milho?",
        opA: "Plantar milho seguidamente na mesma área (Esgota os nutrientes da terra rapidamente).",
        opB: "Fazer rotação de culturas revezando com o feijão (Nutre o solo de forma orgânica).",
        efA: { p: 15, a: -30 }, efB: { p: 15, a: 20 }
    },
    {
        texto: "O setor de Pastagem está sofrendo com a falta de água na seca. Qual caminho seguir?",
        opA: "Bombear água em excesso do rio da região (Gasta muita energia e prejudica a fauna hídrica).",
        opB: "Utilizar cisternas de água da chuva coletada e aplicar irrigação por gotejamento.",
        efA: { p: 10, a: -25 }, efB: { p: 15, a: 25 }
    }
];

const txtCard = document.getElementById("card-texto");
const btnA = document.getElementById("btn-opcao-a");
const btnB = document.getElementById("btn-opcao-b");
const bProd = document.getElementById("bar-producao");
const bAmb = document.getElementById("bar-ambiente");

function redesenharMedidores() {
    bProd.style.width = prod + "%";
    bAmb.style.width = amb + "%";
}

function carregarFase() {
    redesenharMedidores();
    if (indice < dilemas.length) {
        let d = dilemas[indice];
        txtCard.innerText = d.texto;
        btnA.innerText = "Opção A: " + d.opA;
        btnB.innerText = "Opção B: " + d.opB;
    } else {
        btnA.style.display = "none";
        btnB.style.display = "none";
        
        if (prod >= 50 && amb >= 50) {
            txtCard.innerHTML = "🏆 <strong>Vitória Sustentável!</strong><br><br>Excelente! Você equilibrou perfeitamente as forças. Mostrou que o agro pode produzir muito e proteger o amanhã!";
        } else if (prod < 50) {
            txtCard.innerHTML = "📉 <strong>Prejuízo Econômico!</strong><br><br>A intenção ambiental foi ótima, mas a fazenda não produziu comida o suficiente e faliu financeiramente.";
        } else {
            txtCard.innerHTML = "⚠️ <strong>Colapso Ambiental!</strong><br><br>Sua fazenda gerou lucro imediato, mas destruiu as fontes de água e desgastou a terra. Sem natureza, não haverá próxima safra.";
        }
    }
}

function jogar(escolha) {
    let efeito = dilemas[indice][escolha];
    prod = Math.max(0, Math.min(100, prod + efeito.p));
    amb = Math.max(0, Math.min(100, amb + efeito.a));
    indice++;
    setTimeout(carregarFase, 300);
}

btnA.addEventListener("click", () => jogar("efA"));
btnB.addEventListener("click", () => jogar("efB"));

// Inicializa o jogo ao abrir a página
carregarFase();
