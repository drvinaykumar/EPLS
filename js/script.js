// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active navigation highlighting
    const sections = document.querySelectorAll('section');
    const navMenuLinks = document.querySelectorAll('.nav-menu a');

    window.addEventListener('scroll', function() {
        let current = '';
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navMenuLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });

    // Form handling
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');

            // Simple validation
            if (!name || !email || !message) {
                alert('Please fill in all fields.');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            // Simulate form submission
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }

    // Add loading animation for course cards
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

    // Observe course cards and cert cards
    const cards = document.querySelectorAll('.course-card, .cert-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
});

// Course data for potential future use
const courseData = [
    {
        id: 1,
        title: "AI Foundations for Educational Innovation",
        description: "Foundational understanding of AI concepts and their transformative potential in educational contexts.",
        weeks: 8,
        credits: 3
    },
    {
        id: 2,
        title: "Developmental Psychology and Learning",
        description: "Explore fundamental theories and research in developmental psychology across the lifespan.",
        weeks: 8,
        credits: 3
    },
    {
        id: 3,
        title: "Learning in Context: Culture, Community, and Cognition",
        description: "Examine how cultural, social, and community contexts shape learning and cognitive processes.",
        weeks: 8,
        credits: 3
    },
    {
        id: 4,
        title: "Assessment and Measurement in Education",
        description: "Comprehensive understanding of educational assessment and measurement principles.",
        weeks: 8,
        credits: 3
    },
    {
        id: 5,
        title: "The Cognitive Science of Education",
        description: "Explore insights from psychology, neuroscience, linguistics, and computer science for education.",
        weeks: 8,
        credits: 3
    },
    {
        id: 6,
        title: "Educational Leadership and Change Management",
        description: "Develop skills for effective leadership and change management in educational organizations.",
        weeks: 8,
        credits: 3
    },
    {
        id: 7,
        title: "Strategic Planning and Innovation in Education",
        description: "Deep dive into strategic planning and fostering innovation within educational organizations.",
        weeks: 8,
        credits: 3
    },
    {
        id: 8,
        title: "EdTech Tools and Techniques",
        description: "Practical exploration of educational technology tools and techniques for enhanced learning.",
        weeks: 8,
        credits: 3
    }
];

// Utility functions
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add scroll to top functionality
window.addEventListener('scroll', function() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    if (scrollTop > 300) {
        if (!document.querySelector('.scroll-top')) {
            const scrollTopBtn = document.createElement('button');
            scrollTopBtn.classList.add('scroll-top');
            scrollTopBtn.innerHTML = '↑';
            scrollTopBtn.onclick = scrollToTop;
            document.body.appendChild(scrollTopBtn);
        }
    } else {
        const scrollTopBtn = document.querySelector('.scroll-top');
        if (scrollTopBtn) {
            scrollTopBtn.remove();
        }
    }
});