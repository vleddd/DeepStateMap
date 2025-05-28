const map = L.map('map').setView([48.5, 31.5], 6);

L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '© OpenStreetMap'
}).addTo(map);

fetch('data.geojson')
    .then(response => response.json())
    .then(data => {
        L.geoJSON(data, {
            style: { color: 'red', weight: 3 }
        }).addTo(map);
    });