function toggleContainer(containerNumber) {
    const selectedContainer = document.getElementById(`container${containerNumber}`);
    selectedContainer.classList.toggle('active');
}