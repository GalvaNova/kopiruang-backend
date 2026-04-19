const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const Menu = require("../models/menu");
const Testimonial = require("../models/Testimonial");

const menus = [
  {
    name: "Espresso",
    slug: "espresso",
    description: "Shot espresso pekat dari biji kopi Toraja pilihan",
    price: 25000,
    image: "/images/menu/espresso.png",
    category: "espresso",
    isBestSeller: false,
  },
  {
    name: "Cappuccino",
    slug: "cappuccino",
    description: "Espresso dengan susu steam dan foam yang lembut",
    price: 35000,
    image: "/images/menu/cappucino.png",
    category: "espresso",
    isBestSeller: true,
  },
  {
    name: "Kopi Ruang Signature",
    slug: "kopi-ruang-signature",
    description:
      "Racikan spesial house blend dengan sentuhan caramel dan vanilla",
    price: 42000,
    image: "/images/menu/kopisign.png",
    category: "signature",
    isBestSeller: true,
  },
  {
    name: "Brown Sugar Latte",
    slug: "brown-sugar-latte",
    description: "Latte manis dengan gula aren asli Indonesia",
    price: 40000,
    image: "/images/menu/brownsugar.png",
    category: "signature",
    isBestSeller: true,
  },
  {
    name: "V60 Single Origin",
    slug: "v60-single-origin",
    description: "Manual brew V60 dengan biji kopi single origin Gayo",
    price: 38000,
    image: "/images/menu/v60.png",
    category: "manual-brew",
    isBestSeller: false,
  },
  {
    name: "Pour Over Flores",
    slug: "pour-over-flores",
    description: "Kopi manual pour over dari kopi Flores yang fruity",
    price: 40000,
    image: "/images/menu/pourover.png",
    category: "manual-brew",
    isBestSeller: false,
  },
  {
    name: "Croissant Butter",
    slug: "croissant-butter",
    description: "Croissant renyah buatan sendiri dengan mentega premium",
    price: 28000,
    image: "/images/menu/croissant.png",
    category: "pastry",
    isBestSeller: true,
  },
  {
    name: "Banana Cake",
    slug: "banana-cake",
    description: "Kue pisang homemade yang lembut dan harum",
    price: 25000,
    image: "/images/menu/bananacake.png",
    category: "pastry",
    isBestSeller: false,
  },
  {
    name: "Matcha Latte",
    slug: "matcha-latte",
    description: "Matcha premium Jepang dengan susu segar",
    price: 38000,
    image: "/images/menu/matchalatte.png",
    category: "non-coffee",
    isBestSeller: false,
  },
];

const testimonials = [
  {
    name: "Rizky Aditya",
    rating: 5,
    review:
      "Kopi terenak yang pernah saya coba! Tempatnya nyaman banget buat kerja sambil ngopi.",
  },
  {
    name: "Sari Dewi",
    rating: 5,
    review:
      "Signature drink-nya juara! WiFi kenceng, kursinya nyaman, pokoknya recommended.",
  },
  {
    name: "Budi Santoso",
    rating: 5,
    review:
      "Suasananya estetik banget, cocok buat foto-foto juga. Kopinya enak dan harganya reasonable.",
  },
  {
    name: "Andini Putri",
    rating: 4,
    review: "Brown Sugar Latte-nya addictive! Pasti balik lagi kesini.",
  },
  {
    name: "Fajar Nugroho",
    rating: 5,
    review:
      "Best specialty coffee in town. Baristanya juga ramah dan knowledge tentang kopi.",
  },
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      dbName: process.env.DB_NAME,
    });
    console.log("✅ Connected to MongoDB");

    await Menu.deleteMany();
    await Testimonial.deleteMany();
    console.log("🗑️  Data lama dihapus");

    await Menu.insertMany(menus);
    await Testimonial.insertMany(testimonials);
    console.log("🌱 Data berhasil di-seed!");

    process.exit(0);
  } catch (error) {
    console.error("❌ Seed error:", error.message);
    process.exit(1);
  }
};

seedDB();
