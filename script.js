// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // RSVP Form handling
    // const rsvpForm = document.querySelector('.rsvp-form');
    // if (rsvpForm) {
    //     rsvpForm.addEventListener('submit', function(e) {
    //         e.preventDefault();
    //         // ...rest of code
    //     });
    // }

    // Add scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.detail-card, .highlight, .about-text, .rsvp-content');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add typing effect to the main title
    const cyberText = document.querySelector('.cyber-text');
    if (cyberText) {
        const text = cyberText.textContent;
        cyberText.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                cyberText.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        // Start typing effect after a delay
        setTimeout(typeWriter, 1000);
    }

    // Add particle effect to the hero section
    createParticles();

    // Add glitch effect to the security text
    const securityText = document.querySelector('.security-text');
    if (securityText) {
        setInterval(() => {
            if (Math.random() < 0.1) {
                securityText.style.textShadow = '2px 0 #ff0000, -2px 0 #00ff00';
                setTimeout(() => {
                    securityText.style.textShadow = '0 0 20px rgba(0, 255, 136, 0.5)';
                }, 100);
            }
        }, 2000);
    }
});

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#00ff88' : type === 'error' ? '#ff4444' : '#00d4ff'};
        color: #000;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
        z-index: 1000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Particle effect for hero section
function createParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: #00ff88;
            border-radius: 50%;
            pointer-events: none;
            opacity: 0.6;
            animation: float 6s ease-in-out infinite;
            animation-delay: ${Math.random() * 6}s;
        `;
        
        // Random position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        hero.appendChild(particle);
    }
}

// Add floating animation
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.6;
        }
        50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// Add hover effects to detail cards
document.addEventListener('DOMContentLoaded', function() {
    const detailCards = document.querySelectorAll('.detail-card');
    
    detailCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Add countdown timer (optional)
function createCountdown() {
    const targetDate = new Date('2025-07-04T09:00:00').getTime();
    
    const countdownElement = document.createElement('div');
    countdownElement.className = 'countdown';
    countdownElement.innerHTML = `
        <div class="countdown-item">
            <span class="countdown-number" id="days">00</span>
            <span class="countdown-label">Days</span>
        </div>
        <div class="countdown-item">
            <span class="countdown-number" id="hours">00</span>
            <span class="countdown-label">Hours</span>
        </div>
        <div class="countdown-item">
            <span class="countdown-number" id="minutes">00</span>
            <span class="countdown-label">Minutes</span>
        </div>
        <div class="countdown-item">
            <span class="countdown-number" id="seconds">00</span>
            <span class="countdown-label">Seconds</span>
        </div>
    `;
    
    // Add countdown styles
    const countdownStyle = document.createElement('style');
    countdownStyle.textContent = `
        .countdown {
            display: flex;
            justify-content: center;
            gap: 2rem;
            margin: 2rem 0;
        }
        .countdown-item {
            text-align: center;
        }
        .countdown-number {
            display: block;
            font-family: 'Orbitron', monospace;
            font-size: 2rem;
            font-weight: 700;
            color: #00ff88;
        }
        .countdown-label {
            font-size: 0.9rem;
            color: #888;
            text-transform: uppercase;
        }
    `;
    document.head.appendChild(countdownStyle);
    
    // Insert countdown before the details section
    const detailsSection = document.querySelector('#details');
    if (detailsSection) {
        detailsSection.parentNode.insertBefore(countdownElement, detailsSection);
    }
    
    // Update countdown
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Initialize countdown when page loads
document.addEventListener('DOMContentLoaded', createCountdown); 