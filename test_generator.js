const fs = require('fs');

// Simple mock for window/document if needed, but the generator shouldn't need them
const ecgJs = fs.readFileSync('ecg-generator.js', 'utf8');
eval(ecgJs); // Loads ECGGenerator into scope

const gen = new ECGGenerator('test');
try {
    const svg = gen.render({ heartRate: 75 });
    console.log("SVG Length:", svg.length);
    console.log("Success");
} catch (e) {
    console.error("Error generating SVG:", e);
}
