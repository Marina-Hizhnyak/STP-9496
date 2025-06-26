document.addEventListener('DOMContentLoaded', () => {
  const messageBox = document.querySelector('[data-message]');
  const acceptBtn = document.querySelector('.accept-button');
  const declineBtn = document.querySelector('.decline-button');

  setTimeout(() => {
    messageBox.removeAttribute('hidden');
  }, 1000);

  const hideMessage = () => {
    messageBox.setAttribute('hidden', '');
  };

  acceptBtn.addEventListener('click', hideMessage);
  declineBtn.addEventListener('click', hideMessage);

  document.addEventListener('click', e => {
    const isMessageOpen = !messageBox.hasAttribute('hidden');
    if (isMessageOpen && !messageBox.contains(e.target)) {
      messageBox.setAttribute('hidden', '');
    }
  });
});
