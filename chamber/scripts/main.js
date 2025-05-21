// Toggle mobile nav"

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
                "id": 3,
                "name": "Urban Design Studio",
                "tagline": "Creating spaces that inspire",
                "address": "789 Design Ave, New York, NY 10001",
                "email": "hello@urbandesign.com",
                "phone": "800-555-1003",
                "website": "https://urbandesignstudio.com",
                "logo": "images/logo3.png",
                "membership": 1,
                "founded": 2008,
                "employees": 15,
                "services": ["Interior Design", "Architecture", "Space Planning"],
                "rating": 4.7
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
            {
                "id": 5,
                "name": "Oceanview Restaurants",
                "tagline": "Fine dining with a view",
                "address": "101 Coastal Highway, Miami, FL 33139",
                "email": "reservations@oceanview.com",
                "phone": "800-555-1005",
                "website": "https://oceanviewrestaurants.com",
                "logo": "images/logo5.jpg",
                "membership": 2,
                "founded": 2012,
                "employees": 75,
                "services": ["Fine Dining", "Catering", "Cooking Classes"],
                "rating": 4.5
            },
            {
                "id": 6,
                "name": "Peak Performance Sports",
                "tagline": "Equipment for champions",
                "address": "234 Athletic Way, Denver, CO 80202",
                "email": "sales@peakperformance.com",
                "phone": "800-555-1006",
                "website": "https://peakperformance.com",
                "logo": "images/logo6.jpg",
                "membership": 1,
                "founded": 2005,
                "employees": 32,
                "services": ["Sports Equipment", "Team Uniforms", "Training Gear"],
                "rating": 4.4
            },
            {
                "id": 7,
                "name": "Global Logistics Solutions",
                "tagline": "Connecting your business to the world",
                "address": "567 Shipping Lane, Chicago, IL 60601",
                "email": "info@globallogistics.com",
                "phone": "800-555-1007",
                "website": "https://globallogistics.com",
                "logo": "images/logo7.jpg",
                "membership": 3,
                "founded": 2000,
                "employees": 420,
                "services": ["Freight Shipping", "Warehousing", "Supply Chain Mgmt"],
                "rating": 4.7
            },
            {
                "id": 8,
                "name": "Creative Minds Education",
                "tagline": "Inspiring the next generation",
                "address": "890 Learning Blvd, Boston, MA 02108",
                "email": "learn@creativeminds.com",
                "phone": "800-555-1008",
                "website": "https://creativeminds.edu",
                "logo": "images/logo8.png",
                "membership": 2,
                "founded": 2018,
                "employees": 28,
                "services": ["STEM Programs", "Arts Education", "Tutoring"],
                "rating": 4.8
            }
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

        // In a real app, you would fetch from an API:
        /*
        async function fetchBusinesses() {
            try {
                const response = await fetch('businesses.json');
                const data = await response.json();
                displayBusinesses(data);
            } catch (error) {
                console.error('Error fetching businesses:', error);
                businessDirectory.innerHTML = '<p>Error loading business directory. Please try again later.</p>';
            }
        }
        fetchBusinesses();
        */