'use strict';

(function initCursor() {
  const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursor-ring');
  if (!cursor || !ring) return;

  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top = my + 'px';
  });

  document.addEventListener('mousedown', () => cursor.classList.add('click'));
  document.addEventListener('mouseup', () => cursor.classList.remove('click'));

  // Hover state on interactive elements
  document.querySelectorAll('a, button, .project-card, .skill-category, .skill-tag').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
  });

  // Smooth ring follow
  (function animateRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';
    requestAnimationFrame(animateRing);
  })();
})();


(function initNav() {
  const navbar = document.getElementById('navbar');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    // Scrolled class
    navbar.classList.toggle('scrolled', window.scrollY > 60);

    // Active nav link
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
    });
    navLinks.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });

    // Back to top
    const topBtn = document.getElementById('top-btn');
    if (topBtn) topBtn.classList.toggle('show', window.scrollY > 400);
  });
})();


(function initMobileNav() {
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  if (!hamburger || !mobileNav) return;

  hamburger.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('open');
    hamburger.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  mobileNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      hamburger.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
})();


(function initTyping() {
  const el = document.getElementById('typed');
  if (!el) return;

  const roles = [
    'Backend Java Developer',
    'Spring Boot Engineer',
    'REST API Builder',
    'DSA Tutor'
  ];

  let ri = 0, ci = 0, deleting = false;

  function type() {
    const word = roles[ri];
    if (!deleting) {
      el.textContent = word.slice(0, ++ci);
      if (ci === word.length) { deleting = true; setTimeout(type, 1800); return; }
    } else {
      el.textContent = word.slice(0, --ci);
      if (ci === 0) { deleting = false; ri = (ri + 1) % roles.length; }
    }
    setTimeout(type, deleting ? 38 : 72);
  }
  type();
})();


(function initReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
})();


(function initTopBtn() {
  const btn = document.getElementById('top-btn');
  if (!btn) return;
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
})();


(function initContactForm() {
  const btn = document.getElementById('submit-btn');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const name = document.getElementById('cf-name')?.value.trim() || '';
    const email = document.getElementById('cf-email')?.value.trim() || '';
    const company = document.getElementById('cf-company')?.value.trim() || '';
    const subject = document.getElementById('cf-subject')?.value || '';
    const msg = document.getElementById('cf-message')?.value.trim() || '';

    if (!name || !email || !msg) {
      alert('Please fill in your name, email and message.');
      return;
    }

    const bodyParts = [`From: ${name} (${email})`];
    if (company) bodyParts.push(`Company: ${company}`);
    bodyParts.push('', msg);

    const mailto = `mailto:chiendao278@gmail.com`
      + `?subject=${encodeURIComponent(subject || 'Portfolio Contact — ' + name)}`
      + `&body=${encodeURIComponent(bodyParts.join('\n'))}`;

    window.location.href = mailto;
  });
})();


(function initBgParticles() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas || typeof THREE === 'undefined') return;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;

  // Points
  const count = 1800;
  const geo = new THREE.BufferGeometry();
  const pos = new Float32Array(count * 3);
  for (let i = 0; i < count * 3; i++) pos[i] = (Math.random() - 0.5) * 20;
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));

  const mat = new THREE.PointsMaterial({ size: 0.022, color: 0x00f5c4, transparent: true, opacity: 0.5, sizeAttenuation: true });
  const points = new THREE.Points(geo, mat);
  scene.add(points);

  // Lines
  const lineMat = new THREE.LineBasicMaterial({ color: 0x0066ff, transparent: true, opacity: 0.05 });
  for (let i = 0; i < 30; i++) {
    const lg = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3((Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20),
      new THREE.Vector3((Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20)
    ]);
    scene.add(new THREE.Line(lg, lineMat));
  }

  let mx = 0, my = 0;
  document.addEventListener('mousemove', e => {
    mx = (e.clientX / window.innerWidth - 0.5) * 0.4;
    my = (e.clientY / window.innerHeight - 0.5) * 0.4;
  });

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  let t = 0;
  (function animate() {
    requestAnimationFrame(animate);
    t += 0.0004;
    points.rotation.y += (mx - points.rotation.y) * 0.02 + 0.0003;
    points.rotation.x += (-my - points.rotation.x) * 0.02;
    points.rotation.z = Math.sin(t) * 0.05;
    renderer.render(scene, camera);
  })();
})();


(function initHeroSphere() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas || typeof THREE === 'undefined') return;

  const SIZE = 400;
  canvas.width = SIZE;
  canvas.height = SIZE;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(SIZE, SIZE);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
  camera.position.z = 3.5;

  // Outer wireframe
  const geoOuter = new THREE.IcosahedronGeometry(1.4, 3);
  const matOuter = new THREE.MeshBasicMaterial({ color: 0x00f5c4, wireframe: true, transparent: true, opacity: 0.22 });
  const wireOuter = new THREE.Mesh(geoOuter, matOuter);
  scene.add(wireOuter);

  // Inner wireframe
  const geoInner = new THREE.IcosahedronGeometry(1.0, 2);
  const matInner = new THREE.MeshBasicMaterial({ color: 0x0066ff, wireframe: true, transparent: true, opacity: 0.14 });
  scene.add(new THREE.Mesh(geoInner, matInner));

  // Surface dots
  const dotGeo = new THREE.BufferGeometry();
  const dotPos = [];
  for (let i = 0; i < 180; i++) {
    const phi = Math.acos(2 * Math.random() - 1);
    const theta = Math.random() * Math.PI * 2;
    const r = 1.4;
    dotPos.push(
      r * Math.sin(phi) * Math.cos(theta),
      r * Math.sin(phi) * Math.sin(theta),
      r * Math.cos(phi)
    );
  }
  dotGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(dotPos), 3));
  const dotMat = new THREE.PointsMaterial({ size: 0.035, color: 0x00f5c4, transparent: true, opacity: 0.6 });
  scene.add(new THREE.Points(dotGeo, dotMat));

  let mx = 0, my = 0;
  document.addEventListener('mousemove', e => {
    mx = (e.clientX / window.innerWidth - 0.5) * 0.6;
    my = (e.clientY / window.innerHeight - 0.5) * 0.6;
  });

  let t = 0;
  (function animate() {
    requestAnimationFrame(animate);
    t += 0.004;
    wireOuter.rotation.y += (mx * 0.5 - wireOuter.rotation.y) * 0.04 + 0.003;
    wireOuter.rotation.x += (-my * 0.3 - wireOuter.rotation.x) * 0.04;
    wireOuter.rotation.z = Math.sin(t * 0.3) * 0.08;
    renderer.render(scene, camera);
  })();
})();
