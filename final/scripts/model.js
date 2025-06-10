export function setupModal() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <div id="modal-body"></div>
        </div>
    `;
    document.body.appendChild(modal);

    const readMoreButtons = document.querySelectorAll('.read-more');
    const closeModal = document.querySelector('.close-modal');

    readMoreButtons.forEach(button => {
        button.addEventListener('click', async () => {
            const storyId = button.getAttribute('data-id');
            try {
                const response = await fetch(`data/stories/${storyId}.json`);
                const story = await response.json();
                document.getElementById('modal-body').innerHTML = `
                    <h2>${story.title}</h2>
                    <p>${story.fullText}</p>
                    <img src="${story.image}" alt="${story.title}" loading="lazy">
                `;
                modal.style.display = 'flex';
            } catch (error) {
                console.error('Error loading story details:', error);
            }
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}