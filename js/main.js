let products = JSON.parse(localStorage.getItem("products")||"[]");
let categories = JSON.parse(localStorage.getItem("categories")||"[]");
let slides = JSON.parse(localStorage.getItem("homeSlides")||"[]");

/* CATEGORIES */
const catBox = document.getElementById("categoryWrapper");
categories.forEach(c=>{
  catBox.innerHTML += `
    <div class="category-item" onclick="filterCat('${c}')">
      <div class="category-circle">${c}</div>
      <p>${c}</p>
    </div>
  `;
});

/* SLIDER */
const sliderBox = document.getElementById("sliderBox");
slides.forEach(s=>{
  sliderBox.innerHTML += `
    <div class="slide">
      <h3>${s.title||""}</h3>
      <p>${s.text||""}</p>
    </div>
  `;
});

/* PRODUCTS */
const productBox = document.getElementById("productBox");

function showProducts(list){
  productBox.innerHTML="";
  list.forEach(p=>{
    productBox.innerHTML += `
      <div class="product" onclick="openProduct('${p.name}')">
        <img src="${p.img}">
        <p>${p.name}</p>
        <div class="old-price">₹${p.price}</div>
        <div class="new-price">₹${p.finalPrice}</div>
        <div class="offer">${p.offer}% OFF</div>
      </div>
    `;
  });
}
showProducts(products);

function filterCat(cat){
  showProducts(products.filter(p=>p.category===cat));
}

function openProduct(name){
  localStorage.setItem("viewProduct",name);
  window.location.href="product.html";
}
