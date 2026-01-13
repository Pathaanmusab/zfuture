// SLIDER DATA
const sliders = [
  { type:"img", url:"https://via.placeholder.com/800x300" },
  { type:"img", url:"https://via.placeholder.com/800x300/000/fff" }
];

// CATEGORY DATA
const categories = ["All","Cables","Chargers","Headphones"];

// PRODUCT DATA
const products = [
  {
    id:1,
    name:"Fast Charger",
    price:999,
    offer:20,
    image:"https://via.placeholder.com/300",
    category:"Chargers"
  },
  {
    id:2,
    name:"USB Cable",
    price:399,
    offer:10,
    image:"https://via.placeholder.com/300",
    category:"Cables"
  }
];

// SLIDER RENDER
const sliderBox = document.getElementById("sliderBox");
sliders.forEach(s=>{
  if(s.type==="img"){
    sliderBox.innerHTML += `<img src="${s.url}">`;
  }
});

// CATEGORY RENDER
const catBox = document.getElementById("categoryBox");
categories.forEach(c=>{
  catBox.innerHTML += `<div class="cat">${c}</div>`;
});

// PRODUCT RENDER
const productBox = document.getElementById("productBox");
products.forEach(p=>{
  const offerPrice = Math.round(p.price - (p.price*p.offer/100));
  productBox.innerHTML += `
    <div class="product">
      <div class="badge">${p.offer}% OFF</div>
      <img src="${p.image}">
      <h4>${p.name}</h4>
      <div class="price">
        <span class="old">₹${p.price}</span>
        <span class="new"> ₹${offerPrice}</span>
      </div>
    </div>
  `;
});
