const catalogo = [
  {
    id: 1,
    titulo: "Interestelar",
    tipo: "filme",
    ano: 2014,
    generos: ["ficção científica", "drama", "aventura"],
    nota: 9.5,
    assistido: true,
  },
  {
    id: 2,
    titulo: "Breaking Bad",
    tipo: "serie",
    ano: 2008,
    generos: ["drama", "crime", "thriller"],
    nota: 9.8,
    assistido: true,
  },
  {
    id: 3,
    titulo: "Parasita",
    tipo: "filme",
    ano: 2019,
    generos: ["thriller", "drama"],
    nota: 8.6,
    assistido: false,
  },
  {
    id: 4,
    titulo: "Dark",
    tipo: "serie",
    ano: 2017,
    generos: ["ficção científica", "mistério", "thriller"],
    nota: 9.1,
    assistido: true,
  },
  {
    id: 5,
    titulo: "O Poderoso Chefão",
    tipo: "filme",
    ano: 1972,
    generos: ["crime", "drama"],
    nota: 9.2,
    assistido: false,
  },
  {
    id: 6,
    titulo: "Severance",
    tipo: "serie",
    ano: 2022,
    generos: ["ficção científica", "drama", "mistério"],
    nota: 8.7,
    assistido: false,
  },
  {
    id: 7,
    titulo: "Clube da Luta",
    tipo: "filme",
    ano: 1999,
    generos: ["drama", "thriller"],
    nota: 8.8,
    assistido: true,
  },
  {
    id: 8,
    titulo: "Arcane",
    tipo: "serie",
    ano: 2021,
    generos: ["animação", "ação", "aventura"],
    nota: 9.0,
    assistido: false,
  },
];


// ============================================================
// B.2. ACESSO E LEITURA DOS DADOS
// ============================================================

console.log("════════════════════════════════════════");
console.log("📦 CATÁLOGO COMPLETO");
console.log("════════════════════════════════════════");
console.log(catalogo);

// Título do primeiro item
console.log("\n🎬 Título do 1º item:", catalogo[0].titulo);

// Ano do último item
console.log("📅 Ano do último item:", catalogo[catalogo.length - 1].ano);

// Segundo gênero do terceiro item (índice 2)
const terceiroItem = catalogo[2];
if (terceiroItem.generos.length >= 2) {
  console.log(
    `🏷️  2º gênero do 3º item ("${terceiroItem.titulo}"):`,
    terceiroItem.generos[1]
  );
} else {
  console.log(
    `ℹ️  O 3º item ("${terceiroItem.titulo}") possui apenas 1 gênero:`,
    terceiroItem.generos[0]
  );
}


// ============================================================
// B.3. ITERAÇÕES COM ITERATORS
// ============================================================

// ── A) forEach: listagem de todos os títulos ──────────────────
console.log("\n════════════════════════════════════════");
console.log("📋 A) LISTAGEM COMPLETA (forEach)");
console.log("════════════════════════════════════════");

catalogo.forEach((item) => {
  console.log(`- [${item.tipo}] ${item.titulo} (${item.ano})`);
});


// ── B) map: títulos em caixa alta ────────────────────────────
console.log("\n════════════════════════════════════════");
console.log("🔠 B) TÍTULOS EM CAIXA ALTA (map)");
console.log("════════════════════════════════════════");

const titulosEmCaixaAlta = catalogo.map((item) => item.titulo.toUpperCase());
console.log(titulosEmCaixaAlta);


// ── C) filter: itens não assistidos ──────────────────────────
console.log("\n════════════════════════════════════════");
console.log("👁️  C) NÃO ASSISTIDOS (filter)");
console.log("════════════════════════════════════════");

const naoAssistidos = catalogo.filter((item) => item.assistido === false);
console.log(`Total de itens não assistidos: ${naoAssistidos.length}`);
naoAssistidos.forEach((item) =>
  console.log(`  · ${item.titulo} (${item.tipo}, ${item.ano})`)
);


// ── D) find: primeiro item com nota >= 9 ─────────────────────
console.log("\n════════════════════════════════════════");
console.log("⭐ D) PRIMEIRO ITEM COM NOTA ≥ 9 (find)");
console.log("════════════════════════════════════════");

const destaqueNota = catalogo.find((item) => item.nota >= 9);
if (destaqueNota) {
  console.log(`Título: ${destaqueNota.titulo} | Nota: ${destaqueNota.nota}`);
} else {
  console.log("Nenhum item encontrado com nota maior ou igual a 9.");
}


// ── E) reduce: médias de notas ───────────────────────────────
console.log("\n════════════════════════════════════════");
console.log("📊 E) MÉDIAS DE NOTAS (reduce)");
console.log("════════════════════════════════════════");

const somaGeral = catalogo.reduce((acc, item) => acc + item.nota, 0);
const mediaGeral = somaGeral / catalogo.length;
console.log(`Média geral de notas: ${mediaGeral.toFixed(2)}`);

const assistidos = catalogo.filter((item) => item.assistido === true);
if (assistidos.length > 0) {
  const somaAssistidos = assistidos.reduce((acc, item) => acc + item.nota, 0);
  const mediaAssistidos = somaAssistidos / assistidos.length;
  console.log(`Média das notas dos assistidos: ${mediaAssistidos.toFixed(2)}`);
} else {
  console.log("Nenhum item assistido encontrado para calcular a média.");
}


// ── F) some e every: checagens booleanas ────────────────────
console.log("\n════════════════════════════════════════");
console.log("✅ F) CHECAGENS BOOLEANAS (some / every)");
console.log("════════════════════════════════════════");

const temAntigoAntes2000 = catalogo.some((item) => item.ano < 2000);
console.log(
  `Existe algum item com ano anterior a 2000? ${temAntigoAntes2000 ? "Sim ✔️" : "Não ✖️"
  }`
);

const todosTemGenero = catalogo.every((item) => item.generos.length >= 1);
console.log(
  `Todos os itens possuem ao menos 1 gênero? ${todosTemGenero ? "Sim ✔️" : "Não ✖️"
  }`
);


// ============================================================
// B.4. SAÍDA NA TELA (DOM)
// ============================================================

// ── Cálculos para o resumo ───────────────────────────────────
const totalItens = catalogo.length;

const qtdFilmes = catalogo.filter((item) => item.tipo === "filme").length;
const qtdSeries = catalogo.filter((item) => item.tipo === "serie").length;
const qtdNaoAssistidos = naoAssistidos.length;

const somaNotas = catalogo.reduce((acc, item) => acc + item.nota, 0);
const mediaNotas = (somaNotas / catalogo.length).toFixed(2);

// Top 3 por nota (desc)
const top3 = [...catalogo]
  .sort((a, b) => b.nota - a.nota)
  .slice(0, 3);

// ── Montar HTML ──────────────────────────────────────────────
const rankingHTML = top3
  .map(
    (item, i) => `
    <div class="rank-item">
      <div class="rank-num">${i + 1}</div>
      <div class="rank-info">
        <div class="rank-titulo">${item.titulo}</div>
        <div style="font-size:0.75rem;color:var(--muted);margin-top:2px">${item.tipo} · ${item.ano}</div>
      </div>
      <div class="rank-nota">${item.nota}</div>
    </div>`
  )
  .join("");

const pendentesHTML = naoAssistidos
  .map(
    (item) => `
    <div class="pendente-item">
      <span>${item.titulo} <span style="color:var(--muted);font-size:0.78rem">(${item.ano})</span></span>
      <span class="tipo-badge badge-${item.tipo}">${item.tipo}</span>
    </div>`
  )
  .join("");

const outputEl = document.getElementById("output");

outputEl.innerHTML = `
  <!-- STATS -->
  <div class="stats-grid">
    <div class="stat-card">
      <div class="stat-label">Total no catálogo</div>
      <div class="stat-value">${totalItens}</div>
      <div class="stat-sub">itens</div>
    </div>
    <div class="stat-card">
      <div class="stat-label">Filmes</div>
      <div class="stat-value">${qtdFilmes}</div>
      <div class="stat-sub">longas-metragens</div>
    </div>
    <div class="stat-card">
      <div class="stat-label">Séries</div>
      <div class="stat-value">${qtdSeries}</div>
      <div class="stat-sub">produções</div>
    </div>
    <div class="stat-card">
      <div class="stat-label">Não assistidos</div>
      <div class="stat-value" style="color:var(--accent2)">${qtdNaoAssistidos}</div>
      <div class="stat-sub">na lista de pendentes</div>
    </div>
    <div class="stat-card">
      <div class="stat-label">Média geral</div>
      <div class="stat-value">${mediaNotas}</div>
      <div class="stat-sub">de 0 a 10</div>
    </div>
  </div>
 
  <!-- RANKING -->
  <div class="ranking-block">
    <div class="section-title">🏆 Mini Ranking — Top 3</div>
    ${rankingHTML}
  </div>
 
  <!-- PENDENTES -->
  <div class="pendentes-block">
    <div class="section-title">🕐 Não Assistidos (${qtdNaoAssistidos})</div>
    ${pendentesHTML}
  </div>
`;

console.log("\n════════════════════════════════════════");
console.log("✅ DOM atualizado com sucesso!");
console.log("════════════════════════════════════════");
