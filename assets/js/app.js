/* ============================================================
   Portfolio App — renders from window.siteConfig (config.js)
   ============================================================ */

const cfg = window.siteConfig;

/* ── Helpers ─────────────────────────────────────────────── */

function el(id) { return document.getElementById(id); }

function iconHTML(skill) {
  const { iconType, devicon, variant = 'original', simple, abbr, color, name } = skill;
  const fallback = abbr || name.slice(0, 2).toUpperCase();
  const fallbackStyle = `background:${color || '#555'}`;

  if (iconType === 'devicon') {
    const src = `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${devicon}/${devicon}-${variant}.svg`;
    return `<img src="${src}" alt="${name}" loading="lazy"
              onerror="this.outerHTML='<span class=\\'skill-badge-icon\\' style=\\'${fallbackStyle}\\'>${fallback}</span>'">`;
  }
  if (iconType === 'simple') {
    const hex = (color || '#888').replace('#', '');
    const src = `https://cdn.simpleicons.org/${simple}/${hex}`;
    return `<img src="${src}" alt="${name}" loading="lazy"
              onerror="this.outerHTML='<span class=\\'skill-badge-icon\\' style=\\'${fallbackStyle}\\'>${fallback}</span>'">`;
  }
  // badge fallback (or explicit badge type)
  return `<span class="skill-badge-icon" style="${fallbackStyle}">${fallback}</span>`;
}

/* ── Navigation logo ─────────────────────────────────────── */

function renderNav() {
  el('nav-logo').textContent = `${cfg.personal.initials}`;
}

/* ── Hero ─────────────────────────────────────────────────── */

function renderHero() {
  const p = cfg.personal;

  el('hero-badge').textContent = `Open to Work · ${p.location}`;
  el('hero-name').textContent = p.name;
  el('hero-tagline').textContent = p.tagline;

  // Stats
  el('hero-stats').innerHTML = cfg.stats.map(s => `
    <div class="stat-item">
      <div class="stat-value">${s.value}</div>
      <div class="stat-label">${s.label}</div>
    </div>
  `).join('');

  // CTA buttons
  const ctaLinks = [];
  ctaLinks.push(`<a href="#experience" class="btn btn-primary"><i class="fa-solid fa-briefcase"></i> View Experience</a>`);
  if (p.linkedin) {
    ctaLinks.push(`<a href="${p.linkedin}" target="_blank" rel="noopener" class="btn btn-outline"><i class="fa-brands fa-linkedin"></i> LinkedIn</a>`);
  }
  if (p.resume_pdf) {
    ctaLinks.push(`<a href="${p.resume_pdf}" download class="btn btn-outline"><i class="fa-solid fa-download"></i> Resume</a>`);
  }
  el('hero-cta').innerHTML = ctaLinks.join('');

  // Typing animation
  startTyping(el('typing-text'), p.typingTitles);
}

/* ── Typing effect ───────────────────────────────────────── */

function startTyping(target, texts, speed = 80) {
  let tIdx = 0, cIdx = 0, deleting = false;

  function tick() {
    const current = texts[tIdx];
    target.textContent = deleting
      ? current.slice(0, --cIdx)
      : current.slice(0, ++cIdx);

    let delay = deleting ? 40 : speed;

    if (!deleting && cIdx === current.length) {
      delay = 2200;
      deleting = true;
    } else if (deleting && cIdx === 0) {
      deleting = false;
      tIdx = (tIdx + 1) % texts.length;
      delay = 400;
    }
    setTimeout(tick, delay);
  }
  tick();
}

/* ── About ───────────────────────────────────────────────── */

function renderAbout() {
  el('about-summary').innerHTML = `
    <p style="color:var(--text-2); line-height:1.85; font-size:0.95rem">${cfg.summary}</p>
  `;

  el('about-highlights').innerHTML = cfg.highlights.map(h => `
    <div class="highlight-item">
      <div class="highlight-icon"><i class="fa-solid ${h.icon}"></i></div>
      <p class="highlight-text">${h.text}</p>
    </div>
  `).join('');
}

/* ── Experience ──────────────────────────────────────────── */

function renderExperience() {
  el('experience-timeline').innerHTML = cfg.experience.map(job => `
    <div class="timeline-item ${job.type} animate-on-scroll">
      <div class="timeline-dot"></div>
      <div class="timeline-header">
        <div class="timeline-company">
          <div class="company-icon" style="color:${job.logo_color}">
            <i class="fa-solid ${job.logo_icon}"></i>
          </div>
          <div>
            <div class="company-name">${job.company}</div>
            <div class="company-role">${job.role}</div>
          </div>
        </div>
        <div class="timeline-meta">
          <div class="timeline-period">${job.period}</div>
          ${job.type === 'current' ? '<div class="timeline-badge">● Current</div>' : `<div class="timeline-badge" style="background:rgba(139,148,158,0.1);color:var(--text-2);border-color:rgba(139,148,158,0.2)">${job.duration}</div>`}
        </div>
      </div>
      <p class="timeline-desc">${job.description}</p>
      <div class="timeline-highlights">
        ${job.highlights.map(h => `<div class="timeline-highlight">${h}</div>`).join('')}
      </div>
      <div class="timeline-tech">
        ${job.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

/* ── Skills ──────────────────────────────────────────────── */

function renderSkills() {
  el('skills-wrapper').innerHTML = Object.entries(cfg.skills).map(([cat, items]) => `
    <div class="skills-category animate-on-scroll">
      <div class="skills-category-title">${cat}</div>
      <div class="skills-grid">
        ${items.map(skill => `
          <div class="skill-card" title="${skill.subtitle || skill.name}" style="--hover-color:${skill.color || '#f97316'}">
            <div class="skill-icon-wrap">${iconHTML(skill)}</div>
            <div class="skill-name">${skill.name}</div>
            ${skill.subtitle ? `<div class="skill-subtitle">${skill.subtitle}</div>` : ''}
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');

  // Dynamic hover border color per skill card
  document.querySelectorAll('.skill-card').forEach(card => {
    const color = card.style.getPropertyValue('--hover-color');
    card.addEventListener('mouseenter', () => {
      card.style.borderColor = color;
      card.style.boxShadow = `0 0 0 1px ${color}20`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.borderColor = '';
      card.style.boxShadow = '';
    });
  });
}

/* ── Competencies ────────────────────────────────────────── */

function renderCompetencies() {
  el('competencies-cloud').innerHTML = cfg.competencies.map(c => `
    <span class="competency-tag">${c}</span>
  `).join('');
}

/* ── Certifications ──────────────────────────────────────── */

function renderCertifications() {
  el('certs-grid').innerHTML = cfg.certifications.map(cert => {
    let badgeContent;
    if (cert.iconType === 'simple') {
      const hex = (cert.badgeColor || '#326CE5').replace('#', '');
      badgeContent = `<img src="https://cdn.simpleicons.org/${cert.simple}/${hex}"
                           alt="${cert.issuer}"
                           style="width:34px;height:34px;object-fit:contain"
                           onerror="this.outerHTML='<span class=\\'cert-badge-text\\'>${cert.issuer.split(' ').map(w=>w[0]).join('').slice(0,4)}</span>'">`;
    } else {
      badgeContent = `<span class="cert-badge-text">${cert.name.split(' ').map(w=>w[0]).join('').slice(0,4)}</span>`;
    }

    return `
      <div class="cert-card">
        <div class="cert-badge" style="background:${cert.badgeColor || '#326CE5'}20; border:1px solid ${cert.badgeColor || '#326CE5'}40">
          ${badgeContent}
        </div>
        <div class="cert-info">
          <div class="cert-name">${cert.name}</div>
          <div class="cert-issuer">${cert.issuer}</div>
          <span class="cert-year">${cert.year}</span>
          ${cert.description ? `<p class="cert-desc">${cert.description}</p>` : ''}
        </div>
      </div>
    `;
  }).join('');
}

/* ── Education ───────────────────────────────────────────── */

function renderEducation() {
  el('education-grid').innerHTML = cfg.education.map(edu => `
    <div class="edu-card">
      <div class="edu-icon"><i class="fa-solid ${edu.icon}"></i></div>
      <div>
        <div class="edu-degree">${edu.degree}</div>
        <div class="edu-field">${edu.field}</div>
        <div class="edu-institution">${edu.institution}</div>
        <div class="edu-meta">
          <span class="edu-pill">${edu.period}</span>
          <span class="edu-pill">Score: ${edu.grade}</span>
        </div>
      </div>
    </div>
  `).join('');
}

/* ── Contact ─────────────────────────────────────────────── */

function renderContact() {
  const p = cfg.personal;
  const cards = [
    { href: `mailto:${p.email}`, icon: 'fa-envelope', label: 'Email', value: p.email },
    { href: `tel:${p.phone}`, icon: 'fa-phone', label: 'Phone', value: p.phone },
    { href: p.linkedin, icon: 'fa-brands fa-linkedin', label: 'LinkedIn', value: 'linkedin.com/in/tejasri-brungi' },
    { href: null, icon: 'fa-location-dot', label: 'Location', value: p.location }
  ].filter(c => c.href || c.value);

  el('contact-wrapper').innerHTML = cards.map(c => {
    const tag = c.href ? 'a' : 'div';
    const attrs = c.href ? `href="${c.href}" target="_blank" rel="noopener"` : '';
    return `
      <${tag} class="contact-card" ${attrs}>
        <div class="contact-icon"><i class="fa-solid ${c.icon}"></i></div>
        <div class="contact-label">${c.label}</div>
        <div class="contact-value">${c.value}</div>
      </${tag}>
    `;
  }).join('');
}

/* ── Footer ──────────────────────────────────────────────── */

function renderFooter() {
  el('footer-text').innerHTML =
    `© ${new Date().getFullYear()} <span>${cfg.personal.name}</span> · Built with <span>♥</span> · Deployed on GitHub Pages`;
}

/* ── Intersection Observer (scroll animations) ───────────── */

function initScrollAnimations() {
  const observer = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); }
    }),
    { threshold: 0.12 }
  );
  document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
}

/* ── Active nav link on scroll ───────────────────────────── */

function initNavHighlight() {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-link[href^="#"]');
  const navbar = el('navbar');

  const obs = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          links.forEach(l => l.classList.remove('active'));
          const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
          if (active) active.classList.add('active');
        }
      });
    },
    { rootMargin: '-40% 0px -55% 0px' }
  );
  sections.forEach(s => obs.observe(s));

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  });
}

/* ── Mobile nav toggle ───────────────────────────────────── */

function initMobileNav() {
  const toggle = el('nav-toggle');
  const links = el('nav-links');

  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
  });

  // Close on link click
  links.querySelectorAll('.nav-link').forEach(l => {
    l.addEventListener('click', () => links.classList.remove('open'));
  });
}

/* ── Init ────────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
  renderNav();
  renderHero();
  renderAbout();
  renderExperience();
  renderSkills();
  renderCompetencies();
  renderCertifications();
  renderEducation();
  renderContact();
  renderFooter();

  // Wait a tick for DOM to settle before observing
  requestAnimationFrame(() => {
    initScrollAnimations();
    initNavHighlight();
    initMobileNav();
  });
});
