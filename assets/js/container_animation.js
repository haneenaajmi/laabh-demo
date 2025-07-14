document.addEventListener('DOMContentLoaded', function () {
    // Select all elements to animate
    const elementsToAnimate = [
        document.getElementById('image-container1'),
        document.getElementById('text-container1'),
        document.getElementById('image-container-2'),
        document.getElementById('text-container-2')
    ];

    // Set up Intersection Observer with smooth scroll-triggered animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const animationProgress = Math.min(1, entry.intersectionRatio * 2);
            if (entry.isIntersecting) {
                entry.target.style.opacity = animationProgress;
                entry.target.style.transform = `translateX(${(1 - animationProgress) * (entry.target.id.includes('image') ? -50 : 50)}px)`;
                if (animationProgress >= 0.99) {
                    entry.target.classList.add('animate-in');
                }
            } else {
                entry.target.classList.remove('animate-in');
                entry.target.style.opacity = 0;
            }
        });
    }, {
        threshold: Array.from({ length: 100 }, (_, i) => i * 0.01), // Track progress through whole element
        rootMargin: '0px 0px -20px 0px'
    });

    // Observe each element
    elementsToAnimate.forEach(element => {
        if (element) {
            observer.observe(element);
        }
    });

    // Smooth scroll effects for decoration elements
    function animateDecorations() {
        const scrollPosition = window.scrollY;
        const decoration1 = document.querySelector('.decoration-1');
        const decoration2 = document.querySelector('.decoration-2');

        if (decoration1) {
            decoration1.style.transform = `translateY(${scrollPosition * 0.2}px) 
                                               rotate(${scrollPosition * 0.05}deg)
                                               scale(${1 + scrollPosition * 0.0002})`;
        }

        if (decoration2) {
            decoration2.style.transform = `translateY(${-scrollPosition * 0.15}px)
                                               rotate(${-scrollPosition * 0.05}deg) 
                                               scale(${1 + scrollPosition * 0.0001})`;
        }

        requestAnimationFrame(animateDecorations);
    }
    animateDecorations();
});