const fs = require('fs');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const html = fs.readFileSync('index.html', 'utf8');

const dom = new JSDOM(html, { runScripts: "dangerously" });

const script1 = dom.window.document.createElement('script');
script1.textContent = fs.readFileSync('ecg-generator.js', 'utf8');
dom.window.document.head.appendChild(script1);

const script2 = dom.window.document.createElement('script');
script2.textContent = fs.readFileSync('data.js', 'utf8');
dom.window.document.head.appendChild(script2);

const script3 = dom.window.document.createElement('script');
script3.textContent = fs.readFileSync('clinical-data.js', 'utf8');
dom.window.document.head.appendChild(script3);

const script4 = dom.window.document.createElement('script');
script4.textContent = fs.readFileSync('real-ecg-data.js', 'utf8');
dom.window.document.head.appendChild(script4);

const script5 = dom.window.document.createElement('script');
script5.textContent = fs.readFileSync('app.js', 'utf8');
dom.window.document.head.appendChild(script5);

dom.window.document.addEventListener('DOMContentLoaded', () => {
    try {
        console.log("DOMContentLoaded fired.");
        // Try to trigger initApp / start
        const startBtn = dom.window.document.getElementById('start-btn');
        console.log("Start button text:", startBtn.textContent);
        startBtn.click();
        console.log("Successfully started flashcards!");
        
        const modeRealBtn = dom.window.document.getElementById('btn-mode-real');
        modeRealBtn.click();
        console.log("Successfully switched mode!");
    } catch (e) {
        console.error("Caught error:", e);
    }
});

// simulate DOMContentLoaded
dom.window.document.dispatchEvent(new dom.window.Event('DOMContentLoaded'));
