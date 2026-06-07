export const user = {
  id: "usr_1001",

  name: "Pritom Saha",
  email: "pritom@example.com",
  phone: "+8801XXXXXXXXX",
  avatar: "https://i.pravatar.cc/150?img=12",

  role: "user",
  isVerified: true,

  address: {
    country: "Bangladesh",
    city: "Tangail",
    street: "Mirzapur Road",
    postalCode: "1900",
  },

  // ❤️ Larger wishlist
  wishlist: [2, 3, 5, 7, 9, 10, 12, 15, 18, 20],

  // 🛒 Bigger, realistic cart
  cart: [
    {
      productId: 1,
      qty: 2,
      selectedColor: "Black",
      selectedSize: "M",
    },
    {
      productId: 4,
      qty: 1,
      selectedColor: "Blue",
      selectedSize: "L",
    },
    {
      productId: 6,
      qty: 3,
      selectedColor: "Red",
      selectedSize: "XL",
    },
    {
      productId: 8,
      qty: 1,
      selectedColor: "White",
      selectedSize: "M",
    },
    {
      productId: 11,
      qty: 2,
      selectedColor: "Green",
      selectedSize: "S",
    },
    {
      productId: 13,
      qty: 1,
      selectedColor: "Black",
      selectedSize: "L",
    },
    {
      productId: 16,
      qty: 4,
      selectedColor: "Gray",
      selectedSize: "M",
    },
  ],

  // 📦 More orders history
  orders: ["ord_101", "ord_102", "ord_103", "ord_104"],

  createdAt: "2026-06-07T10:00:00Z",
  updatedAt: "2026-06-07T12:30:00Z",
};