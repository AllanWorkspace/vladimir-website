// Navigation configuration
const navigationLinks = [
    { text: 'Home', url: 'index.html' },
    { text: 'Portfolio', url: 'portfolio.html' },
    { text: 'Contact', url: 'contact.html' },
];

// Function to determine if we're in a subdirectory
function isInSubdirectory() {
    return window.location.pathname.includes('/portfolio/');
}

// Function to get the correct path prefix
function getPathPrefix() {
    return isInSubdirectory() ? '../' : '';
}

// Function to generate navigation
function generateNavigation() {
    const nav = document.querySelector('.navbar');
    const ul = document.createElement('ul');
    const prefix = getPathPrefix();
    
    navigationLinks.forEach(link => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = prefix + link.url;
        a.textContent = link.text;
        li.appendChild(a);
        ul.appendChild(li);
    });
    
    nav.appendChild(ul);
}

// Initialize navigation when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    generateNavigation();
});
