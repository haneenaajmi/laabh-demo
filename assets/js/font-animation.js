const image = document.querySelector('.animated-image');
let animationSpeed = 3;

function updateAnimationSpeed() {
    image.style.animationDuration = `${animationSpeed}s`;
}