// Update copyright year
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Update last modified date
document.getElementById('lastModified').textContent = `Last Update: ${formatDate(new Date(document.lastModified))}`;

function formatDate(date) {
    const options = { 
        year: 'numeric', 
        month: '2-digit', 
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    return date.toLocaleDateString('en-US', options);
}