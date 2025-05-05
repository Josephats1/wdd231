document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const courseCards = document.querySelectorAll('.course-card');
    const creditTotal = document.getElementById('credit-total');
    
    // Initial setup
    updateCreditTotal();
    
    // Filter button functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const filter = button.dataset.filter;
            filterCourses(filter);
            updateCreditTotal(filter);
        });
    });
    
    function filterCourses(filter) {
        courseCards.forEach(card => {
            const courseType = card.dataset.course.substring(0, 3);
            
            if (filter === 'all' || courseType === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
    
    function updateCreditTotal(filter = 'all') {
        const visibleCards = Array.from(courseCards).filter(card => {
            if (filter === 'all') return true;
            const courseType = card.dataset.course.substring(0, 3);
            return courseType === filter;
        });
        
        const total = visibleCards.reduce((sum, card) => {
            const creditsText = card.querySelector('.credits').textContent;
            const credits = parseInt(creditsText);
            return sum + credits;
        }, 0);
        
        creditTotal.textContent = total;
    }
});