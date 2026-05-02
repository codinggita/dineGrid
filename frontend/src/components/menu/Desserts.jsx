import React from 'react';
import MenuItem from './MenuItem';

const dessertItems = [
  {
    name: "Traditional Tiramisu",
    price: "$18",
    desc: "Espresso-soaked ladyfingers with creamy mascarpone and cocoa.",
    img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Sizzling Exotic Platter",
    price: "$28",
    desc: "A unique sweet and savory dessert platter served on a smoking hot iron plate.",
    img: "https://images.unsplash.com/photo-1600239448128-917653c5bf77?q=80&w=687&auto=format&fit=crop",
    tag: "Signature Dessert"
  }
];

const Desserts = ({ onAddItem }) => {
  return (
    <div className="grid md:grid-cols-2 gap-10">
      {dessertItems.map((item, index) => (
        <MenuItem key={index} item={item} onAddItem={onAddItem} />
      ))}
    </div>
  );
};

export default Desserts;
