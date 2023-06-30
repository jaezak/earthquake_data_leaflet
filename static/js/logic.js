let myMap = L.map("map", {
  center: [-32.8, 117.9],
  zoom: 2
});

// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

let url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson";

d3.json(url).then(function(response) {

  //console.log(response);
  features = response.features;

  //console.log(features);
  for (let i = 0; i < 50; i++) {

    let location = features[i].geometry;
    if(location){
      L.marker([location.coordinates[1], location.coordinates[0]]).addTo(myMap);
    }
  
}})
//Your data markers should reflect the magnitude 
//of the earthquake by their size and the depth of the earthquake by color. 
//Earthquakes with higher magnitudes should appear larger, and earthquakes with greater depth should appear darker in color.

//Hint: The depth of the earth can be found as the third coordinate for each earthquake.
