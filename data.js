// data.js
const roadtripData = [
  {
    day: 1,
    from: "New York JFK Airport",
    to: "LAX Airport",
    stops: [
      { name: "Auto ophalen", coords: "" },
    ],
    hotel: { name: "Hampton Inn By Hilton Los Angeles Airport", coords: "33.942722, -118.369611", img: "images/hotel1.png" }
  },
  {
    day: 2,
    from: "Los Angeles",
    to: "Cambria",
    stops: [
      { name: "Malibu Beach", coords: "34.038628347593445, -118.65693679295518", img: "https://girlswhomagazine.nl/wp-content/uploads/Malibu-Beach-scaled.jpg" },
      { name: "Santa Barbara", coords: "34.9428, -116.8653", img: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/08/12/13/istock-134250006.jpg" },
      { name: "Vandenberg Space Force Base Visitor Cente", coords: "35.0121, -115.4708", img: "https://ewscripps.brightspotcdn.com/dims4/default/63c1a7e/2147483647/strip/true/crop/4032x2268+0+378/resize/1280x720!/quality/90/?url=http%3A%2F%2Fewscripps-brightspot.s3.amazonaws.com%2F19%2F61%2Faf8f7fb044e4857f26f0370b33a1%2Fvandenberg-space-force-base.jpg" },
      { name: "Pismo Beach", coords: "35.0121, -115.4708", img: "https://reddotpier.com/wp-content/webp-express/webp-images/uploads/2023/07/pismo-beach-pier-pismo-beach-pacific-ocean-california_25827.jpg.webp" },
    ],
    hotel: { name: "Cambria Pines Lodge", coords: "35.558722, -121.080111", img: "images/hotel2.png" }
  },
  {
    day: 3,
    from: "Cambria",
    to: "Monterey",
    stops: [
      { name: "McDonalds in King City", coords: "36.20300556518639, -121.13611903778286", img: "images/calico.jpg" },
      { name: "Starbucks in King City", coords: "36.20370271436367, -121.13651153725596", img: "images/mojave.jpg" },
      { name: "Taco Bell in King City", coords: "36.20279636668757, -121.13543297976454", img: "images/mojave.jpg" },
      { name: "Bixby Bridge Vista Point", coords: "36.37258158760908, -121.90306379229146", img: "images/mojave.jpg" },
    ],
    hotel: { name: "Best Western De Anza Inn", coords: "36.59689236341396, -121.86103710206167", img: "images/hotel3.png" }
  },
  {
    day: 4,
    from: "Monterey",
    to: "San Francisco",
    stops: [
      { name: "In-N-Out Burger", coords: "36.60569141608731, -121.85824136161531", img: "images/calico.jpg" },
      { name: "Starbucks", coords: "36.6079717617884, -121.85566637324806", img: "images/mojave.jpg" },
      { name: "McDonald's", coords: "36.60831596177344, -121.85606584639598", img: "images/mojave.jpg" },
      { name: "Shell Tankstation", coords: "36.609881040963025, -121.85721139773395", img: "images/mojave.jpg" },
      { name: "Santa Cruz Pier", coords: "36.96241953478573, -122.02326661283821", img: "images/mojave.jpg" },
      { name: "Henry Cowell Redwoods State Park", coords: "37.04027762099372, -122.06385193982027", img: "images/mojave.jpg" },
    ],
    hotel: { name: "Best Western De Anza Inn", coords: "36.59689236341396, -121.86103710206167", img: "images/hotel3.png" }
  },
  // Voeg 20 extra dagen toe met dezelfde structuur...
];
