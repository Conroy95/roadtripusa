// data.js
const roadtripData = [
  {
    day: 1,
    from: "New York JFK Airport",
    to: "LAX Airport",
    stops: [
      { name: "Santa Barbara", coords: "34.9428, -116.8653", img: "images/calico.jpg" },
      { name: "Vandenberg Space Force Base Visitor Cente", coords: "35.0121, -115.4708", img: "images/mojave.jpg" },
      { name: "Pismo Beach", coords: "35.0121, -115.4708", img: "images/mojave.jpg" },
    ],
    hotel: { name: "Hampton Inn By Hilton Los Angeles Airport", coords: "33.942722, -118.369611", img: "images/hotel1.png" }
  },
  {
    day: 2,
    from: "Los Angeles",
    to: "Cambria",
    stops: [
      { name: "Santa Barbara", coords: "34.9428, -116.8653", img: "images/calico.jpg" },
      { name: "Vandenberg Space Force Base Visitor Cente", coords: "35.0121, -115.4708", img: "images/mojave.jpg" },
      { name: "Pismo Beach", coords: "35.0121, -115.4708", img: "images/mojave.jpg" },
    ],
    hotel: { name: "Cambria Pines Lodge", coords: "35.558722, -121.080111", img: "images/hotel2.png" }
  },
  {
    day: 3,
    from: "Los Angeles",
    to: "Cambria",
    stops: [
      { name: "Santa Barbara", coords: "34.9428, -116.8653", img: "images/calico.jpg" },
      { name: "Vandenberg Space Force Base Visitor Cente", coords: "35.0121, -115.4708", img: "images/mojave.jpg" },
      { name: "Pismo Beach", coords: "35.0121, -115.4708", img: "images/mojave.jpg" },
    ],
    hotel: { name: "Cambria Pines Lodge", coords: "35.558722, -121.080111", img: "images/hotel3.png" }
  },
  // Voeg 20 extra dagen toe met dezelfde structuur...
];
