let products = JSON.parse(localStorage.getItem("products")||"[]");
let categories = JSON.parse(localStorage.getItem("categories")||"[]");

/* CATEGORY */
let catBox = document.getElementById("categoryBox");
categories.forEach(c=>{
  catBox.innerHTML+=`
  <div class="category" onclick="openCat('${c}')">
    <div class="category-circle">${c}</div>
    <p>${c}</p>
  </div>`;
});

/* SLIDER */
let slider = document.getElementById("sliderBox");
products.slice(0,5).forEach(p=>{
  if(p.images[0]){
    slider.innerHTML+=`<img src="${p.images[0]}">`;
  }
});

/* PRODUCTS */
let box = document.getElementById("productBox");
products.forEach(p=>{
  box.innerHTML+=`
  <div class="product" onclick="openP('${p.id}')">
    <div class="off-badge">${p.offer}% OFF</div>
    <img src="${p.images[0]}">
    <p>${p.name}</p>
    <div class="old">₹${p.price}</div>
    <div class="new">₹${p.finalPrice}</div>
  </div>`;
});

function openP(id){
  localStorage.setItem("viewProduct",id);
  window.location.href="product.html";
}
function openCat(c){
  alert("Category filter next step");
}
