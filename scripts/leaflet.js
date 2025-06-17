document.addEventListener('DOMContentLoaded', () => {
    const map = L.map('map').setView([33.7515, -84.7477], 9);
  
    // Tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);
  
    const douglasville = [33.7515, -84.7477];
    
    // Add marker for Douglasville
    L.marker(douglasville).addTo(map)
      .bindPopup('Douglasville, GA')
      .openPopup();
  
    // Circle for 50-mile radius
    L.circle(douglasville, {
      color: 'green',
      fillColor: '#a3e4a3',
      fillOpacity: 0.4,
      radius: 80467
    }).addTo(map);
  
    // === City List with Coordinates ===
    const cities = {
      "Atlanta, GA": [33.749, -84.388],
      "Marietta, GA": [33.9526, -84.5499],
      "Newnan, GA": [33.3807, -84.7997],
      "Carrollton, GA": [33.5801, -85.0766],
      "Villa Rica, GA": [33.7321, -84.9191],
      "Dallas, GA": [33.9234, -84.8408],
      "Union City, GA": [33.5876, -84.5421],
      "Fairburn, GA": [33.5671, -84.5811],
      "Smyrna, GA": [33.883, -84.5144],
      "Powder Springs, GA": [33.8598, -84.6835]
    };
  
    // Attach click listeners to each city in the list
    Object.entries(cities).forEach(([name, coords]) => {
      const item = document.querySelector(`[data-city="${name}"]`);
      if (item) {
        item.addEventListener('click', () => {
          map.setView(coords, 11); // zoom in closer on click
          L.popup()
            .setLatLng(coords)
            .setContent(name)
            .openOn(map);
        });
      }
    });
  });  
  