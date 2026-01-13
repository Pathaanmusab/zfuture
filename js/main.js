/* DATA */
let sliders = JSON.parse(localStorage.getItem("sliders")) || [];
let categories = JSON.parse(localStorage.getItem("categories")) || [];
let products = JSON.parse(localStorage.getItem("products")) || [];

/* SLIDER */
const sliderBox = document.getElementById("sliderBox");
if(sliderBox){
  sliders.forEach(s=>{
    sliderBox.innerHTML += `
      <div class="slide">
        <img src="${s.image}">
        <button onclick="location.href='${s.link}'">${s.text}</button>
      </div>`;
  });
}

/* CATEGORIES */
const catBox = document.getElementById("categoryBox");
if(catBox){
  categories.forEach(c=>{
    catBox.innerHTML += `
      <div class="category" onclick="openCat('${c}')">
        <div class="circle">${c}</div>
        <p>${c}</p>
      </div>`;
  });
}

function openCat(cat){
  location.href="product.html?cat="+cat;
}

/* PRODUCTS */
const productBox = document.getElementById("productBox");
const params = new URLSearchParams(window.location.search);
const cat = params.get("cat");

if(productBox){
  let list = cat ? products.filter(p=>p.category==cat) : products;
  if(document.getElementById("catTitle")) document.getElementById("catTitle").innerText = cat;

  list.forEach(p=>{
    let final = p.price - (p.price*p.offer/100);
    productBox.innerHTML += `
      <div class="card">
        <img src="${p.image}">
        <h4>${p.name}</h4>
        <div class="price">
          ₹${final}
          ${p.offer>0 ? `<span class="old">₹${p.price}</span>`:""}
        </div>
      </div>`;
  });
}
