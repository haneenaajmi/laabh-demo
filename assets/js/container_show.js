 const videoPlayer = document.getElementById('videoPlayer');
        const placeholder = document.getElementById('placeholder');
        let currentVideoCard = null;
        
        function playVideo(videoSrc, card) {
            // Reset previous active card
            if (currentVideoCard) {
                currentVideoCard.style.background = '#1e293b';
                currentVideoCard.style.borderLeft = '4px solid transparent';
            }
            
            // Set new active card
            currentVideoCard = card;
            card.style.background = '#334155';
            card.style.borderLeft = '4px solid var(--primary)';
            
            // Load and play video
            videoPlayer.src = videoSrc;
            videoPlayer.style.display = 'block';
            placeholder.style.display = 'none';
            
            videoPlayer.load();
            videoPlayer.play().catch(e => {
                console.log("Auto-play was prevented, user interaction is required");
                // On mobile, we need to handle this differently
            });
        }
        
        // For hover functionality on desktop
        const cards = document.querySelectorAll('.content-card');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                const videoSrc = this.getAttribute('onclick').match(/'([^']+)'/)[1];
                playVideo(videoSrc, this);
            });
        });
        
        // Reset when mouse leaves panel
        document.querySelector('.content-panel').addEventListener('mouseleave', () => {
            if (window.innerWidth > 1024) { // Desktop only
                videoPlayer.pause();
                videoPlayer.style.display = 'none';
                placeholder.style.display = 'flex';
                
                if (currentVideoCard) {
                    currentVideoCard.style.background = '#1e293b';
                    currentVideoCard.style.borderLeft = '4px solid transparent';
                    currentVideoCard = null;
                }
            }
        });
        
        // Handle mobile interactions
        videoPlayer.addEventListener('click', function() {
            if (this.paused) {
                this.play();
            } else {
                this.pause();
            }
        });