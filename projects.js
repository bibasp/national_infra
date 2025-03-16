document.addEventListener('DOMContentLoaded', function() {
    // Use the sample data from data.js
    const data = projectsData;
    const projectsContainer = document.getElementById('projects-container');
    const tileViewBtn = document.getElementById('tile-view');
    const tableViewBtn = document.getElementById('table-view');
    const tileGrid = document.getElementById('tile-grid');
    const tableContainer = document.getElementById('table-container');

    // Set tile view as default
    tileGrid.classList.add('active');

    // Toggle between tile and table views
    tileViewBtn.addEventListener('click', function() {
        if (!this.classList.contains('active')) {
            // Switch to tile view
            tileViewBtn.classList.add('active');
            tableViewBtn.classList.remove('active');
            tileGrid.classList.add('active');
            setTimeout(() => {
                tableContainer.classList.remove('active');
            }, 50);
        }
    });

    tableViewBtn.addEventListener('click', function() {
        if (!this.classList.contains('active')) {
            // Switch to table view
            tableViewBtn.classList.add('active');
            tileViewBtn.classList.remove('active');
            tableContainer.classList.add('active');
            setTimeout(() => {
                tileGrid.classList.remove('active');
            }, 50);
        }
    });

    // Function to create project tiles with hover effect
    function createProjectTile(project) {
        const tile = document.createElement('div');
        tile.className = 'project-tile';
        tile.innerHTML = `
            <h3>${project.project_name}</h3>
            <p><strong>Category:</strong> ${project.type_main_category} - ${project.type_sub_category}</p>
            <p><strong>Province:</strong> ${project.Province}</p>
            <p><strong>Status:</strong> ${project.status}</p>
            <p><strong>Progress:</strong> ${project.physical_progress_percent}%</p>
            <p><strong>Start Date:</strong> ${project.start_date}</p>
            <button class="btn btn-small" onclick="viewDetails('${project.project_id}')">View Details</button>
        `;
        return tile;
    }

    // Display projects as tiles
    tileGrid.innerHTML = '';
    data.forEach(project => {
        const tile = createProjectTile(project);
        tileGrid.appendChild(tile);
    });

    // Function to view project details
    window.viewDetails = function(projectId) {
        const project = data.find(p => p.project_id === projectId);
        if (project) {
            localStorage.setItem('projectDetails', JSON.stringify(project));
            window.location.href = 'project_details.html';
        }
    };
});
