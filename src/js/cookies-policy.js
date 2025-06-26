document.addEventListener('DOMContentLoaded', () => {
  const messageBox = document.querySelector('[data-message]');
  const acceptBtn = document.querySelector('[data-accept-button]');
  const declineBtn = document.querySelector('[data-decline-button]');

  if (!sessionStorage.getItem('cookies-consent')) {
    setTimeout(() => {
      messageBox.removeAttribute('hidden');
    }, 1000);
  }

  const hideMessage = consent => {
    messageBox.setAttribute('hidden', '');
    sessionStorage.setItem('cookies-consent', consent);
  };

  acceptBtn.addEventListener('click', () => hideMessage('accepted'));
  declineBtn.addEventListener('click', () => hideMessage('declined'));

  document.addEventListener('click', e => {
    const isOpen = !messageBox.hasAttribute('hidden');
    if (isOpen && !messageBox.contains(e.target)) {
      hideMessage('dismissed');
    }
  });
});
