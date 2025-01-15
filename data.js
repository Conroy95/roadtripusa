// data.js
const roadtripData = [
  {
    day: 1,
    from: "New York JFK Airport",
    to: "LAX Airport",
    stops: [
      { name: "Calico Ghost Town", coords: "34.9428, -116.8653", img: "images/calico.jpg" },
      { name: "Mojave National Preserve", coords: "35.0121, -115.4708", img: "images/mojave.jpg" },
    ],
    hotel: { name: "Hampton Inn By Hilton Los Angeles Airport", coords: "33.942722, -118.369611", img: "https://conroy95.github.io/RoadTrip95/images/hotel1.jpg" }
  },
  {
    day: 2,
    from: "Las Vegas, NV",
    to: "Grand Canyon, AZ",
    stops: [
      { name: "Hoover Dam", coords: "36.0156, -114.7378", img: "images/hoover.jpg" },
      { name: "Route 66 Museum", coords: "35.1895, -114.0530", img: "images/route66.jpg" },
    ],
    hotel: { name: "Yavapai Lodge", coords: "36.0521, -112.1230", img: "images/yavapai.jpg" }
  },
  // Voeg 20 extra dagen toe met dezelfde structuur...
];