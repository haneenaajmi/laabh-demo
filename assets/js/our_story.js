// Animate cards with delays
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.container-card');
    cards.forEach((card, index) => {
        // Add incrementing delay for each card
        card.style.animationDelay = `${index * 0.1}s`;
        card.addEventListener('click', () => {
            console.log(`Card clicked: ${card.querySelector('h3')?.textContent || 'Untitled Card'}`);
        });
    });
});