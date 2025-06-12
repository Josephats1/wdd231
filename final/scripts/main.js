 // JSON data for success stories
    const successStories = [
        {
            "title": "School Building in Kenya",
            "location": "Nairobi, Kenya",
            "impact": 75,
            "description": "Built a new school serving 300 children in an underserved community, with a 75% improvement in literacy rates within the first year.",
            "completed": true
        },
        {
            "title": "Medical Clinic in Guatemala",
            "location": "Guatemala City, Guatemala",
            "impact": 82,
            "description": "Established a mobile medical clinic that provides free healthcare to rural communities, serving over 1,200 patients monthly.",
            "completed": true
        },
        {
            "title": "Clean Water Initiative",
            "location": "Dhaka, Bangladesh",
            "impact": 90,
            "description": "Installed clean water systems in 15 villages, reducing waterborne illnesses by 90% in the region.",
            "completed": true
        },
        {
            "title": "Women's Entrepreneurship",
            "location": "Delhi, India",
            "impact": 65,
            "description": "Trained 150 women in business skills, resulting in 65% of participants starting sustainable small businesses.",
            "completed": true
        },
        {
            "title": "Agricultural Training",
            "location": "Lagos, Nigeria",
            "impact": 70,
            "description": "Provided modern farming techniques to local farmers, increasing crop yields by 70% on average.",
            "completed": true
        },
        {
            "title": "Digital Literacy Program",
            "location": "Manila, Philippines",
            "impact": 80,
            "description": "Taught computer skills to 500 underprivileged youth, with 80% securing better employment opportunities.",
            "completed": true
        },
        {
            "title": "Disaster Relief",
            "location": "Port-au-Prince, Haiti",
            "impact": 85,
            "description": "Provided emergency aid to 2,000 families affected by the hurricane, rebuilding 150 homes.",
            "completed": true
        }
    ];

    // Main App Class
    class App {
        constructor() {
            this.init();
        }

        init() {
            this.setupEventListeners();
            this.setupNavigation();
            this.animateStats();
            this.loadData();
            this.loadUserPreferences();
        }

        setupEventListeners() {
            // Mobile menu toggle
            const hamburger = document.getElementById('hamburger');
            const navLinks = document.querySelector('.nav-links');
            
            if (hamburger) {
                hamburger.addEventListener('click', () => {
                    navLinks.classList.toggle('active');
                    this.savePreference('menuOpen', navLinks.classList.contains('active'));
                });
            }

            // Modal functionality
            const modal = document.getElementById('registrationModal');
            const registerBtn = document.getElementById('registerBtn');
            const donateBtn = document.getElementById('donateBtn');
            const closeBtn = document.querySelector('.close');

            if (registerBtn) {
                registerBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.showModal(modal);
                });
            }

            if (donateBtn) {
                donateBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.showModal(modal);
                });
            }

            if (closeBtn) {
                closeBtn.addEventListener('click', () => {
                    this.hideModal(modal);
                });
            }

            window.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.hideModal(modal);
                }
            });

            // Program card interactions
            document.querySelectorAll('.program-card').forEach(card => {
                card.addEventListener('click', () => {
                    const program = card.dataset.program;
                    this.savePreference('selectedProgram', program);
                    window.location.href = 'programs.html';
                });
            });

            // Form submission
            const form = document.getElementById('registrationForm');
            if (form) {
                form.addEventListener('submit', (e) => {
                    this.handleFormSubmission(e);
                });
            }
        }

        setupNavigation() {
            // Wayfinding - highlight current page
            const currentPage = window.location.pathname.split('/').pop() || 'index.html';
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === currentPage) {
                    link.classList.add('active');
                }
            });
        }

        animateStats() {
            const statNumbers = document.querySelectorAll('.stat-number');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const target = parseInt(entry.target.dataset.target);
                        this.animateNumber(entry.target, target);
                        observer.unobserve(entry.target);
                    }
                });
            });

            statNumbers.forEach(stat => observer.observe(stat));
        }

        animateNumber(element, target) {
            let current = 0;
            const increment = target / 100;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    element.textContent = target.toLocaleString();
                    clearInterval(timer);
                } else {
                    element.textContent = Math.floor(current).toLocaleString();
                }
            }, 20);
        }

        loadData() {
            try {
                const loading = document.getElementById('loading');
                const dataGrid = document.getElementById('dataGrid');
                
                if (loading) loading.style.display = 'block';
                
                // Process and filter the data
                const processedData = successStories
                    .filter(story => story.completed && story.impact > 50)
                    .map(story => ({
                        ...story,
                        formattedImpact: `${story.impact}% improvement`,
                        shortDescription: story.description.length > 100 ? 
                            story.description.substring(0, 100) + '...' : story.description
                    }));

                this.displayData(processedData);
                
                if (loading) loading.style.display = 'none';
                
            } catch (error) {
                console.error('Error loading data:', error);
                const loading = document.getElementById('loading');
                if (loading) {
                    loading.innerHTML = '<p style="color: var(--primary-color);">Unable to load success stories. Please try again later.</p>';
                }
            }
        }

        displayData(stories) {
            const dataGrid = document.getElementById('dataGrid');
            if (!dataGrid) {
                return;
            }

            // Clear existing content
            dataGrid.innerHTML = '';

            // Create document fragment for better performance
            const fragment = document.createDocumentFragment();

            stories.forEach(story => {
                const dataItem = document.createElement('div');
                dataItem.className = 'data-item';
                dataItem.innerHTML = `
                    <h3>${story.title}</h3>
                    <p><strong>Location:</strong> ${story.location}</p>
                    <p><strong>Impact:</strong> ${story.formattedImpact}</p>
                    <p>${story.shortDescription}</p>
                `;
                fragment.appendChild(dataItem);
            });

            dataGrid.appendChild(fragment);
        }

        loadUserPreferences() {
            // Load saved preferences
            const menuOpen = this.getPreference('menuOpen');
            if (menuOpen) {
                const navLinks = document.querySelector('.nav-links');
                if (navLinks) navLinks.classList.add('active');
            }

            const selectedProgram = this.getPreference('selectedProgram');
            if (selectedProgram) {
                // Could highlight the selected program on the programs page
            }
        }

        async handleFormSubmission(e) {
            e.preventDefault();
            const form = e.target;
            const formData = new FormData(form);

            try {
                // Show loading state
                const submitBtn = form.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Processing...';
                submitBtn.disabled = true;

                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 1500));

                // Save form data
                const formValues = {};
                formData.forEach((value, key) => {
                    formValues[key] = value;
                });
                localStorage.setItem('volunteerRegistration', JSON.stringify(formValues));

                // Show success message
                this.showToast('Registration successful! We will contact you soon.');

                // Reset form
                form.reset();
                this.hideModal(document.getElementById('registrationModal'));

            } catch (error) {
                this.showToast('Registration failed. Please try again.', 'error');
            } finally {
                const submitBtn = form.querySelector('button[type="submit"]');
                if (submitBtn) {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }
            }
        }

        // Utility methods
        showModal(modal) {
            if (modal) modal.style.display = 'block';
        }

        hideModal(modal) {
            if (modal) modal.style.display = 'none';
        }

        showToast(message, type = 'success') {
            const toast = document.createElement('div');
            toast.textContent = message;
            toast.style.position = 'fixed';
            toast.style.bottom = '20px';
            toast.style.right = '20px';
            toast.style.padding = '15px';
            toast.style.backgroundColor = type === 'success' ? '#4CAF50' : '#f44336';
            toast.style.color = 'white';
            toast.style.borderRadius = '5px';
            toast.style.zIndex = '10000';
            document.body.appendChild(toast);

            setTimeout(() => {
                toast.remove();
            }, 3000);
        }

        savePreference(key, value) {
            localStorage.setItem(`pref_${key}`, JSON.stringify(value));
        }

        getPreference(key) {
            const value = localStorage.getItem(`pref_${key}`);
            return value ? JSON.parse(value) : null;
        }
    }

    // Initialize the application when DOM is loaded
    document.addEventListener('DOMContentLoaded', () => {
        new App();
    });

    // Fallback for older browsers
    if (typeof IntersectionObserver === 'undefined') {
        console.log('IntersectionObserver not supported - using fallback');
        
        function animateNumberFallback(element, target) {
            let current = 0;
            const increment = target / 100;
            const timer = setInterval(function() {
                current += increment;
                if (current >= target) {
                    element.textContent = target;
                    clearInterval(timer);
                } else {
                    element.textContent = Math.floor(current);
                }
            }, 20);
        }

        function checkVisibility() {
            document.querySelectorAll('.stat-number').forEach(function(stat) {
                const rect = stat.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom >= 0) {
                    const target = parseInt(stat.dataset.target);
                    if (!stat.animated) {
                        stat.animated = true;
                        animateNumberFallback(stat, target);
                    }
                }
            });
        }

        window.addEventListener('scroll', checkVisibility);
        window.addEventListener('load', checkVisibility);}