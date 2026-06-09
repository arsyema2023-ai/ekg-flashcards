/**
 * OSCE EKG UltraFlash — App Controller v4.0
 * Handles: mode switching, ECG rendering, flip mechanics, hint system, progress, keyboard nav
 */
const App = {
  // State
  currentMode: 'mode1',
  currentIndex: 0,
  deck: [],
  isFlipped: false,
  hintActive: false,
  ecgGenerator: null,

  // DOM refs
  els: {},

  /**
   * Initialize app
   */
  init() {
    // Cache DOM elements
    const $ = (id) => document.getElementById(id);
    this.els = {
      // Sections
      infographic: $('infographic'),
      flashcardSection: $('flashcard-section'),
      // Mode buttons
      mode1: $('btn-mode1'),
      mode2: $('btn-mode2'),
      mode3: $('btn-mode3'),
      // Start / back
      startBtn: $('start-btn'),
      backToInfo: $('back-to-info'),
      backInfo: $('btn-back-info'),
      // Flashcard
      flashcard: $('flashcard'),
      wrapper: $('flashcard-wrapper'),
      ecgCanvas: $('ecg-canvas'),
      // Progress
      progressFill: $('progress-fill'),
      currentNum: $('current-num'),
      totalNum: $('total-num'),
      modeIndicator: $('mode-indicator'),
      // Badge
      badge: $('badge'),
      cardNumber: $('card-number'),
      cardTitle: $('card-title'),
      backTitle: $('back-title'),
      // Interpretation
      irama: $('irama'),
      rate: $('rate'),
      axis: $('axis'),
      prInterval: $('pr-interval'),
      qrsComplex: $('qrs-complex'),
      stSegment: $('st-segment'),
      tWave: $('t-wave'),
      qtInterval: $('qt-interval'),
      uWave: $('u-wave'),
      ecgDiagnosis: $('ecg-diagnosis'),
      // Clinical
      patientScenario: $('patient-scenario'),
      clinicalCorrelation: $('clinical-correlation'),
      clinicalDiagnosis: $('clinical-diagnosis'),
      differentialDx: $('differential-dx'),
      // Management
      acuteMgmt: $('acute-mgmt'),
      drugList: $('drug-list'),
      referral: $('referral'),
      // OSCE template
      osceTemplate: $('osce-template'),
      // Buttons
      hintBtn: $('btn-hint'),
      flipBtn: $('flip-btn'),
      shuffleBtn: $('shuffle-btn'),
      prevBtn: $('prev-btn'),
      nextBtn: $('next-btn')
    };

    // Create ECG generator
    this.ecgGenerator = new ECGUltraGenerator();

    // Bind events
    this._bindEvents();

    // Initial render
    console.log('⚡ EKG UltraFlash initialized!');
  },

  /**
   * Bind all event listeners
   */
  _bindEvents() {
    const els = this.els;

    // Mode switching
    els.mode1.addEventListener('click', () => this.setMode('mode1'));
    els.mode2.addEventListener('click', () => this.setMode('mode2'));
    els.mode3.addEventListener('click', () => this.setMode('mode3'));

    // Start / back
    els.startBtn.addEventListener('click', () => this.startFlashcards());
    els.backToInfo.addEventListener('click', () => this.showInfographic());
    els.backInfo.addEventListener('click', () => this.showInfographic());

    // Flashcard flip
    els.flashcard.addEventListener('click', (e) => {
      if (e.target.closest('.btn-hint') || e.target.closest('.btn-back-info') || 
          e.target.closest('.ctrl-btn') || e.target.closest('.back-to-info')) return;
      this.toggleFlip();
    });
    els.flipBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.toggleFlip();
    });

    // Hint
    els.hintBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.toggleHint();
    });

    // Navigation
    els.prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.prevCard();
    });
    els.nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.nextCard();
    });
    els.shuffleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.shuffleDeck();
    });

    // Keyboard
    document.addEventListener('keydown', (e) => {
      if (this.els.flashcardSection.classList.contains('hidden')) return;
      
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        if (this.isFlipped) {
          this.nextCard();
        } else {
          this.toggleFlip();
        }
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
  },

  /**
   * Set active mode
   */
  setMode(mode) {
    if (mode === this.currentMode) return;
    this.currentMode = mode;

    // Update UI buttons
    [this.els.mode1, this.els.mode2, this.els.mode3].forEach(btn => {
      btn.classList.remove('active');
    });
    this.els[mode].classList.add('active');

    // If flashcards are active, restart
    if (!this.els.flashcardSection.classList.contains('hidden')) {
      this.startFlashcards();
    }
  },

  /**
   * Show infographic
   */
  showInfographic() {
    this.els.flashcardSection.classList.add('hidden');
    this.els.infographic.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  /**
   * Start flashcards session
   */
  startFlashcards() {
    // Get data for mode
    const sourceData = FLASHCARD_DATA[this.currentMode] || [];
    if (!sourceData.length) return;

    // Shuffle deck
    this.deck = this._shuffle([...sourceData]);
    this.currentIndex = 0;
    this.isFlipped = false;

    // Update UI
    this.els.flashcard.classList.remove('flipped');
    this.els.totalNum.textContent = this.deck.length;
    this.els.infographic.classList.add('hidden');
    this.els.flashcardSection.classList.remove('hidden');

    // Mode label
    const labels = { mode1: 'Mode 1: Diagnosis EKG', mode2: 'Mode 2: Diagnosis Klinis', mode3: 'Mode 3: Komprehensif' };
    this.els.modeIndicator.textContent = labels[this.currentMode] || '';

    this.renderCard();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  /**
   * Render current card
   */
  renderCard() {
    const card = this.deck[this.currentIndex];
    if (!card) return;

    const idx = this.currentIndex;
    const total = this.deck.length;

    // Progress
    this.els.progressFill.style.width = `${((idx + 1) / total) * 100}%`;
    this.els.currentNum.textContent = idx + 1;

    // Badge
    this.els.badge.className = `badge ${card.priority}`;
    this.els.badge.textContent = card.priority === 'priority-tinggi' ? 'Prioritas Tinggi' :
                                 card.priority === 'priority-menengah' ? 'Prioritas Sedang' :
                                 'Tambahan';
    this.els.cardNumber.textContent = `#${String(idx + 1).padStart(2, '0')}`;

    // Title
    this.els.cardTitle.textContent = card.title;
    this.els.backTitle.textContent = card.title;

    // Reset hint
    this.hintActive = false;
    this.els.hintBtn.textContent = '🔍 Buka Hint — Tampilkan Highlight & Legenda';
    this.els.hintBtn.classList.remove('active');

    // Render ECG on canvas
    this._renderECG(card.ecgParams || {}, false);

    // Fill interpretation
    this._fillInterpretation(card.interp);
    this._fillClinical(card.clinical);
    this._fillManagement(card.management);

    // OSCE template
    if (card.osceTemplate) {
      this.els.osceTemplate.textContent = card.osceTemplate;
    }

    // Buttons
    this.els.prevBtn.disabled = idx === 0;
    this.els.prevBtn.style.opacity = idx === 0 ? '0.4' : '1';
    this.els.nextBtn.innerHTML = idx === total - 1 ? 
      '<span class="ctrl-icon">🔄</span><span>Ulangi</span>' :
      '<span>Selanjutnya</span><span class="ctrl-icon">▶</span>';

    // Reset flip
    this.isFlipped = false;
    this.els.flashcard.classList.remove('flipped');
  },

  /**
   * Render ECG on canvas
   */
  _renderECG(params, showHighlights = false) {
    const canvas = this.els.ecgCanvas;
    
    // Merge highlight flag into params
    const p = { ...params };
    p.showLabels = this.hintActive;
    p.showHighlights = showHighlights || this.hintActive;

    try {
      this.ecgGenerator.render(p, canvas);
    } catch(e) {
      console.error('ECG render error:', e);
    }
  },

  /**
   * Fill interpretation data
   */
  _fillInterpretation(interp) {
    if (!interp) return;
    this.els.irama.textContent = interp.irama || '—';
    this.els.rate.textContent = interp.rate || '—';
    this.els.axis.textContent = interp.axis || '—';
    this.els.prInterval.textContent = interp.prInterval || '—';
    this.els.qrsComplex.textContent = interp.qrsComplex || '—';
    this.els.stSegment.textContent = interp.stSegment || '—';
    this.els.tWave.textContent = interp.tWave || '—';
    this.els.qtInterval.textContent = interp.qtInterval || '—';
    this.els.uWave.textContent = interp.uWave || '—';
    this.els.ecgDiagnosis.textContent = interp.ecgDiagnosis || '—';
  },

  /**
   * Fill clinical data
   */
  _fillClinical(clinical) {
    if (!clinical) return;
    this.els.patientScenario.textContent = clinical.scenario || '—';
    this.els.clinicalCorrelation.textContent = clinical.correlation || '—';
    this.els.clinicalDiagnosis.textContent = clinical.diagnosis || '—';
    this.els.differentialDx.textContent = clinical.differential || '—';
  },

  /**
   * Fill management data
   */
  _fillManagement(mgmt) {
    if (!mgmt) return;
    this.els.acuteMgmt.textContent = mgmt.acute || '—';
    this.els.drugList.textContent = mgmt.drugs || '—';
    this.els.referral.textContent = mgmt.referral || '—';
  },

  /**
   * Toggle flip
   */
  toggleFlip() {
    this.isFlipped = !this.isFlipped;
    this.els.flashcard.classList.toggle('flipped');
  },

  /**
   * Toggle hint (wave labels + highlights)
   */
  toggleHint() {
    this.hintActive = !this.hintActive;
    const card = this.deck[this.currentIndex];
    if (!card) return;

    if (this.hintActive) {
      this.els.hintBtn.textContent = '🔒 Tutup Hint';
      this.els.hintBtn.classList.add('active');
    } else {
      this.els.hintBtn.textContent = '🔍 Buka Hint — Tampilkan Highlight & Legenda';
      this.els.hintBtn.classList.remove('active');
    }

    // Re-render ECG with hint
    this._renderECG(card.ecgParams || {}, true);

    // If flipped, re-render back too (hint overlay)
    if (this.isFlipped) {
      this.els.flashcard.classList.add('flipped');
    }
  },

  /**
   * Next card
   */
  nextCard() {
    if (this.currentIndex < this.deck.length - 1) {
      this.els.flashcard.classList.remove('flipped');
      this.isFlipped = false;
      this.currentIndex++;
      setTimeout(() => this.renderCard(), 300);
    } else {
      // Restart
      this.startFlashcards();
    }
  },

  /**
   * Previous card
   */
  prevCard() {
    if (this.currentIndex > 0) {
      this.els.flashcard.classList.remove('flipped');
      this.isFlipped = false;
      this.currentIndex--;
      setTimeout(() => this.renderCard(), 300);
    }
  },

  /**
   * Shuffle deck
   */
  shuffleDeck() {
    this.deck = this._shuffle(this.deck);
    this.currentIndex = 0;
    this.els.flashcard.classList.remove('flipped');
    this.isFlipped = false;
    this.renderCard();
  },

  /**
   * Fisher-Yates shuffle
   */
  _shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => App.init());
