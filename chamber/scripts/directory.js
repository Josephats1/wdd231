// Configuration
const API_KEY = '4de0b0eeda3c4b3d00a943f3b43d016b';
const CITY = 'Masaka';
const COUNTRY = 'UG';
const UNITS = 'imperial';

// DOM Elements
const currentTempEl = document.getElementById('current-temp');
const currentDescEl = document.getElementById('current-desc');
const currentIconEl = document.getElementById('current-icon');
const highTempEl = document.getElementById('high-temp');
const lowTempEl = document.getElementById('low-temp');
const humidityEl = document.getElementById('humidity');
const windSpeedEl = document.getElementById('wind-speed');
const forecastContainerEl = document.getElementById('forecast-container');
const apiStatusEl = document.getElementById('api-status');

// Weather Icons Mapping
const weatherIcons = {
    '01d': 'fa-sun',
    '01n': 'fa-moon',
    '02d': 'fa-cloud-sun',
    '02n': 'fa-cloud-moon',
    '03d': 'fa-cloud',
    '03n': 'fa-cloud',
    '04d': 'fa-cloud',
    '04n': 'fa-cloud',
    '09d': 'fa-cloud-rain',
    '09n': 'fa-cloud-rain',
    '10d': 'fa-cloud-sun-rain',
    '10n': 'fa-cloud-moon-rain',
    '11d': 'fa-bolt',
    '11n': 'fa-bolt',
    '13d': 'fa-snowflake',
    '13n': 'fa-snowflake',
    '50d': 'fa-smog',
    '50n': 'fa-smog'
};

// Set weather icon
function setWeatherIcon(element, iconCode) {
    const iconClass = weatherIcons[iconCode] || 'fa-question';
    element.innerHTML = `<i class="fas ${iconClass}"></i>`;
}

// Fetch Weather Data
async function fetchWeatherData() {
    apiStatusEl.textContent = 'Fetching weather data...';
    
    try {
        // Current Weather
        const currentUrl = `https://api.openweathermap.org/data/2.5/weather?q=${CITY},${COUNTRY}&units=${UNITS}&appid=${API_KEY}`;
        const currentResponse = await fetch(currentUrl);
        
        if (!currentResponse.ok) throw new Error(`HTTP error! status: ${currentResponse.status}`);
        const currentData = await currentResponse.json();
        
        // Forecast
        const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${CITY},${COUNTRY}&units=${UNITS}&appid=${API_KEY}`;
        const forecastResponse = await fetch(forecastUrl);
        
        if (!forecastResponse.ok) throw new Error(`HTTP error! status: ${forecastResponse.status}`);
        const forecastData = await forecastResponse.json();
        
        updateCurrentWeather(currentData);
        updateForecast(forecastData);
        apiStatusEl.textContent = 'Weather data loaded';
        
    } catch (error) {
        console.error('Error:', error);
        apiStatusEl.textContent = `Error: ${error.message}`;
        currentDescEl.textContent = 'Weather data unavailable';
        forecastContainerEl.innerHTML = '<div class="error">Failed to load forecast</div>';
    }
}

// Update Current Weather
function updateCurrentWeather(data) {
    currentTempEl.textContent = `${Math.round(data.main.temp)}°F`;
    currentDescEl.textContent = data.weather[0].description;
    highTempEl.textContent = `${Math.round(data.main.temp_max)}°`;
    lowTempEl.textContent = `${Math.round(data.main.temp_min)}°`;
    humidityEl.textContent = `${data.main.humidity}%`;
    windSpeedEl.textContent = `${Math.round(data.wind.speed)} mph`;
    setWeatherIcon(currentIconEl, data.weather[0].icon);
}

// Update Forecast
function updateForecast(data) {
    forecastContainerEl.innerHTML = '';
    
    if (!data.list?.length) {
        forecastContainerEl.innerHTML = '<div class="error">No forecast data</div>';
        return;
    }
    
    // Get noon forecasts for next 3 days
    const dailyForecasts = data.list.filter(item => {
        const date = new Date(item.dt * 1000);
        return date.getHours() >= 11 && date.getHours() <= 13;
    }).slice(0, 3);
    
    dailyForecasts.forEach(day => {
        const date = new Date(day.dt * 1000);
        const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
        const iconCode = day.weather[0].icon;
        
        const forecastItem = document.createElement('div');
        forecastItem.className = 'forecast-item';
        forecastItem.innerHTML = `
            <div class="forecast-day">
                <div class="forecast-icon">
                    <i class="fas ${weatherIcons[iconCode] || 'fa-question'}"></i>
                </div>
                <span class="day-name">${dayName}</span>
            </div>
            <span class="day-temp">${Math.round(day.main.temp)}°F</span>
        `;
        forecastContainerEl.appendChild(forecastItem);
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    fetchWeatherData();
    
    // Set copyright year
    document.getElementById('copyright-year').textContent = new Date().getFullYear();
    document.getElementById('last-modified').textContent = document.lastModified;
    
    // Mobile nav toggle
    document.getElementById('menu-toggle').addEventListener('click', () => {
        document.getElementById('mobile-nav').classList.toggle('show');
    });
    
    // Dark mode toggle
    document.getElementById('theme-toggle').addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
    
    // Hide status message after 5 seconds
    setTimeout(() => {
        if (apiStatusEl) apiStatusEl.style.display = "none";
    }, 5000);
});
 // JSON data source
        const businessData = [
            {
                "id": 1,
                "name": "Tech Innovators Inc.",
                "tagline": "Transforming ideas into digital solutions",
                "address": "123 Tech Plaza, Silicon Valley, CA 94025",
                "email": "info@techinnovators.com",
                "phone": "800-555-1001",
                "website": "https://techinnovators.com",
                "logo": "images/logo1.jpg",
                "membership": 3,
                "founded": 2010,
                "employees": 250,
                "services": ["Web Development", "AI Solutions", "Cloud Services"],
                "rating": 4.8
            },
            {
                "id": 2,
                "name": "Green Earth Organics",
                "tagline": "Sustainable farming for a healthier planet",
                "address": "456 Farm Road, Portland, OR 97205",
                "email": "contact@greenearth.com",
                "phone": "800-555-1002",
                "website": "https://greenearthorganics.com",
                "logo": "images/logo2.jpg",
                "membership": 2,
                "founded": 2015,
                "employees": 48,
                "services": ["Organic Produce", "Farm Tours", "CSA Subscriptions"],
                "rating": 4.6
            },
         
            {
                "id": 4,
                "name": "Summit Financial",
                "tagline": "Your trusted financial advisors",
                "address": "321 Wall Street, New York, NY 10005",
                "email": "support@summitfinancial.com",
                "phone": "800-555-1004",
                "website": "https://summitfinancial.com",
                "logo": "images/logo4.png",
                "membership": 3,
                "founded": 1995,
                "employees": 180,
                "services": ["Wealth Management", "Retirement Planning", "Tax Services"],
                "rating": 4.9
            },
           
        ];

        // DOM elements
        const businessDirectory = document.getElementById('businessDirectory');
        const searchInput = document.getElementById('searchInput');
        const membershipFilter = document.getElementById('membershipFilter');

        // Display businesses
        function displayBusinesses(businesses) {
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

        // Initial display
        displayBusinesses(businessData);