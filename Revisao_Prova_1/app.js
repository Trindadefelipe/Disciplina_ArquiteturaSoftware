/**
 * QUIZ SPA - DISCIPLINA DE ARQUITETURA DE SOFTWARE
 * Arquitetura Front-end Limpa e Reativa
 */

(function () {
  'use strict';

  // ESTADO DA APLICAÇÃO
  const state = {
    currentQuizQuestions: [], // 10 perguntas selecionadas (2 por slide)
    userAnswers: {},          // { questionId: selectedOptionIndex }
    currentQuestionIndex: 0,  // Índice da pergunta atual (0 a 9)
    quizStartTime: null,
    viewMode: 'errors-only',  // 'errors-only' ou 'all' na tela de resultados
    screen: 'welcome'         // 'welcome', 'quiz', 'results'
  };

  // ELEMENTOS DO DOM
  const elements = {
    welcomeScreen: document.getElementById('welcome-screen'),
    quizScreen: document.getElementById('quiz-screen'),
    resultsScreen: document.getElementById('results-screen'),
    
    // Welcome
    startQuizBtn: document.getElementById('start-quiz-btn'),
    totalQuestionsCount: document.getElementById('total-questions-count'),
    
    // Quiz
    currentSlideBadge: document.getElementById('current-slide-badge'),
    questionProgressText: document.getElementById('question-progress-text'),
    progressBarFill: document.getElementById('progress-bar-fill'),
    questionTopic: document.getElementById('question-topic'),
    questionText: document.getElementById('question-text'),
    optionsContainer: document.getElementById('options-container'),
    prevBtn: document.getElementById('prev-btn'),
    nextBtn: document.getElementById('next-btn'),
    quickNav: document.getElementById('quick-nav'),
    
    // Results
    scoreText: document.getElementById('score-text'),
    scorePercent: document.getElementById('score-percent'),
    scoreMessage: document.getElementById('score-message'),
    scoreFeedbackIcon: document.getElementById('score-feedback-icon'),
    scoreCircleProgress: document.getElementById('score-circle-progress'),
    slideBreakdownContainer: document.getElementById('slide-breakdown-container'),
    resultsList: document.getElementById('results-list'),
    restartQuizBtn: document.getElementById('restart-quiz-btn'),
    viewModeBtns: document.querySelectorAll('[data-view-mode]')
  };

  // INICIALIZAÇÃO
  function init() {
    if (elements.totalQuestionsCount && typeof QUESTION_BANK !== 'undefined') {
      elements.totalQuestionsCount.textContent = QUESTION_BANK.length;
    }

    bindEvents();
    renderSlideTopicPreviews();
  }

  // EVENT LISTENERS
  function bindEvents() {
    if (elements.startQuizBtn) {
      elements.startQuizBtn.addEventListener('click', startNewQuiz);
    }

    if (elements.restartQuizBtn) {
      elements.restartQuizBtn.addEventListener('click', startNewQuiz);
    }

    if (elements.prevBtn) {
      elements.prevBtn.addEventListener('click', goToPrevQuestion);
    }

    if (elements.nextBtn) {
      elements.nextBtn.addEventListener('click', handleNextButtonClick);
    }

    // Filtros de visualização no Resultado (Apenas Erros vs Todas)
    elements.viewModeBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        elements.viewModeBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.viewMode = btn.dataset.viewMode;
        renderResultsReview();
      });
    });

    // Atalhos de Teclado (1, 2, 3, 4 ou A, B, C, D para responder; Setas e Enter para navegar)
    document.addEventListener('keydown', handleKeyboardShortcuts);
  }

  // REGRAS DE NEGÓCIO: SORTEIO DE QUESTÕES
  /**
   * Sorteia exatamente 10 perguntas:
   * 2 do Slide 1, 2 do Slide 2, 2 do Slide 3, 2 do Slide 4 e 2 do Slide 5.
   */
  function drawQuestions() {
    const slides = ['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4', 'Slide 5'];
    const selectedQuestions = [];

    slides.forEach(slideCategory => {
      // Filtra perguntas daquele slide
      const pool = QUESTION_BANK.filter(q => q.category === slideCategory);
      
      // Embaralha o pool deste slide (Fisher-Yates Shuffle)
      const shuffledPool = [...pool];
      for (let i = shuffledPool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledPool[i], shuffledPool[j]] = [shuffledPool[j], shuffledPool[i]];
      }

      // Pega exatamente 2
      const picked = shuffledPool.slice(0, 2);
      selectedQuestions.push(...picked);
    });

    return selectedQuestions;
  }

  // INICIA NOVO QUIZ
  function startNewQuiz() {
    state.currentQuizQuestions = drawQuestions();
    state.userAnswers = {};
    state.currentQuestionIndex = 0;
    state.quizStartTime = new Date();
    state.viewMode = 'errors-only';

    // Reseta botões de filtro no resultado
    elements.viewModeBtns.forEach(b => {
      if (b.dataset.viewMode === 'errors-only') b.classList.add('active');
      else b.classList.remove('active');
    });

    switchScreen('quiz');
    renderQuestion();
    renderQuickNav();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // CONTROLE DE TELAS
  function switchScreen(screenName) {
    state.screen = screenName;
    elements.welcomeScreen.classList.toggle('active', screenName === 'welcome');
    elements.quizScreen.classList.toggle('active', screenName === 'quiz');
    elements.resultsScreen.classList.toggle('active', screenName === 'results');
  }

  // RENDERIZA A PERGUNTA ATUAL
  function renderQuestion() {
    const question = state.currentQuizQuestions[state.currentQuestionIndex];
    if (!question) return;

    // Atualiza badges e cabeçalhos
    elements.currentSlideBadge.textContent = question.category;
    elements.currentSlideBadge.className = `slide-badge slide-badge-${question.category.toLowerCase().replace(' ', '-')}`;
    elements.questionTopic.textContent = question.topic || 'Conceito Arquitetural';
    elements.questionProgressText.textContent = `Questão ${state.currentQuestionIndex + 1} de ${state.currentQuizQuestions.length}`;
    
    // Atualiza barra de progresso
    const progressPercent = ((state.currentQuestionIndex + 1) / state.currentQuizQuestions.length) * 100;
    elements.progressBarFill.style.width = `${progressPercent}%`;

    // Texto da questão
    elements.questionText.textContent = question.question;

    // Renderiza alternativas
    elements.optionsContainer.innerHTML = '';
    const selectedAnswer = state.userAnswers[question.id];

    question.options.forEach((optionText, idx) => {
      const optionBtn = document.createElement('button');
      optionBtn.type = 'button';
      optionBtn.className = `option-card ${selectedAnswer === idx ? 'selected' : ''}`;
      
      const letterPrefix = ['A', 'B', 'C', 'D'][idx];
      // Remove A), B), C), D) do texto se já vier com ele para evitar duplicar
      const cleanText = optionText.replace(/^[A-D]\)\s*/, '');

      optionBtn.innerHTML = `
        <span class="option-letter">${letterPrefix}</span>
        <span class="option-text">${cleanText}</span>
      `;

      optionBtn.addEventListener('click', () => selectOption(question.id, idx));
      elements.optionsContainer.appendChild(optionBtn);
    });

    // Controle dos botões Anterior / Próxima
    elements.prevBtn.disabled = state.currentQuestionIndex === 0;
    
    const isLastQuestion = state.currentQuestionIndex === state.currentQuizQuestions.length - 1;
    if (isLastQuestion) {
      elements.nextBtn.innerHTML = `Finalizar e Ver Resultados <i class="icon">➔</i>`;
      elements.nextBtn.classList.add('finish-btn');
    } else {
      elements.nextBtn.innerHTML = `Próxima Questão <i class="icon">➔</i>`;
      elements.nextBtn.classList.remove('finish-btn');
    }

    // Atualiza estado do quick nav (bolinhas de navegação rápida)
    updateQuickNavState();
  }

  // SELEÇÃO DE ALTERNATIVA
  function selectOption(questionId, optionIndex) {
    state.userAnswers[questionId] = optionIndex;
    
    // Atualiza visual das opções
    const optionCards = elements.optionsContainer.querySelectorAll('.option-card');
    optionCards.forEach((card, idx) => {
      card.classList.toggle('selected', idx === optionIndex);
    });

    updateQuickNavState();
  }

  // NAVEGAÇÃO ENTRE QUESTÕES
  function goToPrevQuestion() {
    if (state.currentQuestionIndex > 0) {
      state.currentQuestionIndex--;
      renderQuestion();
    }
  }

  function handleNextButtonClick() {
    const currentQ = state.currentQuizQuestions[state.currentQuestionIndex];
    
    // Validação suave se usuário não marcou resposta
    if (state.userAnswers[currentQ.id] === undefined) {
      const confirmSkip = confirm('Você ainda não selecionou uma resposta para esta pergunta. Deseja avançar mesmo assim?');
      if (!confirmSkip) return;
    }

    const isLastQuestion = state.currentQuestionIndex === state.currentQuizQuestions.length - 1;
    if (isLastQuestion) {
      finishQuiz();
    } else {
      state.currentQuestionIndex++;
      renderQuestion();
    }
  }

  // NAVEGAÇÃO RÁPIDA (Pílulas / Bolinhas 1 a 10)
  function renderQuickNav() {
    elements.quickNav.innerHTML = '';
    state.currentQuizQuestions.forEach((q, idx) => {
      const pill = document.createElement('button');
      pill.type = 'button';
      pill.className = `nav-pill ${idx === state.currentQuestionIndex ? 'current' : ''}`;
      pill.textContent = idx + 1;
      pill.title = `Questão ${idx + 1} (${q.category})`;
      pill.addEventListener('click', () => {
        state.currentQuestionIndex = idx;
        renderQuestion();
      });
      elements.quickNav.appendChild(pill);
    });
  }

  function updateQuickNavState() {
    const pills = elements.quickNav.querySelectorAll('.nav-pill');
    pills.forEach((pill, idx) => {
      const q = state.currentQuizQuestions[idx];
      const isAnswered = state.userAnswers[q.id] !== undefined;
      const isCurrent = idx === state.currentQuestionIndex;

      pill.className = `nav-pill ${isCurrent ? 'current' : ''} ${isAnswered ? 'answered' : ''}`;
    });
  }

  // FINALIZAR QUIZ E EXIBIR RESULTADOS
  function finishQuiz() {
    switchScreen('results');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    let correctCount = 0;
    const totalCount = state.currentQuizQuestions.length; // 10
    const slideStats = {
      'Slide 1': { total: 0, correct: 0, title: 'Slide 1: Introdução à Arquitetura' },
      'Slide 2': { total: 0, correct: 0, title: 'Slide 2: Níveis e Modelo C4' },
      'Slide 3': { total: 0, correct: 0, title: 'Slide 3: Estilos Arquiteturais' },
      'Slide 4': { total: 0, correct: 0, title: 'Slide 4: Arquitetura em Camadas' },
      'Slide 5': { total: 0, correct: 0, title: 'Slide 5: MVC e Estrutura de Pastas' }
    };

    state.currentQuizQuestions.forEach(q => {
      const userChoice = state.userAnswers[q.id];
      const isCorrect = userChoice === q.answer;
      
      if (slideStats[q.category]) {
        slideStats[q.category].total++;
        if (isCorrect) slideStats[q.category].correct++;
      }

      if (isCorrect) {
        correctCount++;
      }
    });

    const percentage = Math.round((correctCount / totalCount) * 100);

    // Atualiza pontuação principal
    elements.scoreText.textContent = `${correctCount}/${totalCount}`;
    elements.scorePercent.textContent = `${percentage}% de aproveitamento`;

    // Atualiza feedback motivacional e círculo de progresso
    if (elements.scoreCircleProgress) {
      elements.scoreCircleProgress.style.strokeDashoffset = 283 - (283 * percentage) / 100;
      elements.scoreCircleProgress.style.stroke = percentage >= 80 ? '#10b981' : percentage >= 60 ? '#f59e0b' : '#ef4444';
    }

    let feedbackMsg = '';
    let feedbackIcon = '🎯';
    if (percentage === 100) {
      feedbackMsg = 'Excelente! Domínio completo dos 5 slides. Você está pronto para a prova!';
      feedbackIcon = '🏆';
    } else if (percentage >= 80) {
      feedbackMsg = 'Ótimo desempenho! Você tem uma base sólida nos conceitos arquiteturais.';
      feedbackIcon = '🌟';
    } else if (percentage >= 60) {
      feedbackMsg = 'Bom resultado! Revise as questões abaixo para fechar todas as lacunas.';
      feedbackIcon = '📚';
    } else {
      feedbackMsg = 'Atenção aos conceitos fundamentais. Leia as explicações detalhadas abaixo e refaça o quiz!';
      feedbackIcon = '💡';
    }

    elements.scoreMessage.textContent = feedbackMsg;
    if (elements.scoreFeedbackIcon) elements.scoreFeedbackIcon.textContent = feedbackIcon;

    // Renderiza Desempenho por Slide
    renderSlideBreakdown(slideStats);

    // Renderiza Lista de Revisão
    renderResultsReview();
  }

  // RENDERIZA DESEMPENHO POR SLIDE
  function renderSlideBreakdown(slideStats) {
    elements.slideBreakdownContainer.innerHTML = '';
    
    Object.keys(slideStats).forEach(slideKey => {
      const stat = slideStats[slideKey];
      const item = document.createElement('div');
      item.className = 'slide-stat-card';
      const pct = stat.total > 0 ? (stat.correct / stat.total) * 100 : 0;

      item.innerHTML = `
        <div class="stat-header">
          <span class="stat-badge ${slideKey.toLowerCase().replace(' ', '-')}">${slideKey}</span>
          <span class="stat-score ${stat.correct === stat.total ? 'perfect' : stat.correct > 0 ? 'partial' : 'zero'}">${stat.correct}/${stat.total}</span>
        </div>
        <div class="stat-title">${stat.title.split(': ')[1]}</div>
        <div class="stat-bar"><div class="stat-bar-fill" style="width: ${pct}%"></div></div>
      `;
      elements.slideBreakdownContainer.appendChild(item);
    });
  }

  // RENDERIZA DETALHAMENTO DE ERROS OU TODAS AS QUESTÕES
  function renderResultsReview() {
    elements.resultsList.innerHTML = '';

    const questionsToDisplay = state.currentQuizQuestions.filter(q => {
      const isCorrect = state.userAnswers[q.id] === q.answer;
      if (state.viewMode === 'errors-only') {
        return !isCorrect;
      }
      return true;
    });

    if (questionsToDisplay.length === 0) {
      if (state.viewMode === 'errors-only') {
        elements.resultsList.innerHTML = `
          <div class="all-correct-banner">
            <div class="banner-icon">🎉</div>
            <div class="banner-title">Parabéns! Você não errou nenhuma questão neste sorteio!</div>
            <p>Seu aproveitamento foi de 100%. Clique em "Refazer Quiz" para testar novas perguntas sorteadas do banco.</p>
          </div>
        `;
      }
      return;
    }

    questionsToDisplay.forEach((question, index) => {
      const userChoiceIdx = state.userAnswers[question.id];
      const isCorrect = userChoiceIdx === question.answer;
      const isUnanswered = userChoiceIdx === undefined;

      const card = document.createElement('div');
      card.className = `review-card ${isCorrect ? 'review-correct' : 'review-wrong'}`;

      const letters = ['A', 'B', 'C', 'D'];
      const userChoiceLetter = isUnanswered ? 'Não respondeu' : `${letters[userChoiceIdx]}) ${question.options[userChoiceIdx].replace(/^[A-D]\)\s*/, '')}`;
      const correctChoiceLetter = `${letters[question.answer]}) ${question.options[question.answer].replace(/^[A-D]\)\s*/, '')}`;

      card.innerHTML = `
        <div class="review-header">
          <div class="review-meta">
            <span class="slide-badge slide-badge-${question.category.toLowerCase().replace(' ', '-')}">${question.category}</span>
            <span class="review-topic">${question.topic || 'Conceito'}</span>
          </div>
          <span class="review-status-tag ${isCorrect ? 'status-correct' : 'status-wrong'}">
            ${isCorrect ? '✔ Acertou' : '✖ Errou'}
          </span>
        </div>

        <div class="review-question-text">${question.question}</div>

        <div class="review-answers-box">
          ${!isCorrect ? `
            <div class="answer-row user-answer">
              <span class="answer-label">Sua Resposta:</span>
              <div class="answer-content">
                <span class="indicator-icon">✖</span>
                <span>${userChoiceLetter}</span>
              </div>
            </div>
          ` : ''}

          <div class="answer-row correct-answer">
            <span class="answer-label">Resposta Correta:</span>
            <div class="answer-content">
              <span class="indicator-icon">✔</span>
              <span>${correctChoiceLetter}</span>
            </div>
          </div>
        </div>

        <div class="explanation-box">
          <div class="explanation-header">
            <span class="explanation-icon">💡</span>
            <strong>Explicação Detalhada do Conteúdo:</strong>
          </div>
          <div class="explanation-text">${question.explanation}</div>
        </div>
      `;

      elements.resultsList.appendChild(card);
    });
  }

  // ATALHOS DE TECLADO
  function handleKeyboardShortcuts(e) {
    if (state.screen !== 'quiz') return;

    // Teclas 1, 2, 3, 4 ou A, B, C, D para marcar opção
    const key = e.key.toUpperCase();
    const currentQ = state.currentQuizQuestions[state.currentQuestionIndex];
    if (!currentQ) return;

    if (['1', 'A'].includes(key)) {
      selectOption(currentQ.id, 0);
    } else if (['2', 'B'].includes(key)) {
      selectOption(currentQ.id, 1);
    } else if (['3', 'C'].includes(key)) {
      selectOption(currentQ.id, 2);
    } else if (['4', 'D'].includes(key)) {
      selectOption(currentQ.id, 3);
    } else if (e.key === 'ArrowRight' || e.key === 'Enter') {
      // Avança se não estiver em campos de texto
      if (document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
        handleNextButtonClick();
      }
    } else if (e.key === 'ArrowLeft') {
      goToPrevQuestion();
    }
  }

  // RENDERIZA TÓPICOS DOS SLIDES NA TELA INICIAL
  function renderSlideTopicPreviews() {
    const topicsContainer = document.getElementById('slide-topics-list');
    if (!topicsContainer) return;

    const slideSummaries = [
      {
        num: 'Slide 1',
        title: 'Introdução à Arquitetura de Software',
        desc: 'Definição clássica (Bass et al.), estrutura vs decisão, custo de manutenção, trade-offs, casos Knight Capital e Amazon, papel e habilidades do arquiteto.'
      },
      {
        num: 'Slide 2',
        title: 'Tipos de Sistema e Modelo C4',
        desc: 'Os 7 domínios de software (Sistema, Aplicação, Embarcado, Linha de Produtos, Web/Móvel, IA), níveis de abstração e os 4 degraus do modelo C4 de Simon Brown.'
      },
      {
        num: 'Slide 3',
        title: 'Estilos Arquiteturais Fundamentais',
        desc: 'Estilo macro vs padrão micro (GoF). Os 6 estilos: Monolítico (Shopify), Cliente-Servidor (DNS), Distribuído (Discord), P2P (BitTorrent), Pub-Sub (RabbitMQ) e Pipes & Filtros (Unix).'
      },
      {
        num: 'Slide 4',
        title: 'Arquitetura em Camadas',
        desc: 'Apresentação, Domínio e Dados. Testabilidade, baixo acoplamento e alta coesão. Camadas abertas vs fechadas, lógicas vs físicas e anti-padrões (Smart UI, Domínio Anêmico, etc.).'
      },
      {
        num: 'Slide 5',
        title: 'Padrão MVC e Organização de Pastas',
        desc: 'Model, View e Controller (história desde Trygve Reenskaug). MVC qualificado com Service, Repository, DTO e Entity. Package by Layer vs Package by Feature.'
      }
    ];

    topicsContainer.innerHTML = slideSummaries.map(s => `
      <div class="topic-summary-card">
        <div class="topic-badge ${s.num.toLowerCase().replace(' ', '-')}">${s.num}</div>
        <div class="topic-info">
          <h4>${s.title}</h4>
          <p>${s.desc}</p>
        </div>
      </div>
    `).join('');
  }

  // Executa na carga do DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
