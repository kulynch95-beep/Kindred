/* ═══════════════════════════════════════════════════════════
   script.js — kindred childcare concierge
   ═══════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Mobile navigation ────────────────────────────────── */
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('nav-links');

  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });

  // Close the mobile menu when any nav link is tapped
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });


  /* ── Contact form ─────────────────────────────────────── */
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const btn          = form.querySelector('button[type="submit"]');
    const originalText = btn.textContent;

    // Visual confirmation — swap back after 3 seconds
    btn.textContent       = 'Message sent ✓';
    btn.style.background  = 'var(--color-sage, #8FB8A0)';

    setTimeout(() => {
      btn.textContent      = originalText;
      btn.style.background = '';
    }, 3000);
  });

});
