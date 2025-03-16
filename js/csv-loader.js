/**
 * CSV Loader for Nepal Infrastructure Projects
 * Handles loading and parsing the projects CSV file
 */

// Adjust the path to be relative to the root of the website
const CSV_FILE_PATH = './data/nepal_projects.csv';

// Function to load the CSV file and parse it
async function loadProjectsFromCSV() {
    try {
        console.log('Attempting to load CSV from:', CSV_FILE_PATH);
        const response = await fetch(CSV_FILE_PATH);
        if (!response.ok) {
            // Check if we're accessing via file:// protocol
            if (window.location.protocol === 'file:') {
                throw new Error('Cannot load CSV when accessing via file:// protocol. Please use a web server.');
            }
            throw new Error(`Failed to load CSV file (${response.status} ${response.statusText})`);
        }
        
        const csvText = await response.text();
        return parseCSV(csvText);
    } catch (error) {
        console.error('Error loading CSV:', error);
        // Provide more specific error details for debugging
        if (error.name === 'TypeError' && error.message.includes('Failed to fetch')) {
            if (window.location.protocol === 'file:') {
                throw new Error('Cannot load CSV via file:// protocol. Please use a web server (see HOW_TO_RUN.md).');
            }
            throw new Error('Failed to fetch the CSV file. If running locally, please use a web server.');
        }
        throw error;
    }
}

// Parse CSV text into an array of objects
function parseCSV(csvText) {
    // Split by lines and remove the first line (header)
    const lines = csvText.split('\n').filter(line => line.trim() !== '');
    const headers = lines[0].split(',');
    
    // Remove any filepath comment from the first header if present
    if (headers[0].includes('//')) {
        headers[0] = headers[0].split('//')[1].trim();
    }
    
    const projects = [];
    
    // Start from line 1 to skip header
    for (let i = 1; i < lines.length; i++) {
        // Handle commas inside quotes
        const values = parseCSVLine(lines[i]);
        
        if (values.length === headers.length) {
            const project = {};
            headers.forEach((header, index) => {
                // Replace "NULL" strings with null values
                project[header] = values[index] === 'NULL' ? null : values[index];
            });
            projects.push(project);
        }
    }
    
    return projects;
}

// Function to handle parsing a CSV line with potential quoted values
function parseCSVLine(line) {
    const values = [];
    let inQuote = false;
    let currentValue = '';
    
    for (let i = 0; i < line.length; i++) {
        const char = line[i];
        
        if (char === '"') {
            inQuote = !inQuote;
        } else if (char === ',' && !inQuote) {
            values.push(currentValue);
            currentValue = '';
        } else {
            currentValue += char;
        }
    }
    
    // Add the last value
    values.push(currentValue);
    return values;
}

// Function to get a specific project by ID
async function getProjectDetailsFromCSV(projectId) {
    const projects = await loadProjectsFromCSV();
    return projects.find(project => 
        project.project_id === projectId || 
        project.short_name === projectId
    );
}

// Helper function to format dates
function formatDate(dateString) {
    if (!dateString) return '';
    
    const parts = dateString.split('/');
    if (parts.length === 3) {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                        'July', 'August', 'September', 'October', 'November', 'December'];
        return `${months[parseInt(parts[0])-1]} ${parts[1]}, ${parts[2]}`;
    }
    return dateString;
}

// Start loading the CSV file as soon as possible
document.addEventListener('DOMContentLoaded', function() {
    fetch('./data/nepal_projects.csv')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            const projects = parseCSV(data);
            displayProjects(projects);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});

function displayProjects(projects) {
    const projectsTable = document.getElementById('projects-table');
    const tileGrid = document.getElementById('tile-grid');
    projectsTable.innerHTML = '';
    tileGrid.innerHTML = '';

    projects.forEach(project => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${project['Project Name']}</td>
            <td>${project['Type']}</td>
            <td>${project['Sub-Type']}</td>
            <td>${project['Province']}</td>
            <td>${project['Status']}</td>
            <td><a href="${project['Detail Page']}" class="btn btn-small">View</a></td>
        `;
        projectsTable.appendChild(row);

        const tile = document.createElement('div');
        tile.className = 'project-tile';
        tile.innerHTML = `
            <h3>${project['Project Name']}</h3>
            <p><strong>Type:</strong> ${project['Type']}</p>
            <p><strong>Location:</strong> ${project['Province']}</p>
            <p><strong>Status:</strong> ${project['Status']}</p>
            <a href="${project['Detail Page']}" class="btn btn-small">View Details</a>
        `;
        tileGrid.appendChild(tile);
    });
}
