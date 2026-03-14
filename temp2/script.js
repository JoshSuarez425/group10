const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', () => {
    const viewportHeight = window.innerHeight;


    const isMobile = window.innerWidth <= 768;
    const stickyTopOffset = isMobile ? viewportHeight * 0.10 : viewportHeight * 0.15;

    cards.forEach((card, index) => {
        const nextCard = cards[index + 1];

        if (nextCard) {
            const nextRect = nextCard.getBoundingClientRect();

          
            const distance = nextRect.top - stickyTopOffset;

           
            if (distance < viewportHeight && distance > 0) {

        
                const maxShrink = isMobile ? 0.95 : 0.90;
                const factor = (1 - maxShrink) / viewportHeight; // Normalization factor

                const scale = 1 - ((viewportHeight - distance) * factor);

                
                const finalScale = Math.max(maxShrink, Math.min(1, scale));
                const brightness = Math.max(0.6, Math.min(1, scale));

                card.style.transform = `scale(${finalScale})`;
                card.style.filter = `brightness(${brightness})`;
            } else if (distance <= 0) {
              
                const maxShrink = isMobile ? 0.95 : 0.90;
                card.style.transform = `scale(${maxShrink})`;
                card.style.filter = `brightness(0.6)`;
            } else {

                card.style.transform = `scale(1)`;
                card.style.filter = `brightness(1)`;
            }
        }
    });
});
