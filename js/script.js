document.addEventListener('DOMContentLoaded', () => {
    
    // --- HAMBURGER MENU LOGIC ---
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });
    document.querySelectorAll(".nav-menu a").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }));

    // --- SCROLL ANIMATION LOGIC ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.fade-in-section').forEach(section => observer.observe(section));
    
    // --- NAVBAR SCROLL LOGIC ---
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- NEW: AURORA CARD HOVER EFFECT LOGIC ---
    document.querySelectorAll('.skill-card, .project-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            card.style.setProperty('--x', `${e.clientX - rect.left}px`);
            card.style.setProperty('--y', `${e.clientY - rect.top}px`);
        });
    });

    // --- MODAL POP-UP LOGIC ---
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    const projectDetails = {
        project1: { title: "Student Complaints Management System", description: "A comprehensive web application designed to streamline the process of managing student complaints. The system allows students to submit grievances through a user-friendly portal, which are then routed to the appropriate administrative departments for timely resolution and tracking.", technologies: ["Java", "HTML", "CSS", "JavaScript", "MySQL"], githubLink: "https://github.com/account", liveLink: "#" },
        project2: { title: "Personal Portfolio Website", description: "The very website you are currently viewing. It is a fully responsive, single-page application built with modern web technologies to serve as a central hub for my projects, skills, and professional profile.", technologies: ["HTML5", "CSS3", "JavaScript"], githubLink: "https://github.com/account", liveLink: "#" },
        project3: { title: "TechCultivate (In Progress)", description: "An upcoming platform focused on connecting tech students with industry mentors. This project is currently in the development phase, utilizing the React framework to build a dynamic and interactive user interface.", technologies: ["React", "JavaScript", "Node.js (Planned)"], githubLink: "https://github.com/account", liveLink: "#" }
    };
    window.openModal = (projectId) => {
        const project = projectDetails[projectId];
        if (!project) return;
        let techBadges = project.technologies.map(tech => `<span>${tech}</span>`).join('');
        modalBody.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p><div class="tech-stack"><strong>Technologies Used:</strong><br><br>${techBadges}</div><div class="modal-links"><a href="${project.githubLink}" target="_blank" class="cta-button">View Code</a><a href="${project.liveLink}" target="_blank" class="cta-button-secondary">Live Demo</a></div>`;
        modal.style.display = 'block';
    };
    window.closeModal = () => { modal.style.display = 'none'; };
    window.onclick = (event) => { if (event.target == modal) { closeModal(); } };
});