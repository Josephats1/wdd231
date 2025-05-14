// Toggle mobile nav
document.getElementById('menu-toggle').addEventListener('click', () => {
    document.getElementById('mobile-nav').classList.toggle('show');
  });
  
  // Toggle dark mode
  document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
 // Set copyright year
 document.getElementById('copyright-year').textContent = new Date().getFullYear();
    
 // Set last modified date (optional)
 document.getElementById('last-modified').textContent = document.lastModified;  