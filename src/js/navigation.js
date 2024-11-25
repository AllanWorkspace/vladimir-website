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
    const navContent = document.createElement('div');
    navContent.className = 'nav-content';
    
    // Create navigation links
    const navLinks = document.createElement('div');
    navLinks.className = 'nav-links';
    const prefix = getPathPrefix();
    
    navigationLinks.forEach(link => {
        const a = document.createElement('a');
        a.href = prefix + link.url;
        a.textContent = link.text;
        navLinks.appendChild(a);
    });
    
    // Create mobile menu button
    const mobileBtn = document.createElement('button');
    mobileBtn.className = 'mobile-menu-btn';
    mobileBtn.innerHTML = '<i class="fas fa-bars"></i>';
    
    // Add event listener for mobile menu
    mobileBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        this.classList.toggle('active');
    });
    
    // Assemble the navigation
    navContent.appendChild(navLinks);
    navContent.appendChild(mobileBtn);
    nav.appendChild(navContent);
}

// Initialize navigation when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    generateNavigation();
});
