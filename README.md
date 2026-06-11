# 🚜 Eco-Decisões: Agro Forte, Futuro Sustentável
> **Projeto desenvolvido para o Concurso Agrinho 2026** > *Tema: "Agro forte, futuro sustentável: equilíbrio entre produção e meio ambiente"*

---

## 🎯 Sobre o Projeto
O **Eco-Decisões** é uma plataforma web interativa e educativa concebida para demonstrar que a alta produtividade agrícola e a preservação ambiental podem caminhar lado a lado. Através de dados informativos, gráficos comparativos e um simulador em estilo de jogo de escolhas (dilemas), o utilizador assume o papel de um produtor rural e enfrenta os desafios reais do campo.

O objetivo principal é educar e conscientizar os jovens sobre a importância de práticas como o Sistema de Plantio Direto, a rotação de culturas, a gestão eficiente da água e a Integração Lavoura-Pecuária-Floresta (ILPF).

---

## 🚀 Funcionalidades Principais

1. **Painel de Informações & Curiosidades:** Uma secção rica em conteúdo teórico simplificado, apresentando factos interessantes sobre culturas fundamentais do nosso agro (Soja, Milho, Pastagem e Feijão) e os seus "superpoderes" ecológicos.
2. **Gráfico de Impacto Real (Chart.js):** Um gráfico interativo de barras que compara o modelo predatório tradicional com o modelo sustentável moderno, provando visualmente a eficácia do equilíbrio a longo prazo.
3. **Simulador Virtual (O Jogo):** Um sistema interativo onde o utilizador toma decisões estratégicas para a fazenda. Cada escolha afeta diretamente dois medidores em tempo real:
   * 🚜 **Produtividade do Agro** (Indicador Económico)
   * 🌱 **Preservação Ambiental** (Indicador Ecológico)
   * *O desafio é terminar o ciclo mantendo ambos os indicadores equilibrados acima de 50%.*

---

## 💻 Tecnologias Utilizadas
O projeto foi construído utilizando o ecossistema base do desenvolvimento web front-end, sem a necessidade de instalar frameworks pesados, garantindo que o site seja leve e acessível:

* **HTML5:** Estruturação semântica de todo o conteúdo da página.
* **CSS3:** Design moderno, responsivo (adaptável a computadores e telemóveis) e paleta de cores focada no tema (tons terrosos e verdes).
* **JavaScript (Vanilla):** Lógica do simulador, manipulação dinâmica dos medidores de status e controlo dos dilemas.
* **Chart.js:** Biblioteca externa integrada via CDN para a renderização do gráfico estatístico.

---

## 📁 Estrutura do Arquivo
Para facilitar o desenvolvimento e a partilha, todo o projeto foi condensado num **único ficheiro integrado**:
* `site_agrinho_sem_imagens.html` (Contém todo o HTML, CSS e JavaScript estruturados).

---

## 🔧 Como Executar o Projeto

Não é necessário instalar nenhum programa ou configurar servidores. Basta seguir os passos:

1. Descarrega ou copia o código do ficheiro `.html` fornecido.
2. Guarda o ficheiro no teu computador com o nome `index.html` (ou qualquer outro nome com a extensão `.html`).
3. Dá dois cliques em cima do ficheiro guardado.
4. O projeto abrirá imediatamente no teu navegador de internet (Google Chrome, Microsoft Edge, Mozilla Firefox ou Safari).

---

## 🧠 Lógica do Jogo (Como funciona por trás do código)
A mecânica do simulador foi programada utilizando estruturas de dados em JavaScript (Arrays e Objetos). Cada decisão envia valores positivos ou negativos para as variáveis de pontuação:

```javascript
// Exemplo de estrutura de um dilema no código
{
    texto: "Surgiu uma lagarta na plantação. O que fazer?",
    opA: "Aplicar inseticida químico forte...",
    opB: "Utilizar defensivos biológicos...",
    efA: { p: 20, a: -25 }, // Opção A: Sobe produção, destrói ambiente
    efB: { p: 10, a: 15 }   // Opção B: Equilíbrio sustentável
}
