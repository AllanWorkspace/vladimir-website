// Navigation configuration
const navigationLinks = [
    { text: 'Home', url: '../../pages/core/index.html' },
    { text: 'Portfolio', url: '../../pages/core/portfolio.html' },
    { text: 'Contact', url: '../../pages/core/contact.html' },
];

// Function to generate navigation
function generateNavigation() {
    const nav = document.querySelector('.navbar');
    const ul = document.createElement('ul');
    
    navigationLinks.forEach(link => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = link.url;
        a.textContent = link.text;
        li.appendChild(a);
        ul.appendChild(li);
    });
    
    nav.appendChild(ul);
}

// Initialize navigation when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    
    const navigationHTML = `
        <div class="nav-content">
            <a href="../../pages/core/index.html" class="nav-logo">Vladimir</a>
            <div class="nav-links">
                <a href="../../pages/core/index.html">Home</a>
                <a href="../../pages/core/portfolio.html">Portfolio</a>
                <a href="../../pages/core/contact.html">Contact</a>
            </div>
            <button class="mobile-menu-btn">
                <i class="fas fa-bars"></i>
            </button>
        </div>
    `;
    
    navbar.innerHTML = navigationHTML;

    // Mobile menu functionality
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});
