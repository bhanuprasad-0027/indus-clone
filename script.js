// === HAMBURGER MENU ===
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('open');
  });
}

// === HERO SLIDER ===
const slides = document.querySelectorAll('.hero-slide');
const slideImgs = document.querySelectorAll('.hero-slide-img');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;
let slideInterval;

function goToSlide(index) {
  slides.forEach(s => s.classList.remove('active'));
  slideImgs.forEach(s => s.classList.remove('active'));
  dots.forEach(d => d.classList.remove('active'));
  if (slides[index]) slides[index].classList.add('active');
  if (slideImgs[index]) slideImgs[index].classList.add('active');
  if (dots[index]) dots[index].classList.add('active');
  currentSlide = index;
}

function nextSlide() {
  const next = (currentSlide + 1) % slides.length;
  goToSlide(next);
}

if (slides.length > 0) {
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      goToSlide(parseInt(dot.dataset.slide));
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, 5000);
    });
  });
  slideInterval = setInterval(nextSlide, 5000);
}

// === TECHNOLOGY TABS ===
const techTabs = document.querySelectorAll('.tech-tab');
const techPanels = document.querySelectorAll('.tech-panel');
techTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    techTabs.forEach(t => t.classList.remove('active'));
    techPanels.forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    const panel = document.getElementById(tab.dataset.tab);
    if (panel) panel.classList.add('active');
  });
});

// === PRICING TOGGLE ===
const pricingBtns = document.querySelectorAll('.pricing-toggle button');
const pricingPanels = document.querySelectorAll('.pricing-panel');
pricingBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    pricingBtns.forEach(b => b.classList.remove('active'));
    pricingPanels.forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    const panel = document.getElementById(btn.dataset.plan);
    if (panel) panel.classList.add('active');
  });
});

// === CONTACT MODAL ===
const modal = document.getElementById('contactModal');
const closeModal = document.getElementById('closeModal');
const openModalBtns = document.querySelectorAll('[data-open-modal]');

openModalBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (modal) modal.classList.add('active');
  });
});

if (closeModal) {
  closeModal.addEventListener('click', () => modal.classList.remove('active'));
}

if (modal) {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
  });
}

// === BACK TO TOP ===
const backToTop = document.getElementById('backToTop');
if (backToTop) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  });
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// === NEWSLETTER FORM ===
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for subscribing!');
    newsletterForm.reset();
  });
}

// === CONTACT FORM ===
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
    if (modal) modal.classList.remove('active');
  });
}

// === SMOOTH SCROLL for anchor links ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (navLinks) navLinks.classList.remove('active');
    }
  });
});
