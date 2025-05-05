document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu-button');
    const navigation = document.querySelector('nav');
    
    menuButton.addEventListener('click', () => {
        const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
        menuButton.setAttribute('aria-expanded', !isExpanded);
        navigation.classList.toggle('open');
        menuButton.textContent = isExpanded ? '☰' : '✕';
    });
    
    // Close menu when clicking on a link (mobile)
    document.querySelectorAll('.navigation a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 768) {
                navigation.classList.remove('open');
                menuButton.setAttribute('aria-expanded', 'false');
                menuButton.textContent = '☰';
            }
        });
    });
    
    // Responsive behavior for window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) {
            navigation.classList.remove('open');
            menuButton.setAttribute('aria-expanded', 'false');
            menuButton.textContent = '☰';
        }
    });
});