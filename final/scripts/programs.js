 // JSON data for programs
    const programsData = [
        {
            id: 1,
            title: "Education for All",
            category: "education",
            icon: "📚",
            description: "Providing quality education to underprivileged children through school construction, teacher training, and scholarship programs.",
            stats: {
                beneficiaries: 12500,
                locations: 32,
                successRate: 92
            },
            details: {
                overview: "Our Education for All program aims to break the cycle of poverty through education by building schools, training teachers, and providing scholarships to children in underserved communities.",
                achievements: [
                    "Built 15 schools in rural areas",
                    "Trained 250 local teachers",
                    "Provided 5,000 scholarships annually",
                    "Implemented digital learning labs"
                ],
                goals: [
                    "Expand to 10 more countries by 2026",
                    "Increase female student enrollment by 30%",
                    "Introduce vocational training programs"
                ]
            }
        },
        {
            id: 2,
            title: "Mobile Health Clinics",
            category: "healthcare",
            icon: "🚑",
            description: "Bringing essential medical services to remote areas through fully equipped mobile clinics staffed by trained professionals.",
            stats: {
                beneficiaries: 85000,
                locations: 45,
                successRate: 89
            },
            details: {
                overview: "Our Mobile Health Clinics program delivers critical healthcare services to remote communities that lack access to medical facilities.",
                achievements: [
                    "Conducted 200,000+ medical consultations",
                    "Vaccinated 50,000 children",
                    "Provided prenatal care to 15,000 women",
                    "Treated 10,000 malaria cases"
                ],
                goals: [
                    "Add 20 more mobile units by 2025",
                    "Reduce child mortality by 25% in target areas",
                    "Train 500 community health workers"
                ]
            }
        },
        {
            id: 3,
            title: "Clean Water Initiative",
            category: "development",
            icon: "💧",
            description: "Installing sustainable water systems and sanitation facilities in communities lacking access to clean water.",
            stats: {
                beneficiaries: 42000,
                locations: 28,
                successRate: 95
            },
            details: {
                overview: "The Clean Water Initiative provides sustainable solutions to water scarcity through wells, filtration systems, and hygiene education.",
                achievements: [
                    "Installed 150 water wells",
                    "Built 300 sanitation facilities",
                    "Reduced waterborne diseases by 80%",
                    "Trained 10,000 in hygiene practices"
                ],
                goals: [
                    "Provide clean water to 100 more villages",
                    "Implement rainwater harvesting systems",
                    "Expand school water programs"
                ]
            }
        },
        {
            id: 4,
            title: "Women's Empowerment",
            category: "development",
            icon: "👩‍💼",
            description: "Providing vocational training, microfinance loans, and leadership programs to help women achieve economic independence.",
            stats: {
                beneficiaries: 7500,
                locations: 18,
                successRate: 87
            },
            details: {
                overview: "Our Women's Empowerment program creates opportunities through skills training, financial literacy, and small business support.",
                achievements: [
                    "Trained 3,000 women in vocational skills",
                    "Provided 1,200 microloans",
                    "Established 50 women's cooperatives",
                    "Increased household incomes by 40%"
                ],
                goals: [
                    "Expand to 5 new regions",
                    "Launch digital skills training",
                    "Create mentorship networks"
                ]
            }
        },
        {
            id: 5,
            title: "Digital Literacy Program",
            category: "education",
            icon: "💻",
            description: "Teaching essential computer skills to youth and adults to improve employment opportunities in the digital economy.",
            stats: {
                beneficiaries: 9200,
                locations: 22,
                successRate: 91
            },
            details: {
                overview: "The Digital Literacy Program bridges the technology gap by providing hands-on training in computer basics, internet skills, and office software.",
                achievements: [
                    "Established 30 computer labs",
                    "Trained 200 local instructors",
                    "85% of graduates found better jobs",
                    "Partnered with 50 local businesses"
                ],
                goals: [
                    "Introduce coding bootcamps",
                    "Expand to rural areas",
                    "Provide 1,000 laptops annually"
                ]
            }
        },
        {
            id: 6,
            title: "Disaster Relief Network",
            category: "healthcare",
            icon: "🆘",
            description: "Rapid response teams providing emergency aid, shelter, and recovery support in disaster-affected areas.",
            stats: {
                beneficiaries: 35000,
                locations: 15,
                successRate: 90
            },
            details: {
                overview: "Our Disaster Relief Network mobilizes quickly to provide life-saving assistance and long-term recovery support after natural disasters.",
                achievements: [
                    "Responded to 25 major disasters",
                    "Distributed 50,000 emergency kits",
                    "Rebuilt 500 homes",
                    "Trained 1,000 first responders"
                ],
                goals: [
                    "Establish regional response centers",
                    "Improve early warning systems",
                    "Expand community preparedness programs"
                ]
            }
        }
    ];

    // JSON data for live updates
    const liveUpdatesData = [
        {
            title: "Kenya School Construction",
            location: "Nairobi, Kenya",
            status: "In Progress",
            progress: 75,
            update: "Phase 2 construction completed, finalizing interior work and playground installation."
        },
        {
            title: "Guatemala Medical Mission",
            location: "Quetzaltenango, Guatemala",
            status: "Active",
            progress: 100,
            update: "Completed 2-week mission, treated 1,200 patients, follow-up care scheduled."
        },
        {
            title: "Bangladesh Water Project",
            location: "Cox's Bazar, Bangladesh",
            status: "Completed",
            progress: 100,
            update: "20 new wells installed, serving 5,000 Rohingya refugees with clean water."
        },
        {
            title: "India Digital Literacy",
            location: "Hyderabad, India",
            status: "Active",
            progress: 60,
            update: "Trained 300 students, computer lab expansion underway."
        },
        {
            title: "Haiti Disaster Recovery",
            location: "Port-au-Prince, Haiti",
            status: "Planning",
            progress: 25,
            update: "Assessing damage from recent hurricane, mobilizing response team."
        },
        {
            title: "Senegal Women's Program",
            location: "Dakar, Senegal",
            status: "Active",
            progress: 80,
            update: "150 women enrolled in business training, first cohort graduating next month."
        }
    ];

    // Main App Class
    class ProgramsPage {
        constructor() {
            this.programsGrid = document.getElementById('programsGrid');
            this.dataGrid = document.getElementById('dataGrid');
            this.loadingElement = document.getElementById('loading');
            this.filterButtons = document.querySelectorAll('.filter-btn');
            this.searchBox = document.getElementById('searchBox');
            this.programModal = document.getElementById('programModal');
            this.registrationModal = document.getElementById('registrationModal');
            this.modalTitle = document.getElementById('modalTitle');
            this.modalBody = document.getElementById('modalBody');
            this.registerBtn = document.getElementById('registerBtn');
            this.activeFilter = 'all';
            this.searchTerm = '';
            
            this.init();
        }

        init() {
            this.renderPrograms();
            this.renderLiveUpdates();
            this.setupEventListeners();
            this.animateImpactNumbers();
        }

        renderPrograms() {
            this.programsGrid.innerHTML = '';
            
            const filteredPrograms = programsData.filter(program => {
                const matchesFilter = this.activeFilter === 'all' || program.category === this.activeFilter;
                const matchesSearch = program.title.toLowerCase().includes(this.searchTerm) || 
                                     program.description.toLowerCase().includes(this.searchTerm);
                return matchesFilter && matchesSearch;
            });

            if (filteredPrograms.length === 0) {
                this.programsGrid.innerHTML = '<p class="no-results">No programs match your search criteria.</p>';
                return;
            }

            filteredPrograms.forEach(program => {
                const programCard = document.createElement('div');
                programCard.className = 'program-card';
                programCard.dataset.id = program.id;
                programCard.dataset.category = program.category;
                
                programCard.innerHTML = `
                    <div class="program-header">
                        ${program.icon}
                    </div>
                    <div class="program-content">
                        <span class="program-category">${this.formatCategory(program.category)}</span>
                        <h3 class="program-title">${program.title}</h3>
                        <p class="program-description">${program.description}</p>
                        <div class="program-stats">
                            <div class="stat-item">
                                <div class="stat-number">${program.stats.beneficiaries.toLocaleString()}</div>
                                <div class="stat-label">Beneficiaries</div>
                            </div>
                            <div class="stat-item">
                                <div class="stat-number">${program.stats.locations}</div>
                                <div class="stat-label">Locations</div>
                            </div>
                        </div>
                        <div class="program-actions">
                            <button class="btn btn-secondary learn-more-btn">Learn More</button>
                            <button class="btn btn-primary support-btn">Support</button>
                        </div>
                    </div>
                `;
                
                this.programsGrid.appendChild(programCard);
            });
        }

        renderLiveUpdates() {
            this.loadingElement.style.display = 'none';
            this.dataGrid.innerHTML = '';
            
            liveUpdatesData.forEach(update => {
                const dataItem = document.createElement('div');
                dataItem.className = 'data-item';
                
                // Determine status color
                let statusColor = '';
                if (update.status === 'Completed') statusColor = 'var(--success-color)';
                else if (update.status === 'In Progress') statusColor = 'var(--accent-color)';
                else statusColor = 'var(--info-color)';
                
                dataItem.innerHTML = `
                    <h3>${update.title}</h3>
                    <p><strong>Location:</strong> ${update.location}</p>
                    <p><strong>Status:</strong> <span style="color: ${statusColor}">${update.status}</span></p>
                    <div style="margin: 10px 0; background: #eee; height: 10px; border-radius: 5px;">
                        <div style="width: ${update.progress}%; background: var(--primary-color); height: 100%; border-radius: 5px;"></div>
                    </div>
                    <p><strong>Latest Update:</strong> ${update.update}</p>
                `;
                
                this.dataGrid.appendChild(dataItem);
            });
        }

        showProgramDetails(programId) {
            const program = programsData.find(p => p.id === programId);
            if (!program) return;
            
            this.modalTitle.textContent = program.title;
            
            let detailsHTML = `
                <div class="program-detail">
                    <h3>Overview</h3>
                    <p>${program.details.overview}</p>
                </div>
                
                <div class="program-detail">
                    <h3>Key Achievements</h3>
                    <ul>
                        ${program.details.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="program-detail">
                    <h3>Future Goals</h3>
                    <ul>
                        ${program.details.goals.map(goal => `<li>${goal}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="program-stats" style="margin-top: 2rem;">
                    <div class="stat-item">
                        <div class="stat-number">${program.stats.beneficiaries.toLocaleString()}</div>
                        <div class="stat-label">Beneficiaries</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">${program.stats.locations}</div>
                        <div class="stat-label">Locations</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">${program.stats.successRate}%</div>
                        <div class="stat-label">Success Rate</div>
                    </div>
                </div>
                
                <button class="btn btn-primary" style="width: 100%; margin-top: 2rem;" id="volunteerBtn">
                    Volunteer for This Program
                </button>
            `;
            
            this.modalBody.innerHTML = detailsHTML;
            this.showModal(this.programModal);
            
            // Add event listener to the new volunteer button
            document.getElementById('volunteerBtn')?.addEventListener('click', () => {
                this.hideModal(this.programModal);
                this.showModal(this.registrationModal);
            });
        }

        setupEventListeners() {
            // Filter buttons
            this.filterButtons.forEach(button => {
                button.addEventListener('click', () => {
                    this.filterButtons.forEach(btn => btn.classList.remove('active'));
                    button.classList.add('active');
                    this.activeFilter = button.dataset.filter;
                    this.renderPrograms();
                });
            });
            
            // Search box
            this.searchBox.addEventListener('input', (e) => {
                this.searchTerm = e.target.value.toLowerCase();
                this.renderPrograms();
            });
            
            // Program cards (using event delegation)
            this.programsGrid.addEventListener('click', (e) => {
                const programCard = e.target.closest('.program-card');
                if (!programCard) return;
                
                if (e.target.classList.contains('learn-more-btn')) {
                    const programId = parseInt(programCard.dataset.id);
                    this.showProgramDetails(programId);
                } else if (e.target.classList.contains('support-btn')) {
                    this.showModal(this.registrationModal);
                }
            });
            
            // Modal close buttons
            document.querySelectorAll('.modal .close').forEach(closeBtn => {
                closeBtn.addEventListener('click', () => {
                    this.hideModal(closeBtn.closest('.modal'));
                });
            });
            
            // Close modal when clicking outside
            window.addEventListener('click', (e) => {
                if (e.target.classList.contains('modal')) {
                    this.hideModal(e.target);
                }
            });
            
            // Registration form submission
            document.getElementById('registrationForm')?.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleFormSubmission(e.target);
            });
            
            // Mobile menu toggle
            document.getElementById('hamburger')?.addEventListener('click', () => {
                document.querySelector('.nav-links').classList.toggle('active');
            });
        }

        animateImpactNumbers() {
            const impactNumbers = document.querySelectorAll('.impact-number');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const target = parseInt(entry.target.dataset.target);
                        this.animateNumber(entry.target, target);
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });

            impactNumbers.forEach(number => observer.observe(number));
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

        showModal(modal) {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }

        hideModal(modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }

        handleFormSubmission(form) {
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            // Show loading state
            submitBtn.textContent = 'Processing...';
            submitBtn.disabled = true;
            
            // Simulate form submission
            setTimeout(() => {
                // In a real app, you would send the form data to a server here
                const formData = new FormData(form);
                const formValues = {};
                formData.forEach((value, key) => {
                    formValues[key] = value;
                });
                
                console.log('Form submitted:', formValues);
                
                // Show success message
                this.showToast('Thank you for registering! We will contact you soon.');
                
                // Reset form and close modal
                form.reset();
                this.hideModal(this.registrationModal);
                
                // Restore button
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1500);
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

        formatCategory(category) {
            return category.charAt(0).toUpperCase() + category.slice(1);
        }
    }

    // Initialize the page when DOM is loaded
    document.addEventListener('DOMContentLoaded', () => {
        new ProgramsPage();
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
            document.querySelectorAll('.impact-number').forEach(function(number) {
                const rect = number.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom >= 0) {
                    const target = parseInt(number.dataset.target);
                    if (!number.animated) {
                        number.animated = true;
                        animateNumberFallback(number, target);
                    }
                }
            });
        }

        window.addEventListener('scroll', checkVisibility);
        window.addEventListener('load', checkVisibility);
    }