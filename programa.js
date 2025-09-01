var map = L.map('map').setView([4.62804362941054, -74.065816584317239], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([4.62804362941054, -74.06581658431723]).addTo(map);