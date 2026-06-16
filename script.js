document.addEventListener("DOMContentLoaded", function () {

    // ==========================================================================
    // 1. PROJECT TOGGLE MECHANICS
    // ==========================================================================
    window.toggleProjects = function () {
        const moreProjects = document.getElementById("more-projects");
        const btn = document.getElementById("toggle-btn");

        if (!moreProjects || !btn) return;

        // Toggle visibility
        moreProjects.classList.toggle("d-none");

        // Dynamic Text and Premium Icon updates
        if (moreProjects.classList.contains("d-none")) {
            btn.innerHTML = 'See All Applications <i class="bi bi-grid-3x3-gap ms-2"></i>';
            
            // Smoothly scroll back up to the top of the projects grid when collapsing
            document.getElementById("projects").scrollIntoView({ behavior: 'smooth' });
        } else {
            btn.innerHTML = 'Show Less <i class="bi bi-chevron-up ms-2"></i>';
        }
    };

    // ==========================================================================
    // 2. CONTACT COMMUNICATIONS VALIDATION & HANDLING
    // ==========================================================================
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            
            // Simple alert confirmation - ready to be swapped with an API service (like EmailJS or Formspree)
            alert("Thank you for reaching out, Nitin here! I have received your message details and will get back to your query as soon as possible.");
            
            // Clear input metrics upon successful transmission
            contactForm.reset();
        });
    }

    // ==========================================================================
    // 3. NAVBAR SCROLL INTERACTION & ACTIVE LINK TRACKING
    // ==========================================================================
    const sections = document.querySelectorAll("section, header");
    const navLinks = document.querySelectorAll(".custom-link");
    const navbar = document.querySelector(".premium-nav");

    function scrollHighlighter() {
        let scrollY = window.pageYOffset;
        
        // Add subtle background shadow to navigation deck when scrolling down
        if (scrollY > 50) {
            navbar.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.3)";
        } else {
            navbar.style.boxShadow = "none";
        }

        // Cycle through page views to highlight active navigation link item
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100; // Offset for fixed nav header
            const sectionId = current.getAttribute("id");
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove("active");
                    // Handle fallback default case if header section lacks an ID parameter
                    if (sectionId && link.getAttribute("href").includes(sectionId)) {
                        link.classList.add("active");
                    } else if (!sectionId && link.getAttribute("href") === "#") {
                        link.classList.add("active");
                    }
                });
            }
        });
    }

    // Bind scroll tracker to viewport mechanics
    window.addEventListener("scroll", scrollHighlighter);
    
    // Close mobile drop-down menu automatically after a link item is tapped
    const navItems = document.querySelectorAll('.custom-link, .custom-link-btn');
    const navCollapse = document.getElementById('navGrid');
    
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navCollapse);
                bsCollapse.hide();
            }
        });
    });

});
