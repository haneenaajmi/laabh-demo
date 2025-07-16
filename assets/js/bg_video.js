// Ensure video plays properly on mobile devices
document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('video');
    console.log(video);

    setTimeout(() => {

        video.play().then(() => {
            console.log('video playing 🟢');
        }).catch(() => {
            console.log('video not playing 🔴');
        });
    }, 1000);
    // Try to play video (required for some mobile browsers)
    // Force autoplay (but don't show controls on failure)
    // video.play().catch(() => { });
});