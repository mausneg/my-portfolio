// ==========================================
// Theme (Dark / Light Mode) Controller
// ==========================================
const themeToggleBtn = document.getElementById('theme-toggle');
const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

function updateThemeUI() {
    const isDark = document.documentElement.classList.contains('dark');
    if (themeToggleDarkIcon && themeToggleLightIcon) {
        if (isDark) {
            themeToggleLightIcon.classList.remove('hidden');
            themeToggleDarkIcon.classList.add('hidden');
        } else {
            themeToggleDarkIcon.classList.remove('hidden');
            themeToggleLightIcon.classList.add('hidden');
        }
    }
}

// Initial theme check
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark');
}
updateThemeUI();

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', function () {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
        updateThemeUI();
    });
}

// ==========================================
// Navbar scroll state & Active Section Spy
// ==========================================
const header = document.querySelector("header");
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

function handleScroll() {
    if (header) {
        if (window.scrollY > 20) {
            header.classList.add("navbar-fixed");
        } else {
            header.classList.remove("navbar-fixed");
        }
    }

    // Scrollspy for active nav link
    const scrollY = window.pageYOffset + 120;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop;
        const sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                if (link.getAttribute("href") === `#${sectionId}`) {
                    link.classList.add("active");
                } else {
                    link.classList.remove("active");
                }
            });
        }
    });
}

window.addEventListener('scroll', handleScroll);
handleScroll();

// ==========================================
// Mobile Hamburger Menu
// ==========================================
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

if (hamburger && navMenu) {
    hamburger.addEventListener("click", function () {
        hamburger.classList.toggle("hamburger-active");
        navMenu.classList.toggle("hidden");
    });

    // Close mobile menu on clicking any link
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (!navMenu.classList.contains("hidden")) {
                navMenu.classList.add("hidden");
                hamburger.classList.remove("hamburger-active");
            }
        });
    });
}

// ==========================================
// Projects Filter Toggle (All / Production / R&D)
// ==========================================
const filterButtons = document.querySelectorAll("[data-filter]");
const projectCards = document.querySelectorAll("[data-category]");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const filter = button.getAttribute("data-filter");

        // Update active button state
        filterButtons.forEach(btn => {
            btn.classList.remove("bg-slate-900", "text-white", "dark:bg-white", "dark:text-slate-900", "shadow-sm");
            btn.classList.add("text-slate-600", "dark:text-slate-400", "hover:bg-slate-100", "dark:hover:bg-slate-800");
        });

        button.classList.remove("text-slate-600", "dark:text-slate-400", "hover:bg-slate-100", "dark:hover:bg-slate-800");
        button.classList.add("bg-slate-900", "text-white", "dark:bg-white", "dark:text-slate-900", "shadow-sm");

        // Filter projects
        projectCards.forEach(card => {
            const category = card.getAttribute("data-category");
            if (filter === "all" || category === filter) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }
        });
    });
});

// ==========================================
// Copy Email & Toast Notification
// ==========================================
function copyEmail(emailAddress = "maulanasuryanegara123@gmail.com") {
    navigator.clipboard.writeText(emailAddress).then(() => {
        showToast(`Copied ${emailAddress} to clipboard`);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

// Global expose for inline onclick if needed
window.copyEmail = copyEmail;

// Copy Credential helper
function copyCredential(credId) {
    navigator.clipboard.writeText(credId).then(() => {
        showToast(`Copied Credential ID: ${credId}`);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}
window.copyCredential = copyCredential;

function showToast(message) {
    let toast = document.getElementById("toast-notification");
    if (!toast) {
        toast = document.createElement("div");
        toast.id = "toast-notification";
        toast.className = "fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-sm font-medium rounded-xl shadow-2xl transition-all duration-300 transform translate-y-10 opacity-0 pointer-events-none";
        toast.innerHTML = `
            <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span id="toast-message"></span>
        `;
        document.body.appendChild(toast);
    }

    const msgSpan = document.getElementById("toast-message");
    if (msgSpan) msgSpan.textContent = message;

    toast.classList.remove("translate-y-10", "opacity-0", "pointer-events-none");
    toast.classList.add("translate-y-0", "opacity-100");

    setTimeout(() => {
        toast.classList.add("translate-y-10", "opacity-0", "pointer-events-none");
        toast.classList.remove("translate-y-0", "opacity-100");
    }, 2800);
}



