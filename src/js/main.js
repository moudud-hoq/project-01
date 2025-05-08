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

/// Leaflet JS Map
document.addEventListener("DOMContentLoaded", function () {
    const map = L.map(document.querySelector(".map"));

    // Tile Layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Locations
    const locations = [
        { lat: 34.115784, lng: -118.198139, loc: "Highland Park", number: "323-555-9876" },
        { lat: 34.090009, lng: -118.361744, loc: "West Hollywood", number: "323-555-6789" },
        { lat: 34.147785, lng: -118.144516, loc: "Pasadena", number: "626-555-1234" },
        { lat: 34.052235, lng: -118.243683, loc: "Los Angeles", number: "213-555-5678" },
        { lat: 34.180839, lng: -118.308966, loc: "Burbank", number: "818-555-7890" },
        { lat: 34.142507, lng: -118.255075, loc: "Glendale", number: "818-555-4321" },
    ];

    const bounds = [];

    // Add markers and popups
    locations.forEach(item => {
        L.marker([item.lat, item.lng])
            .addTo(map)
            .bindPopup(`
                <div style="font-family: Arial; font-size: 14px;">
                    <strong style="color: #333;">${item.loc}</strong><br>
                    📞 <a href="tel:${item.number}" style="color: #007BFF; text-decoration: none;">
                        ${item.number}
                    </a>
                </div>
            `);
        bounds.push([item.lat, item.lng]);
    });

    // Auto-zoom & center the map
    map.fitBounds(bounds);
});


