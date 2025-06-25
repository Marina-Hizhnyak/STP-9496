document.querySelectorAll('.faq-box').forEach(box => {
  box.addEventListener('click', () => {
    const faqItem = box.closest('.faq-item');
    faqItem.classList.toggle('open');
  });
});