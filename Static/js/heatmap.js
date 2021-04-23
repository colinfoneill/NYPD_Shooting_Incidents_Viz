// Creating the map object
var NYPDMap = L.map("heatmap", {
    center: [40.7128, -74.0059],
    zoom: 11
  });
  
  // Adding the tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(NYPDMap);
  
// // Add NYPD shooting data to map
var shootings = "https://data.cityofnewyork.us/resource/833y-fsy8.json";
  
// Add Heatmap to show concentration of shootings
d3.json(shootings).then(function(response) {

  console.log(response);

  var heatArray = [];

  for (var i = 0; i < response.length; i++) {
    var location = response[i].geocoded_column;

    console.log(location)

    if (location) {
      heatArray.push([location.coordinates[1], location.coordinates[0]]);
    }
  }

  var heat = L.heatLayer(heatArray, {
    radius: 30,
    blur: 10
  }).addTo(NYPDMap);

});