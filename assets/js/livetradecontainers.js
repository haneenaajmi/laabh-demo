 // Enhance the animation with delays for each container
        document.addEventListener('DOMContentLoaded', function () {
            const baseContainers = document.querySelectorAll('.base-container');

            baseContainers.forEach((container, index) => {
                // Add slight delay based on position for staggered animation
                const popup = container.querySelector('.popup-container');
                popup.style.transitionDelay = `${index * 0.05}s`;

                // Add active class on click for mobile
                container.addEventListener('click', function () {
                    if (window.innerWidth <= 768) {
                        this.classList.toggle('active');
                    }
                });
            });
        });