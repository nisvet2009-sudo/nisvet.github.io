// ═══════════════════════════════════════════════════════════════
//  OSKAR DÖNER - JAVASCRIPT
// ═══════════════════════════════════════════════════════════════

// ── HAMBURGER MENU ──
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileMenu = document.getElementById('mobileMenu');

// Toggle mobilni meni kad se klikne hamburger
hamburgerBtn.addEventListener('click', () => {
  hamburgerBtn.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});

// Funkcija za zatvaranje mobilnog menija
function closeMobile() {
  hamburgerBtn.classList.remove('open');
  mobileMenu.classList.remove('open');
}

// Zatvori mobilni meni kad se klikne na link
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
  link.addEventListener('click', closeMobile);
});

// ── MENU TABS ──
const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Ukloni 'active' sa svih tabova
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabPanels.forEach(panel => panel.classList.remove('active'));
    
    // Dodaj 'active' na kliknuti tab
    button.classList.add('active');
    
    // Prikaži odgovarajući panel
    const tabId = 'tab-' + button.dataset.tab;
    document.getElementById(tabId).classList.add('active');
  });
});

// ── FAQ ACCORDION ──
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    const isOpen = question.classList.contains('open');
    
    // Zatvori sve FAQ-ove
    faqQuestions.forEach(q => {
      q.classList.remove('open');
      q.nextElementSibling.style.maxHeight = null;
    });
    
    // Ako prethodno nije bio otvoren, otvori ga
    if (!isOpen) {
      question.classList.add('open');
      const answer = question.nextElementSibling;
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });
});

// ── BACK TO TOP BUTTON ──
const backToTopBtn = document.getElementById('back-top');

window.addEventListener('scroll', () => {
  // Prikaži dugme kad se skroluje više od 400px
  if (window.scrollY > 400) {
    backToTopBtn.classList.add('visible');
  } else {
    backToTopBtn.classList.remove('visible');
  }
});

// Smooth scroll kad se klikne na back-to-top
backToTopBtn.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// ── HIGHLIGHT TODAY IN HOURS TABLE ──
const daysOfWeek = ['Nedjelja', 'Ponedjeljak', 'Utorak', 'Srijeda', 'Četvrtak', 'Petak', 'Subota'];
const today = daysOfWeek[new Date().getDay()];

const hoursTableRows = document.querySelectorAll('.hours-table tr');

hoursTableRows.forEach(row => {
  const firstCell = row.cells[0];
  
  if (firstCell && firstCell.textContent.trim() === today) {
    row.classList.add('today');
  } else {
    row.classList.remove('today');
  }
});

// ── SMOOTH SCROLL ZA SVE LINKOVE SA # ──
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    
    // Ako je samo #, scrollaj na vrh
    if (targetId === '#') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }
    
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      // Zatvori mobilni meni ako je otvoren
      closeMobile();
      
      // Scroll do elementa
      const navHeight = document.querySelector('nav').offsetHeight;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight - 20;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// ── NAVBAR SHADOW ON SCROLL ──
const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});

// ── FADE IN ANIMATION NA SCROLL (opciono) ──
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const fadeInObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Primijeni fade-in na sve sekcije (opciono)
document.querySelectorAll('section').forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(30px)';
  section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  fadeInObserver.observe(section);
});

// ── CONSOLE MESSAGE ──
console.log('%c🥙 OSKAR DÖNER 🥙', 'font-size: 24px; font-weight: bold; color: #7ac230;');
console.log('%cKad ogladniš... znaš gdje te čeka!', 'font-size: 14px; color: #e07630;');
console.log('%c📞 Nazovi: 062 848 392', 'font-size: 12px; color: #ffffff;');
