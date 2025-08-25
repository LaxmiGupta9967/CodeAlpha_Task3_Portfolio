// Smooth reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
},{threshold: 0.15});
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Mobile nav toggle
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
hamburger.addEventListener('click', () => nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

// Back-to-top button
const toTop = document.getElementById('toTop');
window.addEventListener('scroll', () => {
  window.scrollY > 600 ? toTop.classList.add('show') : toTop.classList.remove('show');
});
toTop.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Contact form (front-end only demo)
const form = document.getElementById('contactForm');
const note = document.getElementById('formNote');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  if (!data.get('name') || !data.get('email') || !data.get('message')) {
    note.textContent = 'Please fill all fields.';
    note.style.color = '#ffb74d';
    return;
  }
  // Simulate success (replace with your backend endpoint)
  note.textContent = 'Thanks! Your message has been sent.';
  note.style.color = '#81c784';
  form.reset();
});
