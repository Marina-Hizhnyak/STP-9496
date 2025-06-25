document.addEventListener('DOMContentLoaded', () => {
  const openMenuBtn = document.querySelector('[data-menu-open]');
  const menu = document.querySelector('[data-menu]');
  const navItems = menu.querySelectorAll('.burger-nav-item');

  openMenuBtn.addEventListener('click', () => {
    const isOpen = !menu.hasAttribute('hidden');
    if (isOpen) {
      menu.setAttribute('hidden', '');
    } else {
      menu.removeAttribute('hidden');
    }
  });

  document.addEventListener('click', e => {
    if (!menu.contains(e.target) && !openMenuBtn.contains(e.target)) {
      menu.setAttribute('hidden', '');
    }
  });

  navItems.forEach(item => {
    item.addEventListener('click', e => {
      const link = item.querySelector('a[href^="#"]');
      if (link) {
        const targetId = link.getAttribute('href');
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth' });

          history.pushState(null, '', targetId);

          menu.setAttribute('hidden', '');
        }
      }
    });
  });
});
