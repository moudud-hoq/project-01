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

// Leaflet JS Mpa
document.addEventListener("DOMContentLoaded", function () {
    var map = L.map(document.querySelector(".map")).setView([23.78954960892127, 90.39426629946628], 12);


    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);


    var location = [
        { lat: 23.731185704194495, lng: 90.40272681839151, loc: "কমলাপুর রেলওয়ে, ওয়ারি, শাহজাহানপুর", number: "০১৭৬৯-০৯২৪৬৪" },
        { lat: 23.734644670240122, lng: 90.4260218723083, loc: "রমনা, সেগুনবাগিচা, সুপ্রিমকোর্ট", number: " ০১৭৬৯-০৯৫৪১৯" },
        { lat: 23.73153590765672, lng: 90.4071378583267, loc: "পল্টন", number: " ০১৭৬৩-৯৩৯৮৫৭" },
        { lat: 23.72333488055187, lng: 90.41246037371515, loc: "গুলিস্থান", number: " ০১৭৬৩-৯৩৯৮৫৭" },
    ];

    location.forEach(function (location) {
        L.marker([location.lat, location.lng])
            .addTo(map)
            .bindPopup("<b>" + location.loc + "</b><br>" + "<b>Contact:</b> <a href='tel:" + "' style='color: blue; text-decoration: underline;'>" + location.number + "</a>");
    });
});

