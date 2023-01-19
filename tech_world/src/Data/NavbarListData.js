export const navbarList = [
  {
    name: "STORE",
    id: 1,
    submenu: false,
    sublinks: [],
  },
  {
    name: "PHONE",
    id: 2,
    submenu: true,
    sublinks: [
      {
        head: "iPhone",
      },
      {
        head: "Acer",
      },
      {
        head: "HUAWEI"
      },
      {
        head: "HTC",
      },
      {
        head: "Realme",
      }
    ],
  },
  {
    name: "TV & Smart Home",
    id: 3,
    submenu: true,
    sublinks: [
      {
        head: "TV",
        sublink: [
          { name: "Xiaomi TV", link: "/xiaomi-tv" },
          { name: "Redmi TV", link: "/redmi-tv" },
          { name: "Realme TV", link: "/realme-tv" },
          { name: "OnePlus TV", link: "/oneplus-tv" },
          { name: "QLED TV & OLED TV", link: "/oled-tv" },
          { name: "TV Accessories", link: "/tv-accessories" },
        ],
      },
      {
        head: "Smarter Living",
        sublink: [
          { name: "Security Cameras", link: "/security-cameras" },
          { name: "Smart Lights", link: "/smart-lights" },
          { name: "Smart Fan", link: "/smart-fan" },
          { name: "Air Fryer", link: "/air-fryer" }
        ],
      },
      {
        head: "Smart Appliances",
        sublink: [
          { name: "Water Purifier", link: "/water-purifier" },
          { name: "Smart Vacuum Cleaners", link: "/smart-vacuum-cleaners" },
          { name: "Air Purifier", link: "/air-purifier" }
        ],
      }
    ],
  },
  {
    name: "Laptop & Tablet",
    id: 4,
    submenu: true,
    sublinks: [
      {
        head: "Laptops",
        sublink: [
          { name: "Xiaomi Notebook", link: "/xiaomi-notebook" },
          { name: "Redmibook", link: "/redmibook" },
        ],
      },
      {
        head: "Tablets",
        sublink: [
          { name: "Xiaomi Pad", link: "/xiaomi-pad" },
          { name: "Redmi Pad", link: "/redmi-pad" },
          { name: "Tablet Accessories", link: "/tablet-accessories" },
        ],
      },
    ],
  },
  {
    name: "LifeStyle",
    id: 6,
    submenu: true,
    sublinks: [
      {
        head: "Powerbanks & Chargers",
        sublink: [
          { name: "Power-Bank", link: "/power-Bank" },
          { name: "Charger", link: "/charger" },
          { name: "Cable", link: "/cable" },
        ],
      },
      {
        head: "Grooming and Hygiene",
        sublink: [
          {
            name: "Trimmers",
            link: "/trimmers",
          },
          { name: "Toothbrush", link: "/trimmers" },
          { name: "Masks", link: "/masks" },
        ],
      },
      {
        head: "Audio",
        sublink: [
          {
            name: "Wired earphones",
            link: "/wired=earphones",
          },
          { name: "Wireless Earphones", link: "/wireless-earphones" },
          { name: "Earbuds", link: "/earbuds" },
          { name: "Speakers", link: "/speakers" },
        ],
      },
      {
        head: "Wearables",
        sublink: [
          {
            name: "Smart Watches",
            link: "/smart-watches",
          },
          { name: "Watch Accessories", link: "/watch-accessories" },
          { name: "Fitness Bands", link: "/fitness-bands" },
          { name: "Band Accessories", link: "/band-accessories" },
        ],
      },
    ],
  }
];
