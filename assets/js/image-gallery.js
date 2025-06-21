 document.addEventListener('DOMContentLoaded', function () {
            const videos = document.querySelectorAll('video');
            videos.forEach(video => {
                video.pause();
                video.currentTime = 0;
            });
        });

        // Play video when hovered
        document.querySelectorAll('.media-container').forEach(container => {
            container.addEventListener('mouseenter', function () {
                const video = this.querySelector('video');
                video.style.display = 'block';
                video.play();
            });

            container.addEventListener('mouseleave', function () {
                const video = this.querySelector('video');
                video.style.display = 'none';
                video.pause();
                video.currentTime = 0;
            });
        });