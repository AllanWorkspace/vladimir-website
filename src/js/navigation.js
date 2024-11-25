// Navigation configuration
const navigationLinks = [
    { text: 'Home', url: '/pages/core/index.html' },
    { text: 'Portfolio', url: '/pages/core/portfolio.html' },
    { text: 'Contact', url: '/pages/core/contact.html' },
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
document.addEventListener('DOMContentLoaded', generateNavigation);
