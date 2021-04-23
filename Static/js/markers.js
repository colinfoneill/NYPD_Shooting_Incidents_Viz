// Creating the map object
var map = L.map("map", {
  center: [40.7128, -74.0059],
  zoom: 11
});

// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

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
    }
  }).addTo(map);
});

// // Add NYPD shooting data to map
var shootings = "https://data.cityofnewyork.us/resource/833y-fsy8.json";

d3.json(shootings).then(function(response) {

console.log(response);

for (var i = 0; i < response.length; i++) {
  var location = response[i].geocoded_column;

  if (location) {
    L.marker([location.coordinates[1], location.coordinates[0]])
    .bindPopup("<h1>Incident: " + response[i].incident_key + "</h1> <hr> <h3>Date: " + response[i].occur_date.slice(0,10) + "<h3>Time: " + response[i].occur_time 
    + "</h3>" +"<h3>Borough: " + response[i].boro + "</h3>" + "</h3>" + "<h3>Precinct: " + response[i].precinct + "</h3>" + "<h3>Victim Age: " 
    + response[i].vic_age_group + "</h3>" + "<h3>Victim Sex: " + response[i].vic_sex + "</h3>" + "<h3>Victim Race: " + response[i].vic_race)
    .addTo(map);
  }
}
});                                               



