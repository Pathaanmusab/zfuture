/* =========================
   LOAD DATA FROM ADMIN
========================= */
let products = JSON.parse(localStorage.getItem("products") || "[]");
let categories = JSON.parse(localStorage.getItem("categories") || "[]");
let slides = JSON.parse(localStorage.getItem("homeSlides") || "[]");

/* =========================
   CATEGORY LOAD (CIRCLES)
========================= */
const categoryBox = document.getElementById("categoryBox");

function loadCategories(){
  if(!categoryBox) return;
  categoryBox.innerHTML = "";
  categories.forEach(cat=>{
    categoryBox.innerHTML += `
      <div class="cat" onclick="openCategory('${cat}')">
        <div class="cat-circle">${cat}</div>
        <div>${cat}</div>
      </div>
    `;
  });
}

function openCategory(cat){
  localStorage.setItem("filterCategory", cat);
  showAll();
}

/* =========================
   SLIDER LOAD
========================= */
const sliderBox = document.getElementById("sliderBox");

function loadSlider(){
  if(!sliderBox) return;
  sliderBox.innerHTML = "";

  slides.forEach(s=>{
    if(s.type === "video"){
      sliderBox.innerHTML += `
        <div class="slide">
          <video src="${s.src}" autoplay muted loop></video>
        </div>
      `;
    } else {
      sliderBox.innerHTML += `
        <div class="slide">
          <img src="${s.src}">
        </div>
      `;
    }
  });
}

/* =========================
   PRODUCT CARD
========================= */
const productBox = document.getElementById("productBox");

function productCard(p){
  return `
    <div class="product" onclick="openProduct('${p.id}')">
      ${p.offer ? `<div class="offer">${p.offer}% OFF</div>` : ""}
      <img src="${p.images?.[0] || ''}">
      <div>${p.name}</div>
      <div class="old">₹${p.price}</div>
      <div class="price">₹${p.finalPrice}</div>
    </div>
  `;
}

/* =========================
   TRENDING PRODUCTS
========================= */
function loadTrending(){
  if(!productBox) return;
  productBox.innerHTML = "";

  let list = [...products].slice(0,6);
  list.forEach(p=>{
    productBox.innerHTML += productCard(p);
  });
}

/* =========================
   VIEW ALL / FILTER
========================= */
function showAll(){
  productBox.innerHTML = "";

  let filter = localStorage.getItem("filterCategory");
  let list = filter
    ? products.filter(p=>p.category===filter)
    : products;

  list.forEach(p=>{
    productBox.innerHTML += productCard(p);
  });
}

/* =========================
   PRODUCT OPEN
========================= */
function openProduct(id){
  localStorage.setItem("viewProduct", id);
  window.location.href = "product.html";
}

/* =========================
   INIT
========================= */
loadCategories();
loadSlider();
loadTrending();
