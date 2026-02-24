// Enhanced Portfolio JavaScript with Unique Effects

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animated counter for stats (if you want to add stats later)
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        element.textContent = Math.floor(start);
        
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        }
    }, 16);
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const geometricBg = document.querySelector('.geometric-bg');
    
    if (hero && geometricBg) {
        geometricBg.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Dynamic typing effect for hero text
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize typing effect when page loads
document.addEventListener('DOMContentLoaded', () => {
    const heroName = document.querySelector('.hero-name');
    if (heroName) {
        const originalText = heroName.textContent;
        typeWriter(heroName, originalText, 150);
    }
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe all cards and sections
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.experience-card, .project-card, .skill-category, .certification-card');
    animateElements.forEach(el => {
        el.classList.add('scroll-animate');
        observer.observe(el);
    });
});

// Enhanced cursor trail effect
let cursorTrail = [];
const trailLength = 10;

document.addEventListener('mousemove', (e) => {
    cursorTrail.push({ x: e.clientX, y: e.clientY });
    
    if (cursorTrail.length > trailLength) {
        cursorTrail.shift();
    }
    
    updateCursorTrail();
});

function updateCursorTrail() {
    const existingTrails = document.querySelectorAll('.cursor-trail');
    existingTrails.forEach(trail => trail.remove());
    
    cursorTrail.forEach((point, index) => {
        const trail = document.createElement('div');
        trail.className = 'cursor-trail';
        trail.style.left = point.x + 'px';
        trail.style.top = point.y + 'px';
        trail.style.opacity = (index + 1) / trailLength;
        trail.style.transform = `scale(${(index + 1) / trailLength})`;
        document.body.appendChild(trail);
        
        setTimeout(() => {
            if (trail.parentNode) {
                trail.parentNode.removeChild(trail);
            }
        }, 1000);
    });
}

// Magnetic hover effect for buttons
document.addEventListener('DOMContentLoaded', () => {
    const magneticElements = document.querySelectorAll('.magnetic-hover');
    
    magneticElements.forEach(element => {
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            element.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) scale(1.05)`;
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.transform = 'translate(0px, 0px) scale(1)';
        });
    });
});

// Particle system for background
function createParticles() {
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particles';
    document.body.appendChild(particleContainer);
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
        particleContainer.appendChild(particle);
    }
}

// Initialize particles
document.addEventListener('DOMContentLoaded', createParticles);

// Enhanced form submission with animation
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            
            // Animate button
            submitBtn.textContent = 'Sending...';
            submitBtn.style.background = 'var(--gradient-tertiary)';
            
            // Simulate form submission
            setTimeout(() => {
                submitBtn.textContent = 'Message Sent! ✓';
                submitBtn.style.background = 'var(--gradient-tertiary)';
                
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.style.background = 'var(--gradient-primary)';
                    contactForm.reset();
                }, 2000);
            }, 1500);
        });
    }
});

// Theme toggle functionality
let isDarkTheme = true;

function toggleTheme() {
    const body = document.body;
    
    if (isDarkTheme) {
        body.classList.add('theme-light');
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.remove('theme-light');
        localStorage.setItem('theme', 'dark');
    }
    
    isDarkTheme = !isDarkTheme;
}

// Load saved theme
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('theme-light');
        isDarkTheme = false;
    }
});

// Scroll to top functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show/hide scroll to top button and update progress bar
window.addEventListener('scroll', () => {
    const scrollBtn = document.querySelector('.fab-option[title="Back to Top"]');
    if (scrollBtn) {
        if (window.pageYOffset > 300) {
            scrollBtn.style.opacity = '1';
            scrollBtn.style.pointerEvents = 'auto';
        } else {
            scrollBtn.style.opacity = '0.5';
            scrollBtn.style.pointerEvents = 'none';
        }
    }
    
    // Update scroll progress bar
    const progressBar = document.querySelector('.scroll-progress');
    if (progressBar) {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    }
});

// Enhanced skill item interactions
document.addEventListener('DOMContentLoaded', () => {
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach(item => {
        item.addEventListener('click', () => {
            // Create a ripple effect
            const ripple = document.createElement('span');
            ripple.className = 'skill-ripple';
            item.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
});

// Add loading animation
window.addEventListener('load', () => {
    const loader = document.createElement('div');
    loader.className = 'page-loader';
    loader.innerHTML = `
        <div class="loader-content">
            <div class="loader-spinner"></div>
            <p>Loading Portfolio...</p>
        </div>
    `;
    
    document.body.appendChild(loader);
    
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.remove();
        }, 500);
    }, 1000);
});