// Mobile menu toggle
const toggleBtn = document.getElementById('mobileMenuToggle');
const mobileMenu = document.getElementById('mobileMenu');

toggleBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Search Button fold
document.getElementById('mobileSearchToggle').addEventListener('click', function () {
    const searchBar = document.getElementById('mobileSearchBar');
    searchBar.classList.toggle('hidden');
});