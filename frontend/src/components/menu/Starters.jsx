import React from 'react';
import MenuItem from './MenuItem';

const starterItems = [
  {
    name: "Truffle Arancini",
    price: "$18",
    desc: "Italian crispy risotto balls infused with black truffle and mozzarella.",
    img: "https://images.unsplash.com/photo-1541529086526-db283c563270?q=80&w=800&auto=format&fit=crop",
    tag: "Italian Classic"
  },
  {
    name: "Gourmet Paneer Tikka",
    price: "$20",
    desc: "Indian cottage cheese marinated in hand-ground spices and yogurt, charred in clay oven.",
    img: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?q=80&w=1317&auto=format&fit=crop",
    tag: "Indian Special"
  },
  {
    name: "Burrata & Heirloom Tomato",
    price: "$22",
    desc: "Creamy burrata, balsamic glaze, and basil oil pearls.",
    img: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Veg Manchurian Dry",
    price: "$16",
    desc: "Crispy vegetable balls tossed in a spicy, tangy soy-based sauce with ginger and garlic.",
    img: "https://images.unsplash.com/photo-1682622110433-65513a55d7da?q=80&w=687&auto=format&fit=crop",
    tag: "Indo-Chinese Fusion"
  },
  {
    name: "Mini Woodfire Pizza",
    price: "$14",
    desc: "Hand-stretched mini dough topped with San Marzano tomatoes and fresh mozzarella.",
    img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=781&auto=format&fit=crop",
    tag: "Italian Starter"
  }
];

const Starters = ({ onAddItem }) => {
  return (
    <div className="grid md:grid-cols-2 gap-10">
      {starterItems.map((item, index) => (
        <MenuItem key={index} item={item} onAddItem={onAddItem} />
      ))}
    </div>
  );
};

export default Starters;
