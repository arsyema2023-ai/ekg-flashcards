document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const infographicSection = document.getElementById('infographic');
    const flashcardSection = document.getElementById('flashcard-container');
    const startBtn = document.getElementById('start-btn');
    const backToInfoBtn = document.getElementById('back-to-info');
    
    const flashcard = document.getElementById('flashcard');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const flipBtn = document.getElementById('btn-flip');
    
    // Status elements
    const currentIndexEl = document.getElementById('current-index');
    const totalCardsEl = document.getElementById('total-cards');
    const progressBar = document.getElementById('progress');
    const cardBadge = document.getElementById('card-badge');
    const ecgDisplay = document.getElementById('ecg-display');
    
    // Back elements
    const diagnosisTitle = document.getElementById('diagnosis-title');
    const interpIrama = document.getElementById('interp-irama');
    const interpRate = document.getElementById('interp-rate');
    const interpAxis = document.getElementById('interp-axis');
    const interpIntervals = document.getElementById('interp-intervals');
    const interpStt = document.getElementById('interp-stt');
    const interpClinical = document.getElementById('interp-clinical');
    const interpManagement = document.getElementById('interp-management');

    // App State
    let deck = [];
    let currentIndex = 0;
    const ecgGenerator = new ECGGenerator('ecg-display');

    // Initialize App
    function initApp() {
        totalCardsEl.textContent = ecgData.length;
        startBtn.addEventListener('click', startFlashcards);
        backToInfoBtn.addEventListener('click', showInfographic);
        
        prevBtn.addEventListener('click', showPrevCard);
        nextBtn.addEventListener('click', showNextCard);
        flipBtn.addEventListener('click', toggleFlip);
        flashcard.addEventListener('click', (e) => {
            // Prevent flipping if selecting text
            if(window.getSelection().toString().length === 0) {
                toggleFlip();
            }
        });
        
        // Keyboard navigation
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
        // Deep copy and shuffle deck
        deck = shuffleArray([...ecgData]);
        currentIndex = 0;
        
        infographicSection.classList.add('hidden');
        flashcardSection.classList.remove('hidden');
        
        renderCard();
    }

    function showInfographic() {
        flashcardSection.classList.add('hidden');
        infographicSection.classList.remove('hidden');
    }

    function toggleFlip() {
        flashcard.classList.toggle('flipped');
    }

    function showNextCard() {
        if (currentIndex < deck.length - 1) {
            flashcard.classList.remove('flipped');
            setTimeout(() => {
                currentIndex++;
                renderCard();
            }, 300); // Wait for flip animation before changing content
        } else {
            // Re-shuffle and start over when done
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
        
        // Update UI
        updateProgressBar();
        
        // Update Badge
        cardBadge.className = `badge ${cardData.priority}`;
        let badgeText = 'Tertinggi';
        if(cardData.priority === 'prioritas-menengah') badgeText = 'Tinggi';
        if(cardData.priority === 'tambahan') badgeText = 'Tambahan';
        cardBadge.textContent = `Prioritas ${badgeText}`;

        // Front: Render SVG
        ecgDisplay.innerHTML = ecgGenerator.render(cardData.generatorConfig);

        // Back: Render Interpretation
        diagnosisTitle.textContent = cardData.title;
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
