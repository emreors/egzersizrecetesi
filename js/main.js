document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('fade-in');

    const filterButtons = document.querySelectorAll('.filter-btn');
    const featureCards = document.querySelectorAll('.feature-card');

    // Sayfa geçiş animasyonu
    featureCards.forEach(card => {
        card.addEventListener('click', e => {
            e.preventDefault();
            document.body.classList.add('fade-out');
            const target = card.dataset.link;
            setTimeout(() => (window.location.href = target), 500);
        });
    });

    // Filtreleme
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filter = button.dataset.filter;
            featureCards.forEach(card => {
                card.style.opacity = 0;
                setTimeout(() => {
                    if (filter === 'all' || card.dataset.category === filter) {
                        card.style.display = 'block';
                        setTimeout(() => (card.style.opacity = 1), 150);
                    } else {
                        card.style.display = 'none';
                    }
                }, 200);
            });
        });
    });

    // ScrollReveal animasyonları
    ScrollReveal().reveal('.feature-card', {
        delay: 200,
        distance: '50px',
        origin: 'bottom',
        duration: 800,
        easing: 'ease-out',
        interval: 150
    });

    ScrollReveal().reveal('#call-to-action', {
        delay: 300,
        distance: '0px',
        opacity: 0,
        scale: 0.9,
        duration: 1000,
        easing: 'ease-in-out'
    });

    ScrollReveal().reveal('footer', {
        delay: 400,
        distance: '30px',
        origin: 'bottom',
        duration: 900,
        easing: 'ease-out'
    });
});
