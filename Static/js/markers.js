// Create the tile layer that will be the background of our map.
var streetmap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

// Initialize all the LayerGroups that we'll use.
var layers = {
  BOROUGHOUTLINE: new L.LayerGroup(),
  BRONX: new L.LayerGroup(),
  BROOKLYN: new L.LayerGroup(),
  MANHATTAN: new L.LayerGroup(),
  QUEENS: new L.LayerGroup(),
  STATENISLAND: new L.LayerGroup(),
  HEATMAP: new L.LayerGroup()
};

// Create the map with our layers.
var map = L.map("map", {
  center: [40.7128, -74.0059],
  zoom: 11,
  layers: [
    layers.BOROUGHOUTLINE,
    layers.BRONX,
    layers.BROOKLYN,
    layers.MANHATTAN,
    layers.QUEENS,
    layers.STATENISLAND,
    layers.HEATMAP
  ]
});

// Add our "streetmap" tile layer to the map.
streetmap.addTo(map);

// Create an overlays object to add to the layer control.
var overlays = {
  "Borough Outline": layers.BOROUGHOUTLINE,
  "Bronx": layers.BRONX,
  "Brooklyn": layers.BROOKLYN,
  "Manhattan": layers.MANHATTAN,
  "Queens": layers.QUEENS,
  "Staten Island": layers.STATENISLAND,
  "Heat Map": layers.HEATMAP,
};

// GeoJSON data link for neighborhood info
var link = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/15-Mapping-Web/nyc.geojson";

// Assign colors to each borough
function chooseColor(borough) {
switch (borough) {
case "Brooklyn":
  return "crimson";
case "Bronx":
  return "yellowgreen";
case "Manhattan":
  return "orange";
case "Queens":
  return "blueviolet";
case "Staten Island":
  return "cornflowerblue";
default:
  return "black";
}};

// Add the GeoJSON data
d3.json(link).then(function(data) {
  L.geoJson(data, {
    style: function(feature) {
      return {
        color: "white",
        fillColor: chooseColor(feature.properties.borough),
        fillOpacity: 0.3,
        weight: 1.5
      }
    }
  }).addTo(layers.BOROUGHOUTLINE);
});

// Create a control for our layers, and add our overlays to it.
L.control.layers(null, overlays).addTo(map);


var markers = {
  BRONX: L.ExtraMarkers.icon({
    icon: "ion-plus sign",
    iconColor: "white",
    markerColor: "green",
    shape: "circle"
  }),
  BROOKLYN: L.ExtraMarkers.icon({
    icon: "ion-plus sign",
    iconColor: "white",
    markerColor: "red",
    shape: "circle"
  }),
  MANHATTAN: L.ExtraMarkers.icon({
    icon: "ion-plus sign",
    iconColor: "white",
    markerColor: "orange",
    shape: "circle"
  }),
  QUEENS: L.ExtraMarkers.icon({
    icon: "ion-plus sign",
    iconColor: "white",
    markerColor: "purple",
    shape: "circle"
  }),
  STATENISLAND: L.ExtraMarkers.icon({
    icon: "ion-plus sign",
    iconColor: "white",
    markerColor: "blue",
    shape: "circle"
  }),
  NONE: L.ExtraMarkers.icon({
    icon: "ion-plus sign",
    iconColor: "white",
    markerColor: "white",
    shape: "circle"
  })
};

var shootings = "https://data.cityofnewyork.us/resource/833y-fsy8.json";

d3.json(shootings).then(function(response) {

    for (var i = 0; i < response.length; i++) {
        var location = response[i].geocoded_column;
        var borough = response[i].boro;
            
        if (borough === "BRONX") {
            boro = "BRONX";
            }
        else if (borough === "BROOKLYN") {
            boro = "BROOKLYN";
            }
        else if (borough === "MANHATTAN") {
            boro = "MANHATTAN";
            }
        else if (borough === "QUEENS") {
            boro = "QUEENS";
            }
        else if (borough === "STATEN ISLAND") {
            boro = "STATENISLAND";
            }    
        else { 
            boro = "NONE";
            }

        var newMarker = L.marker([location.coordinates[1], location.coordinates[0]], {
            icon: markers[boro]
        });

        newMarker.addTo(layers[boro]);

        newMarker.bindPopup("<h3>Incident: " + response[i].incident_key + "</h3> <hr/> <h4>Date: " + response[i].occur_date.slice(0,10) + "<h4>Time: " + response[i].occur_time.slice(0,5) 
        + "</h4>" +"<h4>Borough: " + response[i].boro + "</h4>" + "</h4>" + "<h4>Precinct: " + response[i].precinct + "</h4>" + "<h4>Perp Age: " 
        + response[i].perp_age_group + "<h4>Perp Sex: " + response[i].perp_sex + "<h4>Perp Race: " + response[i].perp_race + "<h4>Victim Age: " 
        + response[i].vic_age_group + "</h4>" + "<h4>Victim Sex: " + response[i].vic_sex + "</h4>" + "<h4>Victim Race: " + response[i].vic_race, {maxWidth: 200, maxHeight: 200})
        .addTo(map);
        };
    });

// Add Heatmap to show concentration of shootings
d3.json(shootings).then(function(response) {

  var heatArray = [];

  for (var i = 0; i < response.length; i++) {
    var location = response[i].geocoded_column;

    if (location) {
      heatArray.push([location.coordinates[1], location.coordinates[0]]);
    }
  }

  var heatmap = L.heatLayer(heatArray, {
    radius: 30,
    blur: 10
  }).addTo(layers.HEATMAP);

});
