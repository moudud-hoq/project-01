// Mobile menu toggle
const toggleBtn = document.getElementById('mobileMenuToggle');
const mobileMenu = document.getElementById('mobileMenu');

toggleBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});