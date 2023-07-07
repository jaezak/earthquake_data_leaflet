# leaflet_challenge
 6/30 plotted earthquake coordinates.

 7/7 created basemap and topographical layers, legend, and changed markers to circles. help from TA.

<div id="bootcamp"><img style="display: none;" src="https://static.bc-edx.com/data/dl-1-2/m15/lms/img/banner.jpg" alt="lesson banner" />

### Background

The United States Geological Survey, or USGS for short, is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment, and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes.

The USGS is interested in building a new set of tools that will allow them to visualize their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. In this challenge, you have been tasked with developing a way to visualize USGS data that will allow them to better educate the public and other government organizations (and hopefully secure more funding) on issues facing our planet.


![2-BasicMap](https://static.bc-edx.com/data/dl-1-2/m15/lms/img/2-BasicMap.jpg)

Complete the following steps:

1. Get your dataset. To do so, follow these steps:

   * The USGS provides earthquake data in a number of different formats, updated every 5 minutes. Visit the [USGS GeoJSON Feed](http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) page and choose a dataset to visualize. The following image is an example screenshot of what appears when you visit this link:

2. Import and visualize the data by doing the following:

   * Using Leaflet, create a map that plots all the earthquakes from your dataset based on their longitude and latitude.Your data markers should reflect the magnitude of the earthquake by their size and the depth of the earthquake by color. Earthquakes with higher magnitudes should appear larger, and earthquakes with greater depth should appear darker in color.
   
   * Include popups that provide additional information about the earthquake when its associated marker is clicked.

   * Create a legend that will provide context for your map data.

   * Your visualization should look something like the preceding map.