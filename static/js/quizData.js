// Quizzes específicos para cada acontecimento histórico
// Use o mesmo id do acontecimento em DATA (ex: "revolucao-francesa")
const quizzes = { 
  "dexter": [
    {
      pergunta: "Qual é a profissão de Dexter Morgan?",
      opcoes: ["Detetive", "Analista forense", "Advogado", "Médico"],
      resposta: 1
    },
    {
      pergunta: "Qual é o nome do código que orienta Dexter em seus crimes?",
      opcoes: ["Código de Harry", "Código de Morgan", "Código de Debra", "Código de Miami"],
      resposta: 0
    },
    {
      pergunta: "Quem é a irmã de Dexter?",
      opcoes: ["Rita", "Debra", "Lila", "Hannah"],
      resposta: 1
    },
    {
      pergunta: "Qual dilema moral é frequentemente explorado na série?",
      opcoes: ["Justiça versus vingança", "Amor versus ódio", "Poder versus submissão", "Riqueza versus pobreza"],
      resposta: 0
    },
    {
      pergunta: "Qual é o nome do policial que desconfia de Dexter desde o início?",
      opcoes: ["Doakes", "Masuka", "Quinn", "Batista"],
      resposta: 0
    }
  ],
  "queda-imperio-romano": [
    {
      pergunta: "Em que ano ocorreu a Queda do Império Romano do Ocidente?",
      opcoes: ["395", "476", "1453", "800"],
      resposta: 1,
      dificuldade: "fácil"
    },
    {
      pergunta: "Quem depôs o último imperador romano do Ocidente?",
      opcoes: ["Odoacro", "Constantino", "Carlos Magno", "Teodósio"],
      resposta: 0,
      dificuldade: "médio"
    },
    {
      pergunta: "Qual era o nome do último imperador romano do Ocidente?",
      opcoes: ["Júlio César", "Rômulo Augústulo", "Nero", "Trajano"],
      resposta: 1,
      dificuldade: "médio"
    },
    {
      pergunta: "Qual povo foi decisivo para a queda do Império Romano do Ocidente?",
      opcoes: ["Francos", "Godos", "Vândalos", "Germânicos"],
      resposta: 3,
      dificuldade: "difícil"
    },
    {
      pergunta: "A queda do Império Romano do Ocidente marcou o início de qual período?",
      opcoes: ["Idade Moderna", "Idade Média", "Renascimento", "Antiguidade"],
      resposta: 1,
      dificuldade: "fácil"
    }
  ],
  "idades-medias": [
    {
      pergunta: "Qual cidade europeia é considerada berço das universidades medievais?",
      opcoes: ["Paris", "Bolonha", "Oxford", "Salamanca"],
      resposta: 1,
      dificuldade: "fácil"
    },
    {
      pergunta: "O que era estudado no trivium medieval?",
      opcoes: ["Gramática, Retórica e Lógica", "Matemática, Astronomia e Música", "Medicina, Direito e Teologia", "Filosofia, História e Geografia"],
      resposta: 0,
      dificuldade: "médio"
    },
    {
      pergunta: "Qual universidade inglesa foi fundada no século XII?",
      opcoes: ["Cambridge", "Oxford", "Edimburgo", "Manchester"],
      resposta: 1,
      dificuldade: "fácil"
    },
    {
      pergunta: "O quadrivium incluía quais disciplinas?",
      opcoes: ["Gramática, Retórica, Lógica, Filosofia", "Matemática, Geometria, Música, Astronomia", "Medicina, Direito, Teologia, Filosofia", "História, Geografia, Arte, Música"],
      resposta: 1,
      dificuldade: "difícil"
    },
    {
      pergunta: "Qual era o principal objetivo das universidades medievais?",
      opcoes: ["Formar guerreiros", "Transmitir conhecimento", "Expandir territórios", "Criar impérios"],
      resposta: 1,
      dificuldade: "fácil"
    }
  ],
  "revolucao-francesa": [
    {
      pergunta: "Em que ano começou a Revolução Francesa?",
      opcoes: ["1776", "1789", "1815", "1848"],
      resposta: 1,
      dificuldade: "fácil"
    },
    {
      pergunta: "Qual documento foi proclamado durante a Revolução Francesa?",
      opcoes: ["Declaração dos Direitos do Homem", "Manifesto Comunista", "Carta Magna", "Tratado de Versalhes"],
      resposta: 0,
      dificuldade: "fácil"
    },
    {
      pergunta: "Quem era o rei da França no início da Revolução?",
      opcoes: ["Luís XIV", "Luís XVI", "Carlos X", "Napoleão"],
      resposta: 1,
      dificuldade: "médio"
    },
    {
      pergunta: "Qual grupo social liderou o Terceiro Estado?",
      opcoes: ["Nobreza", "Clero", "Burguesia", "Militares"],
      resposta: 2,
      dificuldade: "médio"
    },
    {
      pergunta: "Qual símbolo ficou famoso como instrumento de execução?",
      opcoes: ["Forca", "Guilhotina", "Fuzil", "Cadeira elétrica"],
      resposta: 1,
      dificuldade: "fácil"
    }
  ],
  "revolucao-industrial": [
    {
      pergunta: "Qual foi a principal invenção da Revolução Industrial?",
      opcoes: ["Imprensa", "Máquina a vapor", "Telefone", "Internet"],
      resposta: 1,
      dificuldade: "fácil"
    },
    {
      pergunta: "Em que país iniciou a Revolução Industrial?",
      opcoes: ["França", "Alemanha", "Inglaterra", "Estados Unidos"],
      resposta: 2,
      dificuldade: "fácil"
    },
    {
      pergunta: "Qual setor foi o primeiro a ser mecanizado?",
      opcoes: ["Agricultura", "Têxtil", "Metalurgia", "Transporte"],
      resposta: 1,
      dificuldade: "médio"
    },
    {
      pergunta: "Quem inventou a locomotiva a vapor?",
      opcoes: ["James Watt", "George Stephenson", "Thomas Edison", "Henry Ford"],
      resposta: 1,
      dificuldade: "difícil"
    },
    {
      pergunta: "Qual foi uma consequência social da Revolução Industrial?",
      opcoes: ["Urbanização", "Feudalismo", "Colonização", "Descentralização"],
      resposta: 0,
      dificuldade: "fácil"
    }
  ],
  "primeira-guerra": [
    {
      pergunta: "Em que ano começou a Primeira Guerra Mundial?",
      opcoes: ["1914", "1939", "1945", "1929"],
      resposta: 0,
      dificuldade: "fácil"
    },
    {
      pergunta: "Qual evento foi o estopim da guerra?",
      opcoes: ["Ataque a Pearl Harbor", "Assassinato do arquiduque Franz Ferdinand", "Queda do Muro de Berlim", "Revolução Russa"],
      resposta: 1,
      dificuldade: "médio"
    },
    {
      pergunta: "Qual tratado encerrou a guerra?",
      opcoes: ["Tratado de Tordesilhas", "Tratado de Paris", "Tratado de Versalhes", "Tratado de Utrecht"],
      resposta: 2,
      dificuldade: "fácil"
    },
    {
      pergunta: "Qual país saiu derrotado e sofreu sanções pesadas?",
      opcoes: ["França", "Rússia", "Alemanha", "Itália"],
      resposta: 2,
      dificuldade: "médio"
    },
    {
      pergunta: "O que caracterizou a guerra de trincheiras?",
      opcoes: ["Movimento rápido", "Combate aéreo", "Estagnação e desgaste", "Uso de tanques"],
      resposta: 2,
      dificuldade: "difícil"
    }
  ],
  "segunda-guerra": [
    {
      pergunta: "Qual país foi invadido pela Alemanha em 1939?",
      opcoes: ["França", "Polônia", "Rússia", "Itália"],
      resposta: 1,
      dificuldade: "fácil"
    },
    {
      pergunta: "Quem era o líder do Reino Unido durante a guerra?",
      opcoes: ["Churchill", "Stalin", "Roosevelt", "Hitler"],
      resposta: 0,
      dificuldade: "médio"
    },
    {
      pergunta: "Qual evento marcou o fim da guerra na Europa?",
      opcoes: ["Dia D", "Queda de Berlim", "Batalha de Stalingrado", "Pearl Harbor"],
      resposta: 1,
      dificuldade: "difícil"
    },
    {
      pergunta: "Qual cidade foi alvo da primeira bomba atômica?",
      opcoes: ["Tóquio", "Hiroshima", "Berlim", "Londres"],
      resposta: 1,
      dificuldade: "médio"
    },
    {
      pergunta: "Qual organização foi criada após a guerra?",
      opcoes: ["OTAN", "ONU", "UE", "OEA"],
      resposta: 1,
      dificuldade: "fácil"
    }
  ],
  "muro-de-berlim": [
    {
      pergunta: "Em que ano o Muro de Berlim caiu?",
      opcoes: ["1987", "1989", "1991", "1993"],
      resposta: 1,
      dificuldade: "fácil"
    },
    {
      pergunta: "O muro separava Berlim Ocidental de qual país?",
      opcoes: ["Polônia", "Alemanha Oriental", "Áustria", "Tchecoslováquia"],
      resposta: 1,
      dificuldade: "fácil"
    },
    {
      pergunta: "Qual líder soviético estava no poder durante a queda?",
      opcoes: ["Stalin", "Gorbachev", "Brejnev", "Khrushchev"],
      resposta: 1,
      dificuldade: "médio"
    },
    {
      pergunta: "O que simbolizava o muro?",
      opcoes: ["Fim da Segunda Guerra", "Divisão ideológica", "Unificação europeia", "Colonização"],
      resposta: 1,
      dificuldade: "difícil"
    },
    {
      pergunta: "Qual foi uma consequência direta da queda?",
      opcoes: ["Reunificação alemã", "Nova guerra", "Criação da ONU", "Independência da Polônia"],
      resposta: 0,
      dificuldade: "fácil"
    }
  ],
  "internet-popularizacao": [
    {
      pergunta: "Em que década a internet se popularizou mundialmente?",
      opcoes: ["1970", "1980", "1990", "2000"],
      resposta: 2,
      dificuldade: "fácil"
    },
    {
      pergunta: "Qual protocolo é base para navegação na web?",
      opcoes: ["FTP", "SMTP", "HTTP", "SSH"],
      resposta: 2,
      dificuldade: "médio"
    },
    {
      pergunta: "Quem é considerado o criador da World Wide Web?",
      opcoes: ["Bill Gates", "Tim Berners-Lee", "Steve Jobs", "Mark Zuckerberg"],
      resposta: 1,
      dificuldade: "difícil"
    },
    {
      pergunta: "Qual foi um dos primeiros usos populares da internet?",
      opcoes: ["Redes sociais", "E-mail", "Streaming", "Jogos online"],
      resposta: 1,
      dificuldade: "fácil"
    },
    {
      pergunta: "O que significa WWW?",
      opcoes: ["World Wide Web", "Web World Wide", "Wide Web World", "Web Wide World"],
      resposta: 0,
      dificuldade: "fácil"
    }
  ],
  "primavera-arabe": [
    {
      pergunta: "Em que ano começou a Primavera Árabe?",
      opcoes: ["2008", "2010", "2012", "2015"],
      resposta: 1,
      dificuldade: "fácil"
    },
    {
      pergunta: "Qual país foi o primeiro a iniciar protestos?",
      opcoes: ["Egito", "Tunísia", "Líbia", "Síria"],
      resposta: 1,
      dificuldade: "médio"
    },
    {
      pergunta: "Qual era uma das principais reivindicações dos manifestantes?",
      opcoes: ["Mais impostos", "Democracia", "Colonização", "Expansão territorial"],
      resposta: 1,
      dificuldade: "fácil"
    },
    {
      pergunta: "Qual rede social foi importante na organização dos protestos?",
      opcoes: ["Facebook", "Orkut", "LinkedIn", "TikTok"],
      resposta: 0,
      dificuldade: "difícil"
    },
    {
      pergunta: "Qual foi uma consequência da Primavera Árabe?",
      opcoes: ["Estabilidade política", "Mudanças de governo", "Fim da internet", "Unificação árabe"],
      resposta: 1,
      dificuldade: "médio"
    }
  ]
};
