function scrollUp() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

function updateNavOnScroll() {
  const navbar = document.querySelector('#navbar-custom');
  if (!navbar) return;
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(2, 12, 27, 0.98)';
    navbar.style.backdropFilter = 'blur(20px)';
    navbar.style.borderBottom = '1px solid #00a8e1';
  } else {
    navbar.style.background = 'rgba(2, 12, 27, 0.85)';
    navbar.style.backdropFilter = 'blur(16px)';
    navbar.style.borderBottom = '1px solid rgba(0,168,225,0.2)';
  }
}

window.addEventListener('scroll', updateNavOnScroll);
updateNavOnScroll();

document.querySelectorAll('.dropdown-toggle').forEach(drop => {
  drop.addEventListener('click', e => {
    e.stopPropagation();
  });
});