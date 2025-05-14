// DOM elements
const businessDirectory = document.getElementById('businessDirectory');
const searchInput = document.getElementById('searchInput');
const membershipFilter = document.getElementById('membershipFilter');

// Global variable to store business data
let businessData = [];

// Display businesses
function displayBusinesses(businesses) {
    if (businesses.length === 0) {
        businessDirectory.innerHTML = '<div class="error-message">No businesses found matching your criteria.</div>';
        return;
    }
    
    businessDirectory.innerHTML = '';
    
    businesses.forEach(business => {
        const card = document.createElement('div');
        card.className = 'business-card';
        
        // Determine membership level
        let membershipClass, membershipText;
        switch(business.membership) {
            case 1:
                membershipClass = 'member';
                membershipText = 'Member';
                break;
            case 2:
                membershipClass = 'silver';
                membershipText = 'Silver';
                break;
            case 3:
                membershipClass = 'gold';
                membershipText = 'Gold';
                break;
        }
        
        card.innerHTML = `
            <div class="membership-badge ${membershipClass}">${membershipText}</div>
            
            <div class="business-name">
                <img src="${business.logo}" alt="${business.name} logo" class="business-logo">
                ${business.name}
            </div>
            <div class="business-tagline">${business.tagline}</div>
            
            <div class="business-info">
                <i class="fas fa-map-marker-alt"></i>
                <span>${business.address}</span>
            </div>
            <div class="business-info">
                <i class="fas fa-envelope"></i>
                <span>${business.email}</span>
            </div>
            <div class="business-info">
                <i class="fas fa-phone"></i>
                <span>${business.phone}</span>
            </div>
            <div class="business-info">
                <i class="fas fa-globe"></i>
                <span>Website: <a href="${business.website}" class="website-link" target="_blank">${business.website.replace('https://', '')}</a></span>
            </div>
            
            <div class="expand-button">
                <i class="fas fa-chevron-down"></i>
            </div>
            
            <div class="expanded-details">
                <div class="detail-row">
                    <span class="detail-label">Founded:</span>
                    <span>${business.founded}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Employees:</span>
                    <span>${business.employees}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Rating:</span>
                    <span>${business.rating}/5.0</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Services:</span>
                    <span>${business.services.join(', ')}</span>
                </div>
            </div>
        `;
        
        // Add click event for expand/collapse
        const expandBtn = card.querySelector('.expand-button');
        expandBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            card.classList.toggle('expanded');
            const icon = expandBtn.querySelector('i');
            icon.classList.toggle('fa-chevron-down');
            icon.classList.toggle('fa-chevron-up');
        });
        
        // Add click event for card (could be used for more details)
        card.addEventListener('click', () => {
            console.log(`Selected: ${business.name}`);
            // In a real app, you might open a modal here
        });
        
        businessDirectory.appendChild(card);
    });
}

// Filter businesses based on search and membership
function filterBusinesses() {
    const searchTerm = searchInput.value.toLowerCase();
    const membershipValue = membershipFilter.value;
    
    const filtered = businessData.filter(business => {
        const matchesSearch = 
            business.name.toLowerCase().includes(searchTerm) ||
            business.tagline.toLowerCase().includes(searchTerm) ||
            business.address.toLowerCase().includes(searchTerm);
        
        const matchesMembership = 
            membershipValue === 'all' || 
            business.membership.toString() === membershipValue;
        
        return matchesSearch && matchesMembership;
    });
    
    displayBusinesses(filtered);
}

// Event listeners
searchInput.addEventListener('input', filterBusinesses);
membershipFilter.addEventListener('change', filterBusinesses);

// Fetch business data from JSON file
async function fetchBusinessData() {
    try {
        const response = await fetch('data/members.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        businessData = await response.json();
        displayBusinesses(businessData);
    } catch (error) {
        console.error('Error fetching business data:', error);
        businessDirectory.innerHTML = '<div class="error-message">Error loading business directory. Please try again later.</div>';
    }
}

// Initialize the application
fetchBusinessData();
//Load Font Awesome after validation
window.addEventListener('DOMContentLoaded', function() {
  var fa = document.createElement('link');
  fa.rel = 'stylesheet';
  fa.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css';
  document.head.appendChild(fa);
});