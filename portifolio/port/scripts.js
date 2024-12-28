// Burger Menu Toggle
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    // Burger Animation
    burger.classList.toggle('toggle');
});

// Smooth Scrolling for Anchor Links
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Contact Form Validation
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Simulate form submission
    alert('Thank you for your message!');
    contactForm.reset();
});

// Dynamic Skill Bars Animation
window.addEventListener('scroll', () => {
    const skillBars = document.querySelectorAll('.skill-bar .progress');
    const windowHeight = window.innerHeight;
    skillBars.forEach(bar => {
        const barPosition = bar.getBoundingClientRect().top;
        if (barPosition < windowHeight - 100) {
            bar.style.width = bar.dataset.width || '0%';
        }
    });
});

const textLines = [
    "I am Abdul Kareem. A student at MUBA. I am passionate about learning new skills, one of them being web development.",
    "My dream is to participate in a world-known project that will help change the world as a whole or part of it!",
    "I am open to joining teams that will help me grow. Feel free to invite me to your teams where I can collaborate with you."
];

const typingEffectElement = document.getElementById("typing-effect");
let lineIndex = 0;
let charIndex = 0;

function typeText() {
    if (lineIndex < textLines.length) {
        if (charIndex < textLines[lineIndex].length) {
            if (!typingEffectElement.lastChild || typingEffectElement.lastChild.textContent === textLines[lineIndex - 1]) {
                const li = document.createElement("li");
                li.classList.add("typing");
                typingEffectElement.appendChild(li);
            }

            const currentLine = typingEffectElement.lastChild;
            currentLine.textContent += textLines[lineIndex][charIndex];
            charIndex++;
            setTimeout(typeText, 100);
            
        } else {
            charIndex = 0;
            typingEffectElement.lastChild.classList.remove("typing");
            lineIndex++;
            setTimeout(typeText, 500); // Pause before next line
        }
    }
}

window.onload = typeText;
