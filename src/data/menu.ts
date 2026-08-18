export interface MenuItem {
  name: string;
  description: string;
  price: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  description: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: "classiche",
    title: "Pizze Classiche",
    description: "Timeless Neapolitan-style pies — simple, balanced, and true to tradition",
    items: [
      {
        name: "Margherita",
        description: "San Marzano tomatoes, fior di latte, basil, extra-virgin olive oil",
        price: "$17",
      },
      {
        name: "Marinara",
        description: "San Marzano tomatoes, garlic, oregano, extra-virgin olive oil",
        price: "$14",
      },
      {
        name: "Diavola",
        description: "Spicy soppressata, calabrian chili, fior di latte, hot honey",
        price: "$21",
      },
      {
        name: "Prosciutto e Funghi",
        description: "Fior di latte, prosciutto cotto, wild mushroom, thyme",
        price: "$22",
      },
    ],
  },
  {
    id: "signature",
    title: "Signature Pizze",
    description: "Creative combinations built around seasonal ingredients and bold flavor pairings",
    items: [
      {
        name: "Burrata Piccante",
        description: "Tomato, fior di latte, spicy salami, burrata, basil, chili oil",
        price: "$26",
      },
      {
        name: "Mortadella & Pistachio",
        description: "Fior di latte, mortadella, crushed pistachio, lemon, basil",
        price: "$25",
      },
      {
        name: "Truffle Mushroom",
        description: "Wild mushroom, truffle cream, fontina, thyme, truffle oil",
        price: "$24",
      },
      {
        name: "Spicy Honey",
        description: "Fior di latte, 'nduja, red onion, hot honey, chili flake",
        price: "$23",
      },
      {
        name: "Prosciutto & Stracciatella",
        description: "Stracciatella, prosciutto di Parma, arugula, shaved parmesan",
        price: "$25",
      },
    ],
  },
  {
    id: "sides",
    title: "From the Side",
    description: "Small plates and a classic dessert to share alongside your pie",
    items: [
      {
        name: "Garlic Knots",
        description: "48-hour dough knots, roasted garlic butter, parmesan, herbs",
        price: "$9",
      },
      {
        name: "Tomato & Burrata",
        description: "San Marzano, burrata, basil, olive oil, toasted bread",
        price: "$13",
      },
      {
        name: "Tiramisu",
        description: "Espresso-soaked ladyfingers, mascarpone, cocoa",
        price: "$11",
      },
    ],
  },
];
