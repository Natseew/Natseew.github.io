document.addEventListener('DOMContentLoaded', () => {
    const fireworksContainer = document.getElementById('fireworks-container');

    function createFirework(x, y) {
        const firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.width = `${Math.random() * 100 + 20}px`;
        firework.style.height = firework.style.width;
        firework.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        firework.style.left = `${x}px`;
        firework.style.top = `${y}px`;
        fireworksContainer.appendChild(firework);

        setTimeout(() => {
            firework.remove();
        }, 1000); // Remove firework after animation
    }

    function launchFireworks() {
        for (let i = 0; i < 20; i++) {
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;
            createFirework(x, y);
        }
    }

    // Launch fireworks every 5 seconds
    setInterval(launchFireworks, 5000);

    // Optionally, you can launch fireworks on page load or on specific events
    // launchFireworks();

    const galleryItems = document.querySelectorAll('.gallery-item');
    const zoomModal = document.createElement('div');
    zoomModal.className = 'zoom-modal';
    document.body.appendChild(zoomModal);

    const zoomModalImg = document.createElement('img');
    zoomModal.appendChild(zoomModalImg);

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            zoomModalImg.src = item.src;
            zoomModal.classList.add('active');
        });
    });

    zoomModal.addEventListener('click', () => {
        zoomModal.classList.remove('active');
    });
});