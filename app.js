/**
 * OSCE EKG UltraFlash — App Controller v4.1
 * Big visible nav buttons, sticky bottom bar, keyboard nav
 */
const App = {
  currentMode: 'mode1',
  currentIndex: 0,
  deck: [],
  isFlipped: false,
  hintActive: false,
  ecgGenerator: null,
  els: {},

  init() {
    const $ = (id) => document.getElementById(id);
    this.els = {
      infographic: $('infographic'),
      flashcardSection: $('flashcard-section'),
      mode1: $('btn-mode1'), mode2: $('btn-mode2'), mode3: $('btn-mode3'),
      startBtn: $('start-btn'),
      backInfo: $('btn-back-info'),
      flashcard: $('flashcard'),
      ecgCanvas: $('ecg-canvas'),
      progressFill: $('progress-fill'),
      modeIndicator: $('mode-indicator'),
      badge: $('badge'), cardNumber: $('card-number'),
      cardTitle: $('card-title'), backTitle: $('back-title'),
      irama: $('irama'), rate: $('rate'), axis: $('axis'),
      prInterval: $('pr-interval'), qrsComplex: $('qrs-complex'),
      stSegment: $('st-segment'), tWave: $('t-wave'),
      qtInterval: $('qt-interval'), uWave: $('u-wave'),
      ecgDiagnosis: $('ecg-diagnosis'),
      patientScenario: $('patient-scenario'),
      clinicalCorrelation: $('clinical-correlation'),
      clinicalDiagnosis: $('clinical-diagnosis'),
      differentialDx: $('differential-dx'),
      acuteMgmt: $('acute-mgmt'), drugList: $('drug-list'), referral: $('referral'),
      osceTemplate: $('osce-template'),
      // Buttons
      hintBtn: $('btn-hint'),
      hintBtnNav: $('hint-btn-nav'),
      flipBtn: $('flip-btn'),
      shuffleBtn: $('shuffle-btn'),
      prevBtn: $('prev-btn'),
      nextBtn: $('next-btn'),
      backToInfoNav: $('back-to-info-nav'),
      // Nav counter
      currentNumNav: $('current-num-nav'),
      totalNumNav: $('total-num-nav')
    };

    this.ecgGenerator = new ECGUltraGenerator();
    this._bindEvents();
    console.log('⚡ EKG UltraFlash v4.1 ready');
  },

  _bindEvents() {
    const els = this.els;

    // Mode
    els.mode1.addEventListener('click', () => this.setMode('mode1'));
    els.mode2.addEventListener('click', () => this.setMode('mode2'));
    els.mode3.addEventListener('click', () => this.setMode('mode3'));

    // Start / back
    els.startBtn.addEventListener('click', () => this.startFlashcards());
    els.backInfo.addEventListener('click', () => this.showInfographic());
    if (els.backToInfoNav) {
      els.backToInfoNav.addEventListener('click', () => this.showInfographic());
    }

    // Flip via card click (ignore clicks on buttons inside card)
    els.flashcard.addEventListener('click', (e) => {
      if (e.target.closest('.btn-hint') || e.target.closest('.btn-back-info') ||
          e.target.closest('.nav-bar') || e.target.closest('.ctrl-btn')) return;
      this.toggleFlip();
    });

    // Flip button
    els.flipBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.toggleFlip();
    });

    // Hint (both buttons)
    const hintHandler = (e) => {
      if (e) e.stopPropagation();
      this.toggleHint();
    };
    els.hintBtn.addEventListener('click', hintHandler);
    if (els.hintBtnNav) {
      els.hintBtnNav.addEventListener('click', hintHandler);
    }

    // Navigation
    els.prevBtn.addEventListener('click', () => this.prevCard());
    els.nextBtn.addEventListener('click', () => this.nextCard());
    els.shuffleBtn.addEventListener('click', () => this.shuffleDeck());

    // Keyboard
    document.addEventListener('keydown', (e) => {
      if (this.els.flashcardSection.classList.contains('hidden')) return;
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        if (this.isFlipped) this.nextCard();
        else this.toggleFlip();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        this.prevCard();
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        e.preventDefault();
        this.toggleFlip();
      } else if (e.key === 'h' || e.key === 'H') {
        this.toggleHint();
      } else if (e.key === 'Home') {
        this.showInfographic();
      }
    });

    // Touch swipe on card
    let touchStartX = 0;
    els.flashcard.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    els.flashcard.addEventListener('touchend', (e) => {
      const dx = e.changedTouches[0].screenX - touchStartX;
      if (Math.abs(dx) > 60) {
        if (dx > 0) this.prevCard();
        else this.nextCard();
      }
    }, { passive: true });
  },

  setMode(mode) {
    if (mode === this.currentMode) return;
    this.currentMode = mode;
    [this.els.mode1, this.els.mode2, this.els.mode3].forEach(b => b.classList.remove('active'));
    if (this.els[mode]) this.els[mode].classList.add('active');
    if (!this.els.flashcardSection.classList.contains('hidden')) this.startFlashcards();
  },

  showInfographic() {
    this.els.flashcardSection.classList.add('hidden');
    this.els.infographic.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  startFlashcards() {
    const data = FLASHCARD_DATA[this.currentMode];
    if (!data || !data.length) return;
    this.deck = this._shuffle([...data]);
    this.currentIndex = 0;
    this.isFlipped = false;
    this.els.flashcard.classList.remove('flipped');
    this.els.infographic.classList.add('hidden');
    this.els.flashcardSection.classList.remove('hidden');
    const labels = { mode1: 'Mode 1: Diagnosis EKG', mode2: 'Mode 2: Diagnosis Klinis', mode3: 'Mode 3: Komprehensif' };
    this.els.modeIndicator.textContent = labels[this.currentMode] || '';
    this.renderCard();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  renderCard() {
    const card = this.deck[this.currentIndex];
    if (!card) return;
    const i = this.currentIndex, n = this.deck.length;

    // Progress
    const pct = ((i + 1) / n) * 100;
    if (this.els.progressFill) this.els.progressFill.style.width = pct + '%';

    // Nav counter
    if (this.els.currentNumNav) this.els.currentNumNav.textContent = i + 1;
    if (this.els.totalNumNav) this.els.totalNumNav.textContent = n;

    // Badge
    this.els.badge.className = `badge ${card.priority}`;
    this.els.badge.textContent = card.priority === 'priority-tinggi' ? 'Prioritas Tinggi' :
                                 card.priority === 'priority-menengah' ? 'Prioritas Sedang' : 'Tambahan';
    this.els.cardNumber.textContent = `#${String(i + 1).padStart(2, '0')}`;
    this.els.cardTitle.textContent = card.title;
    this.els.backTitle.textContent = card.title;

    // Reset hint
    this.hintActive = false;
    this.els.hintBtn.textContent = '🔍 Buka Hint — Tampilkan Highlight & Legenda';
    this.els.hintBtn.classList.remove('active');
    if (this.els.hintBtnNav) this.els.hintBtnNav.textContent = '💡 Hint';

    // Render ECG
    this._renderECG(card.ecgParams || {}, false);
    this._fillInterpretation(card.interp);
    this._fillClinical(card.clinical);
    this._fillManagement(card.management);
    if (card.osceTemplate) this.els.osceTemplate.textContent = card.osceTemplate;

    // Buttons state
    this.els.prevBtn.disabled = i === 0;
    this.els.prevBtn.style.opacity = i === 0 ? '0.4' : '1';
    if (this.els.nextBtn) {
      this.els.nextBtn.innerHTML = i === n - 1
        ? '<span class="nav-detail">Ulangi</span><span class="nav-arrow">🔄</span>'
        : '<span class="nav-detail">Selanjutnya</span><span class="nav-arrow">▶</span>';
    }

    // Reset flip
    this.isFlipped = false;
    this.els.flashcard.classList.remove('flipped');
  },

  _renderECG(params, hl) {
    const p = { ...params, showLabels: this.hintActive, showHighlights: hl || this.hintActive };
    try { this.ecgGenerator.render(p, this.els.ecgCanvas); }
    catch(e) { console.error('ECG error:', e); }
  },

  _fillInterpretation(d) {
    if (!d) return;
    this.els.irama.textContent = d.irama || '—';
    this.els.rate.textContent = d.rate || '—';
    this.els.axis.textContent = d.axis || '—';
    this.els.prInterval.textContent = d.prInterval || '—';
    this.els.qrsComplex.textContent = d.qrsComplex || '—';
    this.els.stSegment.textContent = d.stSegment || '—';
    this.els.tWave.textContent = d.tWave || '—';
    this.els.qtInterval.textContent = d.qtInterval || '—';
    this.els.uWave.textContent = d.uWave || '—';
    this.els.ecgDiagnosis.textContent = d.ecgDiagnosis || '—';
  },

  _fillClinical(d) {
    if (!d) return;
    this.els.patientScenario.textContent = d.scenario || '—';
    this.els.clinicalCorrelation.textContent = d.correlation || '—';
    this.els.clinicalDiagnosis.textContent = d.diagnosis || '—';
    this.els.differentialDx.textContent = d.differential || '—';
  },

  _fillManagement(d) {
    if (!d) return;
    this.els.acuteMgmt.textContent = d.acute || '—';
    this.els.drugList.textContent = d.drugs || '—';
    this.els.referral.textContent = d.referral || '—';
  },

  toggleFlip() {
    this.isFlipped = !this.isFlipped;
    this.els.flashcard.classList.toggle('flipped');
  },

  toggleHint() {
    this.hintActive = !this.hintActive;
    const card = this.deck[this.currentIndex];
    if (!card) return;
    if (this.hintActive) {
      this.els.hintBtn.textContent = '🔒 Tutup Hint';
      this.els.hintBtn.classList.add('active');
      if (this.els.hintBtnNav) this.els.hintBtnNav.textContent = '💡 Tutup';
    } else {
      this.els.hintBtn.textContent = '🔍 Buka Hint — Tampilkan Highlight & Legenda';
      this.els.hintBtn.classList.remove('active');
      if (this.els.hintBtnNav) this.els.hintBtnNav.textContent = '💡 Hint';
    }
    this._renderECG(card.ecgParams || {}, true);
    if (this.isFlipped) this.els.flashcard.classList.add('flipped');
  },

  nextCard() {
    if (this.currentIndex < this.deck.length - 1) {
      this.els.flashcard.classList.remove('flipped');
      this.isFlipped = false;
      this.currentIndex++;
      setTimeout(() => this.renderCard(), 300);
    } else {
      this.startFlashcards();
    }
  },

  prevCard() {
    if (this.currentIndex > 0) {
      this.els.flashcard.classList.remove('flipped');
      this.isFlipped = false;
      this.currentIndex--;
      setTimeout(() => this.renderCard(), 300);
    }
  },

  shuffleDeck() {
    this.deck = this._shuffle(this.deck);
    this.currentIndex = 0;
    this.els.flashcard.classList.remove('flipped');
    this.isFlipped = false;
    this.renderCard();
  },

  _shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
};

document.addEventListener('DOMContentLoaded', () => App.init());
