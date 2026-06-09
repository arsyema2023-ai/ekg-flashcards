document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const infographicSection = document.getElementById('infographic');
    const flashcardSection = document.getElementById('flashcard-container');
    const startBtn = document.getElementById('start-btn');
    const backToInfoBtn = document.getElementById('back-to-info');
    
    // Mode Buttons
    const modeEkgBtn = document.getElementById('btn-mode-ekg');
    const modeKlinisBtn = document.getElementById('btn-mode-klinis');
    const modeRealBtn = document.getElementById('btn-mode-real');
    
    const flashcard = document.getElementById('flashcard');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const flipBtn = document.getElementById('btn-flip');
    const hintBtn = document.getElementById('btn-hint');
    const hintContainer = document.getElementById('hint-container');
    
    // Status elements
    const currentIndexEl = document.getElementById('current-index');
    const totalCardsEl = document.getElementById('total-cards');
    const progressBar = document.getElementById('progress');
    const cardBadge = document.getElementById('card-badge');
    
    // Front elements
    const ecgDisplay = document.getElementById('ecg-display');
    // Removed clinical image variables
    
    // Back elements
    const diagnosisTitle = document.getElementById('diagnosis-title');
    
    // EKG back elements
    const interpEkgContainer = document.getElementById('interp-ekg');
    const interpIrama = document.getElementById('interp-irama');
    const interpRate = document.getElementById('interp-rate');
    const interpAxis = document.getElementById('interp-axis');
    const interpIntervals = document.getElementById('interp-intervals');
    const interpStt = document.getElementById('interp-stt');
    const interpClinical = document.getElementById('interp-clinical');
    const interpManagement = document.getElementById('interp-management');



    // App State
    let currentMode = 'ekg'; // 'ekg' or 'klinis'
    let deck = [];
    let currentIndex = 0;
    const ecgGenerator = new ECGGenerator('ecg-display');

    // Initialize App
    function initApp() {
        // Toggle Listeners
        modeEkgBtn.addEventListener('click', () => setMode('ekg'));
        modeKlinisBtn.addEventListener('click', () => setMode('klinis'));
        modeRealBtn.addEventListener('click', () => setMode('real'));

        startBtn.addEventListener('click', startFlashcards);
        backToInfoBtn.addEventListener('click', showInfographic);
        
        prevBtn.addEventListener('click', showPrevCard);
        nextBtn.addEventListener('click', showNextCard);
        flipBtn.addEventListener('click', toggleFlip);
        hintBtn.addEventListener('click', toggleHint);
        flashcard.addEventListener('click', (e) => {
            // Prevent flipping if selecting text or clicking hint btn
            if(window.getSelection().toString().length === 0 && e.target !== hintBtn) {
                toggleFlip();
            }
        });
        // Handle Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (!flashcardSection.classList.contains('hidden')) {
                if (e.key === 'ArrowRight' || e.key === ' ') {
                    e.preventDefault();
                    if(flashcard.classList.contains('flipped')) {
                        showNextCard();
                    } else {
                        toggleFlip();
                    }
                } else if (e.key === 'ArrowLeft') {
                    showPrevCard();
                } else if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
                    e.preventDefault();
                    toggleFlip();
                }
            }
        });
    }

    function setMode(mode) {
        if (mode === currentMode) return;
        currentMode = mode;
        
        // Update Buttons
        modeEkgBtn.classList.remove('active');
        modeKlinisBtn.classList.remove('active');
        modeRealBtn.classList.remove('active');
        
        if (mode === 'ekg') {
            modeEkgBtn.classList.add('active');
        } else if (mode === 'klinis') {
            modeKlinisBtn.classList.add('active');
        } else if (mode === 'real') {
            modeRealBtn.classList.add('active');
        }
        
        // If we are currently showing flashcards, restart them in the new mode
        if (!flashcardSection.classList.contains('hidden')) {
            startFlashcards();
        }
    }

    // Shuffle Array (Fisher-Yates)
    function shuffleArray(array) {
        let curId = array.length;
        while (0 !== curId) {
            let randId = Math.floor(Math.random() * curId);
            curId -= 1;
            let tmp = array[curId];
            array[curId] = array[randId];
            array[randId] = tmp;
        }
        return array;
    }

    function startFlashcards() {
        let sourceData;
        if (currentMode === 'ekg') sourceData = ecgData;
        else if (currentMode === 'klinis') sourceData = clinicalData;
        else sourceData = typeof realEcgData !== 'undefined' ? realEcgData : [];

        deck = shuffleArray([...sourceData]);
        currentIndex = 0;
        
        totalCardsEl.textContent = deck.length;
        infographicSection.classList.add('hidden');
        flashcardSection.classList.remove('hidden');
        
        // Reset flip state
        flashcard.classList.remove('flipped');
        
        renderCard();
    }

    function showInfographic() {
        flashcardSection.classList.add('hidden');
        infographicSection.classList.remove('hidden');
    }

    function toggleFlip() {
        flashcard.classList.toggle('flipped');
    }
    
    function toggleHint(e) {
        if(e) e.stopPropagation();
        const cardData = deck[currentIndex];
        if(!cardData || !cardData.generatorConfig) return;
        
        cardData.generatorConfig.showLabels = !cardData.generatorConfig.showLabels;
        ecgDisplay.innerHTML = ecgGenerator.render(cardData.generatorConfig);
        
        if(cardData.generatorConfig.showLabels) {
            hintBtn.textContent = 'Sembunyikan Petunjuk Gelombang';
        } else {
            hintBtn.textContent = 'Tampilkan Petunjuk Gelombang';
        }
    }

    function showNextCard() {
        if (currentIndex < deck.length - 1) {
            flashcard.classList.remove('flipped');
            setTimeout(() => {
                currentIndex++;
                renderCard();
            }, 300); // Wait for flip animation before changing content
        } else {
            startFlashcards();
        }
    }

    function showPrevCard() {
        if (currentIndex > 0) {
            flashcard.classList.remove('flipped');
            setTimeout(() => {
                currentIndex--;
                renderCard();
            }, 300);
        }
    }

    function updateProgressBar() {
        const percentage = ((currentIndex + 1) / deck.length) * 100;
        progressBar.style.width = `${percentage}%`;
        currentIndexEl.textContent = currentIndex + 1;
    }

    function renderCard() {
        const cardData = deck[currentIndex];
        
        updateProgressBar();
        
        // Update Badge
        cardBadge.className = `badge ${cardData.priority}`;
        let badgeText = 'Tertinggi';
        if(cardData.priority === 'prioritas-menengah') badgeText = 'Tinggi';
        if(cardData.priority === 'tambahan') badgeText = 'Tambahan';
        cardBadge.textContent = `Prioritas ${badgeText}`;

        diagnosisTitle.textContent = cardData.title;

        // Front UI
        ecgDisplay.classList.remove('hidden');
        hintContainer.classList.remove('hidden');
        
        // Back UI
        interpEkgContainer.classList.remove('hidden');
        
        // Reset hint label
        if (cardData.generatorConfig) {
            cardData.generatorConfig.showLabels = false;
            hintBtn.textContent = 'Tampilkan Petunjuk Gelombang';
            ecgDisplay.innerHTML = ecgGenerator.render(cardData.generatorConfig);
        }
        
        // Render Text
        interpIrama.textContent = cardData.interp.irama;
        interpRate.textContent = cardData.interp.rate;
        interpAxis.textContent = cardData.interp.axis;
        interpIntervals.textContent = cardData.interp.intervals;
        interpStt.textContent = cardData.interp.stt;
        interpClinical.textContent = cardData.interp.clinical;
        interpManagement.textContent = cardData.interp.management;
        
        
        // Update Buttons
        prevBtn.disabled = currentIndex === 0;
        prevBtn.style.opacity = currentIndex === 0 ? '0.5' : '1';
        
        if (currentIndex === deck.length - 1) {
            nextBtn.textContent = 'Mulai Ulang';
        } else {
            nextBtn.textContent = 'Berikutnya';
        }
    }

    // Run
    initApp();
});
