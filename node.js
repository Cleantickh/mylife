// JavaScript File: script.js

// Typewriter effect for name
document.addEventListener('DOMContentLoaded', function() {
    // Typewriter animation
    const text = "Clinton Mmbohere";
    const typewriter = document.getElementById('typewriter');
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            typewriter.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 150);
        } else {
            // Add blinking cursor after typing is complete
            document.querySelector('.cursor').style.animation = 'blink 1s infinite';
        }
    }
    
    // Start typing after a short delay
    setTimeout(typeWriter, 500);
    
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));
    
    // Form submission to WhatsApp
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const service = contactForm.querySelector('select').value;
        const message = contactForm.querySelector('textarea').value;
        
        // Create WhatsApp message
        const whatsappMessage = `Hello Clinton!%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Service Interested In:* ${service}%0A*Message:* ${message}%0A%0AI'm interested in working with you. Please get back to me as soon as possible.`;
        
        // Redirect to WhatsApp
        window.open(`https://wa.me/254713406694?text=${whatsappMessage}`, '_blank');
        
        // Reset form
        contactForm.reset();
    });
    
    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);
    
    // Observe elements to animate
    document.querySelectorAll('.service-card, .package-card, .about-stats, .skill-level').forEach(el => {
        observer.observe(el);
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.padding = '15px 0';
            navbar.style.backgroundColor = 'rgba(5, 5, 5, 0.98)';
        } else {
            navbar.style.padding = '20px 0';
            navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
        }
    });
    
    // Skill bars animation on scroll
    const skillBars = document.querySelectorAll('.skill-level');
    
    function animateSkillBars() {
        skillBars.forEach(skillBar => {
            const width = skillBar.style.width;
            skillBar.style.width = '0';
            
            setTimeout(() => {
                skillBar.style.width = width;
            }, 300);
        });
    }
    
    // Check if skill bars are in viewport
    const skillSection = document.querySelector('.skills');
    
    function checkSkillSection() {
        const rect = skillSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            animateSkillBars();
            window.removeEventListener('scroll', checkSkillSection);
        }
    }
    
    window.addEventListener('scroll', checkSkillSection);
    // Initial check in case skills section is already in view
    checkSkillSection();
});