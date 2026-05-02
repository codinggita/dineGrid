import React from 'react';
import MenuItem from './MenuItem';

const mainCourseItems = [
  {
    name: "Signature Truffle Risotto",
    price: "$38",
    desc: "Aged carnaroli rice, black truffle shavings, and 24-month parmesan.",
    img: "https://plus.unsplash.com/premium_photo-1694850980219-e5ed247af66a?q=80&w=796&auto=format&fit=crop",
    tag: "Elite"
  },
  {
    name: "Wagyu Beef Ribeye",
    price: "$65",
    desc: "A5 Grade Wagyu served with roasted bone marrow and red wine jus.",
    img: "https://plus.unsplash.com/premium_photo-1669261882102-8f51c8b113c9?q=80&w=687&auto=format&fit=crop"
  },
  {
    name: "Gourmet Butter Chicken",
    price: "$32",
    desc: "Old Delhi style charcoal smoked chicken in a velvet tomato gravy.",
    img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=1170&auto=format&fit=crop",
    tag: "Chef's Choice"
  },
  {
    name: "Pav Bhaji",
    price: "$22",
    desc: "Mumbai style mashed vegetable curry served with butter-toasted buns and red onions.",
    img: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?q=80&w=1074&auto=format&fit=crop",
    tag: "Mumbai Special"
  },
  {
    name: "Authentic Idli Sambhar",
    price: "$15",
    desc: "Soft steamed rice cakes served with aromatic lentil stew and coconut chutney.",
    img: "https://images.unsplash.com/photo-1741376509253-221ac18fac0f?q=80&w=1170&auto=format&fit=crop",
    tag: "South Indian Classic"
  },
  {
    name: "Royal Gujarati Thali",
    price: "$45",
    desc: "A grand assortment of dhokla, shaak, kadhi, rotli, dal, and sweets. A true taste of Gujarat.",
    img: "https://images.unsplash.com/photo-1680993032090-1ef7ea9b51e5?q=80&w=1074&auto=format&fit=crop",
    tag: "Royal Tradition"
  },
  {
    name: "Hyderabadi Dum Biryani",
    price: "$35",
    desc: "Aromatic basmati rice layered with succulent meat, infused with saffron and exotic spices.",
    img: "https://images.unsplash.com/photo-1716550781939-beb7d7247aae?q=80&w=687&auto=format&fit=crop",
    tag: "Iconic"
  },
  {
    name: "Exotic Vegetable Sizzler",
    price: "$28",
    desc: "A smoking hot platter of grilled vegetables, herb rice, and crispy fries with a signature garlic pepper sauce.",
    img: "https://images.unsplash.com/photo-1761315414522-a732eb715497?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tag: "Sizzling Special"
  }
];

const MainCourse = ({ onAddItem }) => {
  return (
    <div className="grid md:grid-cols-2 gap-10">
      {mainCourseItems.map((item, index) => (
        <MenuItem key={index} item={item} onAddItem={onAddItem} />
      ))}
    </div>
  );
};

export default MainCourse;
