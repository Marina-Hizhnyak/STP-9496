document.querySelectorAll('[data-faq-box]').forEach(box => {
  box.addEventListener('click', () => {
    const faqItem = box.closest('[data-faq-item]');
    faqItem.classList.toggle('open');
  });
});
