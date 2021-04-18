// Creating the map object
var NYPDMap = L.map("map", {
    center: [40.7128, -74.0059],
    zoom: 11
  });
  
  // Adding the tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(NYPDMap);

// GeoJSON data link for neighborhood info
var link = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/15-Mapping-Web/nyc.geojson";

// Assign colors to each borough
function chooseColor(borough) {
  switch (borough) {
  case "Brooklyn":
    return "lightsalmon";
  case "Bronx":
    return "aqua";
  case "Manhattan":
    return "orange";
  case "Queens":
    return "yellowgreen";
  case "Staten Island":
    return "violet";
  default:
    return "black";
  }
}

// Add the GeoJSON data
d3.json(link).then(function(data) {
    L.geoJson(data, {
      style: function(feature) {
        return {
          color: "white",
          fillColor: chooseColor(feature.properties.borough),
          fillOpacity: 0.5,
          weight: 1.5
        };
      },
      onEachFeature: function(feature, layer) {
        // mouseover to highlight a neighborhood
        layer.on({
          mouseover: function(event) {
            layer = event.target;
            layer.setStyle({
              fillOpacity: 0.9
            });
          },
          // Remove highlight when cursor leaves
          mouseout: function(event) {
            layer = event.target;
            layer.setStyle({
              fillOpacity: 0.5
            });
          },
        });
        // Giving each feature a popup with information that's relevant to it
        layer.bindPopup("<h1>" + feature.properties.neighborhood + "</h1> <hr> <h2>" + feature.properties.borough + "</h2>");
  
      }
    }).addTo(NYPDMap);
  });
  