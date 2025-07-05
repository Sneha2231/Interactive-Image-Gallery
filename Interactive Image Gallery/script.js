// Animate cards on load
window.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, i) => {
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'scale(1)';
      }, 200 * i);
    });
  });
  
  // Toggle dark/light mode
  const toggleBtn = document.getElementById('toggleThemeBtn');
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });