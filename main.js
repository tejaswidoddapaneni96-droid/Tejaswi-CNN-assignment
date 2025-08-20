// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
if (navToggle && siteNav) {
	navToggle.addEventListener('click', () => {
		const isOpen = siteNav.classList.toggle('open');
		navToggle.setAttribute('aria-expanded', String(isOpen));
	});
}

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function setActiveNav() {
	let current = '';
	sections.forEach(section => {
		const rect = section.getBoundingClientRect();
		if (rect.top <= 120 && rect.bottom > 120) {
			current = section.id;
		}
	});
	navLinks.forEach(link => {
		link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
	});
}
window.addEventListener('scroll', setActiveNav, { passive: true });
window.addEventListener('load', setActiveNav);

// Reveal on scroll
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add('is-visible');
			io.unobserve(entry.target);
		}
	});
}, { threshold: 0.18 });
revealEls.forEach(el => io.observe(el));

// Hover light effect tracking for cards
document.querySelectorAll('.card').forEach(card => {
	card.addEventListener('pointermove', (e) => {
		const rect = card.getBoundingClientRect();
		card.style.setProperty('--x', `${e.clientX - rect.left}px`);
		card.style.setProperty('--y', `${e.clientY - rect.top}px`);
	});
});

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Assignment links now hard-coded in HTML for GitHub Pages compatibility

// Theme toggle removed; single theme applied

