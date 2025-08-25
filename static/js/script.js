/*
  Arquivo: script.js
  Descrição: Controla a lógica principal do site EcoHistory, incluindo renderização de eventos, navegação, detalhes e quizzes.
*/

// --- Dados dos acontecimentos históricos ---
const DATA = [
  {
    // Evento: Queda do Império Romano do Ocidente
    id: "queda-imperio-romano",
    titulo: "Queda do Império Romano do Ocidente",
    ano: "476",
    periodo: "Antiguidade",
    imagem: "static/img/quedadoimpérioromanodoocidente.webp",
    resumo: "Fim do Império Romano do Ocidente, marcado por disputas internas, invasões bárbaras e crises econômicas.",
    texto: "Oficialmente concluída em 476 d.C., com a abdicação de Rômulo Augusto em favor do chefe militar Odoacro, esse evento marcou o fim do Império Romano do Ocidente. Entre seus principais fatores estão disputas internas, invasões de povos 'bárbaros', divisão entre as partes Ocidental e Oriental, crises econômicas e a crescente influência do cristianismo. Roma foi saqueada por Alarico em 410 e posteriormente invadida por vândalos (455) e ostrogodos (546). Fonte: Toda Matéria."
  },
  {
    // Evento: Surgimento das Universidades
    id: "idades-medias",
    titulo: "Surgimento das Universidades",
    ano: "séculos XII–XIII",
    periodo: "Idade Média",
    imagem: "static/img/surgimentodasuniversidades.jpg",
    resumo: "Primeiras universidades medievais surgem como corporações de professores e alunos, além do domínio clerical.",
    texto: "A partir do século XII, impulsionado pelo renascimento urbano e comercial, surgiram as primeiras universidades medievais em cidades como Bolonha, Paris e Oxford. Diferentemente dos mosteiros, essas instituições eram corporações de professores e alunos (universitas), financiadas muitas vezes por burgueses. O currículo incluía o trivium (gramática, retórica e lógica) e o quadrivium (aritmética, geometria, astronomia e música). Esse movimento representou um avanço intelectual além do domínio clerical. Fonte: Brasil Escola."
  },
  {
    id: "revolucao-francesa",
    titulo: "Revolução Francesa",
    ano: "1789",
    periodo: "Era Moderna",
    imagem: "static/img/revoluçãofrancesa.jfif",
    resumo: "Revolução que marcou o fim do Antigo Regime e do absolutismo na França.",
    texto: "Ocorreu entre 1789 e 1799, marcando o fim do Antigo Regime e do absolutismo na França. O processo envolveu a burguesia e a população, resultando na Declaração dos Direitos do Homem e do Cidadão, no estabelecimento da república e na instauração do calendário revolucionário que aboliu referências religiosas. A revolução atravessou três fases: Assembleia Constituinte, Convenção (com o período do Terror) e Diretório, seguindo até a ascensão de Napoleão Bonaparte. A Batalha de Valmy (20 de setembro de 1792) simbolizou o fim da monarquia absolutista e o início da república. Fonte: Brasil Escola."
  },
  {
    id: "revolucao-industrial",
    titulo: "Revolução Industrial",
    ano: "séculos XVIII–XIX",
    periodo: "Era Moderna",
    imagem: "static/img/revolucaoindustrial.webp",
    resumo: "Transição da manufatura para a maquinofatura, surgimento do modelo fabril e capitalismo financeiro.",
    texto: "Esse processo marcou a transição da manufatura para a maquinofatura, com trabalhadores substituídos por máquinas. Surgiu o modelo fabril que alienava o trabalhador, que passou a ter funções repetitivas e pouco senso do valor do trabalho produzido. Nasce o capitalismo financeiro, a produção em massa, a urbanização e o imperialismo como forças motrizes, levando ao excedente produtivo e à necessidade de novos mercados. No Brasil, as condições trabalhistas no início da revolução eram precárias: jornadas de até 15 horas, sem descanso nem direitos garantidos, o que impulsionou o surgimento de movimentos operários e sindicatos. Fonte: Monografias Brasil Escola."
  },
  {
    id: "primeira-guerra",
    titulo: "Primeira Guerra Mundial",
    ano: "1914–1918",
    periodo: "Século XX",
    imagem: "static/img/primeiraguerramundial.jpg",
    resumo: "Conflito entre 1914–1918, marcado por nacionalismo, alianças e guerra de trincheiras.",
    texto: "Travada entre 1914–1918, teve causas como nacionalismo, rivalidades imperialistas e sistema de alianças. O estopim foi o assassinato do arquiduque Francisco Ferdinando, em Sarajevo, em 28 de junho de 1914. A guerra foi caracterizada principalmente pela guerra de trincheiras e o uso de armas modernas como aviões, tanques e gases tóxicos. As baixas foram imensas; só os militares contabilizaram milhões de mortos, feridos e incapacitados. O conflito levou ao colapso de impérios e à assinatura do Tratado de Versalhes, cujas cláusulas severas contribuíram para o surgimento do nazismo e da Segunda Guerra Mundial. Fonte: Brasil Escola."
  },
  {
    id: "segunda-guerra",
    titulo: "Segunda Guerra Mundial",
    ano: "1939–1945",
    periodo: "Século XX",
    imagem: "static/img/segundaguerramundial.webp",
    resumo: "Conflito de escala sem precedentes que envolveu a maioria das nações.",
    texto: "Da Blitzkrieg ao Dia D, a guerra incluiu o Holocausto e o uso de armas nucleares. O pós-guerra viu a criação da ONU, a Guerra Fria e a reconstrução econômica com o Plano Marshall."
  },
  {
    id: "muro-de-berlim",
    titulo: "Queda do Muro de Berlim",
    ano: "1989",
    periodo: "Século XX",
    imagem: "static/img/muroberlim.jpg",
    resumo: "Símbolo da reunificação alemã e do fim da Guerra Fria.",
    texto: "Em 9 de novembro de 1989, após protestos e mudanças políticas no Leste Europeu, o muro foi aberto. O evento acelerou a reunificação da Alemanha e reconfigurou a ordem europeia."
  },
  {
    id: "internet-popularizacao",
    titulo: "Popularização da Internet",
    ano: "década de 1990",
    periodo: "Atualidade",
    imagem: "static/img/internet.webp",
    resumo: "Internet se torna principal meio de comunicação global, com bilhões de usuários.",
    texto: "A internet teve origem na Arpanet, criada na década de 1960 para fins militares e de pesquisa nos EUA. No Brasil, a rede chegou em 1988 via conexão entre a UFRJ e a Universidade de Maryland. A partir de 1994, com acesso comercial aberto, a internet se tornou o principal meio de comunicação global, com bilhões de usuários. Fonte: Brasil Escola."
  },
  {
    id: "primavera-arabe",
    titulo: "Primavera Árabe",
    ano: "2010–2012",
    periodo: "Atualidade",
    imagem: "static/img/primaveraarabe.avif",
    resumo: "Movimentos de protesto iniciados em 2010, com graves consequências e milhares de vítimas.",
    texto: "Movimentos de protesto iniciados em 2010 em vários países árabes, resultando em graves consequências como repressão violenta, milhares de mortos e refugiados. No Egito, houve centenas de vítimas; na Líbia, mais de 5 mil; e na Síria, a guerra civil deixou centenas de milhares de vítimas entre 2011 e 2021. Fonte: Brasil Escola."
  }
];

// --- Utilitários para seleção de elementos ---
function qs(sel, el=document){ return el.querySelector(sel); }
function qsa(sel, el=document){ return [...el.querySelectorAll(sel)]; }

// --- Função para alternar menu responsivo ---
function toggleMenu(){
  const m = qs('#menu');
  if(getComputedStyle(m).display === 'none'){
    m.style.display = 'flex';
  }else{
    m.style.display = 'none';
  }
}

// --- Destacar navegação ativa e atualizar ano no rodapé ---
function setActiveNav(){
  const path = location.pathname.split('/').pop();
  qsa('.menu a').forEach(a=>{
    const file = a.getAttribute('href');
    if(file === path || (path==='' && file==='index.html')){
      a.classList.add('active');
    }
  });
  const year = new Date().getFullYear();
  const yearEl = qs('#year'); if(yearEl) yearEl.textContent = year;
}

// --- Página: Acontecimentos ---
function initAcontecimentos(){
  const timeline = qs('#timeline');
  const list = qs('#list');
  const periodo = qs('#periodo');
  const search = qs('#search');

  if(!timeline || !list) return;

  // Lista de períodos históricos
  const periodos = ["Antiguidade","Idade Média","Era Moderna","Século XX","Atualidade"];
  periodos.forEach((p,i)=>{
    const b = document.createElement('button');
    b.textContent = p; b.dataset.periodo = p;
    if(i===0) b.classList.add('active');
    b.addEventListener('click',()=>{
      qsa('button', timeline).forEach(x=>x.classList.remove('active'));
      b.classList.add('active');
      periodo.value = p;
      render();
    });
    timeline.appendChild(b);
  });

  // Cria card de evento
  function card(ev){
    const el = document.createElement('article');
    el.className = 'card';
    el.innerHTML = `
      <img src="${ev.imagem}" alt="${ev.titulo}">
      <div class="content">
        <span class="badge">${ev.periodo} • ${ev.ano}</span>
        <h3>${ev.titulo}</h3>
        <p>${ev.resumo}</p>
        <div class="actions">
          <a class="btn" href="detalhe.html?id=${ev.id}">Ver detalhes</a>
        </div>
      </div>
    `;
    return el;
  }

  // Renderiza lista de cards filtrados
  function render(){
    const q = (search?.value || '').toLowerCase().trim();
    const per = periodo?.value || 'todos';
    const filtered = DATA.filter(ev => 
      (per==='todos' || ev.periodo===per) &&
      (q==='' || ev.titulo.toLowerCase().includes(q))
    );
    list.innerHTML = '';
    filtered.forEach(ev => list.appendChild(card(ev)));
  }

  periodo?.addEventListener('change', render);
  search?.addEventListener('input', render);
  render();
}

// --- Página: Detalhe ---
function initDetalhe(){
  const params = new URLSearchParams(location.search);
  const id = params.get('id');
  const evento = DATA.find(e => e.id === id) || DATA[0];
  if(!evento) return;
  const t = qs('#detalhe-titulo');
  const s = qs('#detalhe-sub');
  const img = qs('#detalhe-imagem');
  const txt = qs('#detalhe-texto');
  if(t) t.textContent = evento.titulo;
  if(s) s.textContent = `${evento.periodo} • ${evento.ano}`;
  if(img) img.src = evento.imagem;
  if(txt) txt.textContent = evento.texto;
}

// --- Página: Contato ---
function enviarContato(e){
  e.preventDefault();
  const form = e.target;
  const data = Object.fromEntries(new FormData(form).entries());
  // Validação simples dos campos do formulário
  if(!data.nome || !data.email || !data.assunto || !data.mensagem){
    alert('Preencha todos os campos.');
    return false;
  }
  // Exibe imagem de sucesso
  const sucessoImg = document.getElementById('sucesso-img');
  if(sucessoImg) {
    sucessoImg.style.display = 'block';
    setTimeout(()=>{
      sucessoImg.style.display = 'none';
    }, 2200);
  }
  form.reset();
  return false;
}

// --- Inicialização global ---
document.addEventListener('DOMContentLoaded', () => {
  setActiveNav(); // Destaca navegação e atualiza ano
  initAcontecimentos(); // Renderiza cards de acontecimentos
  initDetalhe(); // Preenche detalhes do evento

  // --- Quiz Dinâmico por Acontecimento ---
  // quizzes agora vêm de quizData.js

  // Função para abrir o modal do quiz
  function abrirQuizModal(acontecimentoId) {
    const quizModal = document.getElementById('quizModal');
    const quizConteudo = document.getElementById('quizConteudo');
    quizModal.style.display = 'flex';
    // Normalizar id para garantir mapeamento correto
    const id = (acontecimentoId || '').toLowerCase();
    let perguntas = quizzes[id];
    if (!perguntas) {
      quizConteudo.innerHTML = '<div style="text-align:center; padding:2rem 0; color:#7a859c"><h2>Quiz indisponível</h2><p>Este acontecimento ainda não possui quiz, em breve estará disponível.</p></div>';
      return;
    }
    let indice = 0;
    let acertos = 0;
    let selecionada = null;
    renderPergunta();

    // Renderiza pergunta atual do quiz
    function renderPergunta() {
      const p = perguntas[indice];
      quizConteudo.innerHTML = `
        <h2>Quiz: ${document.getElementById('detalhe-titulo').textContent}</h2>
        <div class="quiz-question">${p.pergunta}</div>
        <div class="quiz-options">
          ${p.opcoes.map((op, i) => `<button class="quiz-option" id="op${i}">${op}</button>`).join('')}
        </div>
        <button class="quiz-btn" id="btnResponder" disabled>Responder</button>
      `;
      selecionada = null;
      p.opcoes.forEach((_, i) => {
        document.getElementById('op'+i).onclick = () => selecionarOpcao(i);
      });
      document.getElementById('btnResponder').onclick = responderPergunta;
    }
    // Seleciona opção do quiz
    function selecionarOpcao(i) {
      selecionada = i;
      perguntas[indice].opcoes.forEach((_, idx) => {
        document.getElementById('op'+idx).classList.toggle('selected', idx === i);
      });
      document.getElementById('btnResponder').disabled = false;
    }
    // Responde pergunta e mostra feedback visual
    function responderPergunta() {
      const correta = perguntas[indice].resposta;
      const botoes = perguntas[indice].opcoes.map((_, idx) => document.getElementById('op'+idx));
      if(selecionada === correta) {
        acertos++;
        botoes[selecionada].classList.add('correct');
      } else {
        botoes[selecionada].classList.add('wrong');
        botoes[correta].classList.add('correct');
      }
      botoes.forEach(btn => btn.disabled = true);
      setTimeout(() => {
        indice++;
        if(indice < perguntas.length) {
          renderPergunta();
        } else {
          mostrarResultado();
        }
      }, 900);
    }
    // Mostra resultado final do quiz
    function mostrarResultado() {
      let feedback = '';
      if(acertos === perguntas.length) feedback = 'Você dominou este tema! Parabéns!';
      else if(acertos >= perguntas.length*0.7) feedback = 'Ótimo resultado! Você conhece bem o assunto.';
      else if(acertos >= perguntas.length*0.4) feedback = 'Bom, mas pode estudar mais! Continue praticando.';
      else feedback = 'Continue tentando! A história é cheia de descobertas.';
      quizConteudo.innerHTML = `
        <h2>Resultado do Quiz</h2>
        <div class="quiz-score">Você acertou <b>${acertos}</b> de <b>${perguntas.length}</b> questões.</div>
        <div class="quiz-feedback">${feedback}</div>
        <button class="quiz-btn" id="btnRefazer">Refazer Quiz</button>
      `;
      document.getElementById('btnRefazer').onclick = () => {
        indice = 0; acertos = 0; selecionada = null; renderPergunta();
      };
    }
  }

  // Detectar acontecimento atual pelo parâmetro da URL
  const params = new URLSearchParams(window.location.search);
  let acontecimentoId = params.get('id');
  const btnQuiz = document.getElementById('btnQuiz');
  // Dados dos acontecimentos para página de detalhes
  const detalhes = {
    "queda-imperio-romano": {
      titulo: "Queda do Império Romano do Ocidente",
      sub: "Antiguidade • 476 d.C.",
      imagem: "static/img/quedadoimpérioromanodoocidente.webp",
      texto: "O fim do Império Romano do Ocidente em 476 d.C. marcou o início da Idade Média."
    },
    "revolucao-francesa": {
      titulo: "Revolução Francesa",
      sub: "Era Moderna • 1789",
      imagem: "static/img/revoluçãofrancesa.jfif",
      texto: "Movimento social e político que transformou a França e influenciou o mundo no final do século XVIII."
    },
    "primeira-guerra": {
      titulo: "Primeira Guerra Mundial",
      sub: "Século XX • 1914–1918",
      imagem: "static/img/primeiraguerramundial.jpg",
      texto: "Conflito global ocorrido entre 1914 e 1918, envolvendo as principais potências mundiais."
    },
    "segunda-guerra": {
      titulo: "Segunda Guerra Mundial",
      sub: "Século XX • 1939–1945",
      imagem: "static/img/segundaguerramundial.webp",
      texto: "Maior conflito armado da história, ocorrido entre 1939 e 1945."
    },
    "revolucao-industrial": {
      titulo: "Revolução Industrial",
      sub: "Era Moderna • Século XVIII",
      imagem: "static/img/revolucaoindustrial.webp",
      texto: "Período de grandes transformações tecnológicas, econômicas e sociais iniciado no século XVIII."
    },
    "muro-de-berlim": {
      titulo: "Queda do Muro de Berlim",
      sub: "Contemporânea • 1989",
      imagem: "static/img/muroberlim.jpg",
      texto: "O símbolo do fim da Guerra Fria, reaproximando o Oriente e o Ocidente na Europa."
    },
    "primavera-arabe": {
      titulo: "Primavera Árabe",
      sub: "Atualidade • 2010",
      imagem: "static/img/primaveraarabe.avif",
      texto: "Movimento de protestos e revoltas que ocorreram no mundo árabe a partir de 2010."
    },
    "surgimento-universidades": {
      titulo: "Surgimento das Universidades",
      sub: "Idade Média • Século XII",
      imagem: "static/img/surgimentodasuniversidades.jpg",
      texto: "As primeiras universidades surgiram na Europa durante a Idade Média, promovendo o conhecimento."
    },
    "dexter": {
      titulo: "O Impacto Cultural do Seriado Dexter",
      sub: "Televisão • Século XXI",
      imagem: "static/img/dexter-michael.png",
      texto: "O seriado <strong>Dexter</strong> marcou a televisão mundial ao apresentar um protagonista complexo, que atua como analista forense e serial killer. A série explora temas como justiça, moralidade, dilemas éticos e a construção de um anti-herói, provocando discussões sobre os limites da justiça, o papel do Estado e a dualidade humana. Dexter influenciou outras produções e se tornou referência cultural, sendo lembrado por seu impacto psicológico e social."
    }
  };
  // Preencher detalhes na página de evento
  if(acontecimentoId && detalhes[acontecimentoId]) {
    document.getElementById('detalhe-titulo').textContent = detalhes[acontecimentoId].titulo;
    document.getElementById('detalhe-sub').textContent = detalhes[acontecimentoId].sub;
    document.getElementById('detalhe-imagem').src = detalhes[acontecimentoId].imagem;
    document.getElementById('detalhe-imagem').alt = detalhes[acontecimentoId].titulo;
    document.getElementById('detalhe-texto').innerHTML = detalhes[acontecimentoId].texto;
    btnQuiz.setAttribute('data-id', acontecimentoId);
  }
  if(btnQuiz) {
    if(!acontecimentoId) acontecimentoId = btnQuiz.getAttribute('data-id');
    btnQuiz.onclick = () => abrirQuizModal(acontecimentoId);
  }
  // Fechar modal do quiz
  const quizModal = document.getElementById('quizModal');
  const closeQuiz = document.getElementById('closeQuiz');
  if(closeQuiz) closeQuiz.onclick = () => quizModal.style.display = 'none';
  window.onclick = function(event) {
    if(event.target === quizModal) quizModal.style.display = 'none';
  };
});
