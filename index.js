document.addEventListener('DOMContentLoaded', function() {
    const featuredProjectsContainer = document.getElementById('featured-projects');
    
    // Display loading indicator
    featuredProjectsContainer.innerHTML = '<div class="loading">Loading featured projects...</div>';
    
    // Wait for CSV data to load, then initialize the page
    loadProjectsFromCSV().then(projects => {
        // Filter featured projects (e.g., based on a specific criterion)
        const featuredProjects = projects.filter(project => project.is_featured);
        
        // Clear loading indicator
        featuredProjectsContainer.innerHTML = '';
        
        // Render featured projects
        renderFeaturedProjects(featuredProjects);
    }).catch(error => {
        console.error('Failed to load featured projects:', error);
        featuredProjectsContainer.innerHTML = `
            <div class="error-message">
                <h3>Failed to load featured projects</h3>
                <p>${error.message}</p>
                <p>Please check the browser console for more details.</p>
            </div>`;
    });
    
    // Render function for featured projects
    function renderFeaturedProjects(projects) {
        console.log(`Rendering ${projects.length} featured projects`);
        
        projects.forEach(project => {
            const card = document.createElement('div');
            card.className = 'featured-project-card';
            
            const status = project.status || 'Unknown';
            const statusClass = getStatusClass(status);
            
            card.innerHTML = `
                <div class="project-header">
                    <h3>${project.project_name || 'Unnamed Project'}</h3>
                    <span class="project-status ${statusClass}">${status}</span>
                </div>
                <div class="project-content">
                    <p class="project-category">${project.type_main_category || 'Unknown Category'} - ${project.type_sub_category || 'Unknown Type'}</p>
                    <p class="project-location">${project.Province || 'Location not specified'}</p>
                    ${project.physical_progress_percent ? `
                    <div class="progress-bar">
                        <div class="progress" style="width: ${project.physical_progress_percent}%"></div>
                        <span>${project.physical_progress_percent}% complete</span>
                    </div>` : ''}
                </div>
                <div class="project-footer">
                    <a href="project-detail.html?id=${project.project_id}" class="btn btn-outline">View Details</a>
                </div>
            `;
            
            featuredProjectsContainer.appendChild(card);
        });
        
        // Log completion
        console.log('Rendering complete');
    }
    
    // Get status class
    function getStatusClass(status) {
        status = status.toLowerCase();
        if (status.includes('complete') || status.includes('operational')) return 'status-complete';
        if (status.includes('ongoing')) return 'status-ongoing';
        if (status.includes('planning')) return 'status-planning';
        if (status.includes('halt')) return 'status-halted';
        return 'status-unknown';
    }

    // Add this to your existing script section or create a new one
    document.addEventListener('DOMContentLoaded', function() {
    // Animation for foundation phase cards
    const foundationCards = document.querySelectorAll('#foundation .day-card');
    
    // Create staggered animation effect
    foundationCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('animate');
        }, 100 * index);
    });
    
    // Add click event to expand/collapse card content
    foundationCards.forEach(card => {
        card.addEventListener('click', function() {
            // Toggle expanded class
            this.classList.toggle('expanded');
            
            // Find content element
            const content = this.querySelector('.day-content');
            
            // Toggle max-height for animation
            if (this.classList.contains('expanded')) {
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                content.style.maxHeight = null;
            }
        });
    });
    
    // Add search functionality for foundation days
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search days by topic or keyword...';
    searchInput.className = 'search-input';
    searchInput.style.width = '100%';
    searchInput.style.padding = '0.75rem';
    searchInput.style.marginBottom = '1.5rem';
    searchInput.style.borderRadius = 'var(--btn-radius)';
    searchInput.style.border = '1px solid var(--border)';
    searchInput.style.backgroundColor = 'var(--bg-secondary)';
    searchInput.style.color = 'var(--text-primary)';
    
    // Insert search before the timeline
    const foundationContent = document.querySelector('#foundation');
    foundationContent.insertBefore(searchInput, foundationContent.firstChild);
    
    // Search functionality
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        
        foundationCards.forEach(card => {
            const cardText = card.textContent.toLowerCase();
            if (cardText.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });

    document.addEventListener('DOMContentLoaded', function() {
        // Get all foundation cards
        const foundationCards = document.querySelectorAll('#foundation .day-card');
        
        // Create staggered animation effect
        foundationCards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('animate');
            }, 100 * index);
        });
        
        // Add click event for card flip effect
        foundationCards.forEach(card => {
            card.addEventListener('click', function(e) {
                // Check if any card is already flipped
                const flippedCard = document.querySelector('#foundation .day-card.flipped');
                
                // Toggle flipped state for this card
                if (this.classList.contains('flipped')) {
                    this.classList.remove('flipped');
                    
                    // Restore all cards
                    foundationCards.forEach(otherCard => {
                        otherCard.classList.remove('faded');
                    });
                } else {
                    // If another card is flipped, un-flip it first
                    if (flippedCard) {
                        flippedCard.classList.remove('flipped');
                    }
                    
                    // Flip this card
                    this.classList.add('flipped');
                    
                    // Ensure the flipped card is visible
                    this.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    
                    // Fade other cards
                    foundationCards.forEach(otherCard => {
                        if (otherCard !== this) {
                            otherCard.classList.add('faded');
                        }
                    });
                }
                
                // Prevent event propagation if clicking inside the card
                e.stopPropagation();
            });
        });
        
        // Add search functionality (unchanged)
        const searchInput = document.createElement('input');
        searchInput.type = 'text';
        searchInput.placeholder = 'Search days by topic or keyword...';
        searchInput.className = 'search-input';
        searchInput.style.width = '100%';
        searchInput.style.padding = '0.75rem';
        searchInput.style.marginBottom = '1.5rem';
        searchInput.style.borderRadius = 'var(--btn-radius)';
        searchInput.style.border = '1px solid var(--border)';
        searchInput.style.backgroundColor = 'var(--bg-secondary)';
        searchInput.style.color = 'var(--text-primary)';
        
        // Insert search before the timeline
        const foundationContent = document.querySelector('#foundation');
        foundationContent.insertBefore(searchInput, foundationContent.firstChild);
        
        // Search functionality
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            
            foundationCards.forEach(card => {
                const cardText = card.textContent.toLowerCase();
                if (cardText.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
        
        // Close flipped card when clicking outside
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.day-card')) {
                const flippedCard = document.querySelector('#foundation .day-card.flipped');
                if (flippedCard) {
                    flippedCard.classList.remove('flipped');
                    foundationCards.forEach(card => {
                        card.classList.remove('faded');
                    });
                }
            }
        });
    });
    
});




});