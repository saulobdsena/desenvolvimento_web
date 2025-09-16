// Alternar entre modo claro e escuro
const btn = document.getElementById('btn-dark');
btn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  const isDark = document.body.classList.contains('dark-theme');
});