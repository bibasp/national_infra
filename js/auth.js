/**
 * Simple client-side authentication system
 * NOTE: This is for demonstration purposes only and is not secure for production use
 */

// Demo credentials - in a real application, these would be stored on a server
const VALID_CREDENTIALS = {
    'admin': 'admin123',
    'user': 'user123'
};

// Auth-related DOM elements
const loginForm = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');
const logoutButton = document.getElementById('logout-button');

// Check if user is logged in
function isLoggedIn() {
    return localStorage.getItem('isLoggedIn') === 'true';
}

// Get current username
function getCurrentUser() {
    return localStorage.getItem('currentUser') || '';
}

// Handle login
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Validate credentials
        if (VALID_CREDENTIALS[username] && VALID_CREDENTIALS[username] === password) {
            // Successful login
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('currentUser', username);
            
            // Redirect to home page or previous page
            window.location.href = 'index.html';
        } else {
            // Show error
            if (errorMessage) {
                errorMessage.style.display = 'block';
            }
        }
    });
}

// Handle logout
if (logoutButton) {
    logoutButton.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Clear auth data
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('currentUser');
        
        // Redirect to login page
        window.location.href = 'login.html';
    });
}

// Check authentication status on protected pages
document.addEventListener('DOMContentLoaded', function() {
    // Skip auth check on login page
    if (window.location.pathname.includes('login.html')) {
        return;
    }
    
    // Update header based on auth status
    updateHeader();
    
    // Redirect to login if accessing protected pages while not logged in
    const isProtectedPage = !window.location.pathname.includes('index.html') && 
                           !window.location.pathname.endsWith('/') &&
                           !window.location.pathname.endsWith('/Sample website/');
    
    if (isProtectedPage && !isLoggedIn()) {
        window.location.href = 'login.html';
    }
});

// Update header to show logout button if logged in
function updateHeader() {
    const header = document.querySelector('header nav ul');
    
    if (!header) return;
    
    if (isLoggedIn()) {
        // If user is logged in, add a welcome message and logout button
        const username = getCurrentUser();
        
        // Check if logout button already exists
        if (!document.getElementById('logout-button')) {
            const logoutLi = document.createElement('li');
            logoutLi.className = 'user-controls';
            logoutLi.innerHTML = `
                <span class="username">Welcome, ${username}</span>
                <button id="logout-button" class="logout-btn">Logout</button>
            `;
            header.appendChild(logoutLi);
            
            // Add event listener to the newly created button
            document.getElementById('logout-button').addEventListener('click', function() {
                localStorage.removeItem('isLoggedIn');
                localStorage.removeItem('currentUser');
                window.location.href = 'login.html';
            });
        }
    } else {
        // If not logged in, ensure there's a login link
        const loginLi = Array.from(header.children).find(li => 
            li.querySelector('a') && li.querySelector('a').href.includes('login.html')
        );
        
        if (!loginLi) {
            const newLoginLi = document.createElement('li');
            newLoginLi.innerHTML = '<a href="login.html">Login</a>';
            header.appendChild(newLoginLi);
        }
    }
}
