import React from 'react';
import MenuItem from './MenuItem';

const breadItems = [
  {
    name: "Garlic Butter Naan",
    price: "$6",
    desc: "Traditional clay oven baked bread brushed with fresh garlic and butter.",
    img: "https://images.unsplash.com/photo-1756821752957-00bfcadc3748?q=80&w=687&auto=format&fit=crop",
    tag: "Classic"
  },
  {
    name: "Tandoori Roti",
    price: "$4",
    desc: "Whole wheat bread baked in a traditional tandoor for a smoky flavor.",
    img: "https://images.unsplash.com/photo-1559561724-4ea348cd867f?q=80&w=1171&auto=format&fit=crop"
  },
  {
    name: "Butter Roti",
    price: "$5",
    desc: "Soft and flaky whole wheat flatbread layered with premium clarified butter (ghee).",
    img: "https://images.unsplash.com/photo-1722239312666-84328fce4c6f?q=80&w=1171&auto=format&fit=crop"
  },
  {
    name: "Phulka (Rotli)",
    price: "$3",
    desc: "Light, puffed Indian flatbread roasted on an open flame.",
    img: "https://images.unsplash.com/photo-1600935926387-12d9b03066f0?q=80&w=1974&auto=format&fit=crop",
    tag: "Home Style"
  },
  {
    name: "Aloo Paratha",
    price: "$2",
    desc: "Indian taste paratha, served with oil.",
    img: "https://images.unsplash.com/photo-1580064003296-29deb3521370?q=80&w=687&auto=format&fit=crop"
  },
  {
    name: "Rosemary Focaccia",
    price: "$10",
    desc: "Italian sea salt and rosemary infused bread, served with olive oil.",
    img: "https://plus.unsplash.com/premium_photo-1700326967545-91adcec6af2a?q=80&w=687&auto=format&fit=crop"
  }
];

const Breads = ({ onAddItem }) => {
  return (
    <div className="grid md:grid-cols-2 gap-10">
      {breadItems.map((item, index) => (
        <MenuItem key={index} item={item} onAddItem={onAddItem} />
      ))}
    </div>
  );
};

export default Breads;
