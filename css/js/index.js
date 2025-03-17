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
});
