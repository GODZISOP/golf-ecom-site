export const PRODUCTS = [
  {
    id: "hat-royal-crest",
    name: "Three Off the Tee Crest Royal Snapback",
    category: "headwear",
    type: "Hats",
    price: 36,
    originalPrice: 42,
    rating: 4.9,
    reviews: 88,
    image: "/media/image copy 7.png",
    badge: "BEST SELLER",
    specs: "Structured High-Crown • Royal Blue • Embroidered Golf Crest",
    description: "Royal blue high-crown snapback cap featuring the classic 3 Off the Tee crest logo embroidered on the front. Built with a durable structured front, breathable mesh sides, and premium sweatband designed for sunny California fairways.",
    features: [
      "High-density 3D embroidered front crest logo",
      "Structured 6-panel high-crown profile",
      "Moisture-wicking internal sweatband",
      "Adjustable snapback closure (fits most sizes)",
      "Designed & tested in Southern California"
    ]
  },
  {
    id: "hat-navy-tech",
    name: "Three Off the Tee Navy Tech Performance Cap",
    category: "headwear",
    type: "Hats",
    price: 38,
    originalPrice: 45,
    rating: 5.0,
    reviews: 124,
    image: "/media/image copy 9.png",
    badge: "NEW RELEASE",
    specs: "Laser Perforated Tech Mesh • Gold Laurel Wreath • Moisture Wicking",
    description: "Navy blue premium perforated performance tech cap featuring custom gold laurels and white 3 Off the Tee embroidery. Engineered for maximum airflow, heat dissipation, and ultra-lightweight comfort during afternoon rounds.",
    features: [
      "Custom gold laurel wreath & white 3 embroidery",
      "Laser-cut side & back perforation for cooling",
      "Water-repellent performance fabric",
      "Lightweight ergonomic fit with snapback",
      "Firefighter tested for active durability"
    ]
  }
];

export function getProductById(id) {
  return PRODUCTS.find((product) => product.id === id) || null;
}
