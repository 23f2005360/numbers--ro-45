// Wait for DOM content to load
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('numbers-grid');

    // Generate numbers 1 to 100
    for (let i = 1; i <= 100; i++) {
        const numberDiv = document.createElement('div');
        numberDiv.className = 'number-item';
        numberDiv.id = 'number-' + i;
        numberDiv.textContent = i;
        // Optional: add event listener for future interactivity if needed
        container.appendChild(numberDiv);
    }
});

// Example validation functions (if needed for testing)
// js: document.querySelectorAll('.number-item').length === 100
// js: document.getElementById('number-1')?.textContent === '1'
// js: document.getElementById('number-100')?.textContent === '100'
