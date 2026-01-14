/* LOAD DATA */
let products = JSON.parse(localStorage.getItem("products") || "[]");
let categories = JSON.parse(localStorage.getItem("categories") || "[]");

/* CATEGORY MENU */
const catMenu = document.getElementById("catMenu");

function toggleCat(){
  catMenu.style.display = catMenu.style.display==="block"?"none":"block";
}

function loadCategories(){
  catMenu.innerHTML="";
  categories.forEach(c=>{
    let d=document.createElement("div");
    d.innerText=c;
    d.onclick=()=>filterCat(c);
    catMenu.appendChild(d);
  });
}

/* SLIDER */
const slider=document.getElementById("slider");
function loadSlider(){
  slider.innerHTML="";
  products.slice(0,5).forEach(p=>{
    slider.innerHTML+=`
      <div class="card" onclick="openProduct('${p.id}')">
        ${p.offer?`<div class="offer-badge">${p.offer}% OFF</div>`:""}
        ${p.images?.[0]?`<img src="${p.images[0]}">`:""}
        <p>${p.name}</p>
      </div>
    `;
  });
}

/* PRODUCT CARD */
function productCard(p){
  return `
  <div class="product" onclick="openProduct('${p.id}')">
    ${p.offer?`<div class="offer-badge">${p.offer}% OFF</div>`:""}
    ${p.images?.[0]?`<img src="${p.images[0]}">`:""}
    <p>${p.name}</p>
    <div class="old-price">₹${p.price}</div>
    <div class="new-price">₹${p.finalPrice}</div>
  </div>`;
}

/* TRENDING */
const trending=document.getElementById("trending");
function loadTrending(){
  trending.innerHTML="";
  products.slice(0,6).forEach(p=>{
    trending.innerHTML+=productCard(p);
  });
}

/* ALL PRODUCTS */
const allBox=document.getElementById("allProducts");
function showAll(){
  allBox.innerHTML="";
  products.forEach(p=>{
    allBox.innerHTML+=productCard(p);
  });
}

/* FILTER CATEGORY */
function filterCat(cat){
  toggleCat();
  allBox.innerHTML="";
  products.filter(p=>p.category===cat).forEach(p=>{
    allBox.innerHTML+=productCard(p);
  });
}

/* OPEN PRODUCT */
function openProduct(id){
  localStorage.setItem("viewProduct", id);
  window.location.href="product.html";
}

/* INIT */
loadCategories();
loadSlider();
loadTrending();
