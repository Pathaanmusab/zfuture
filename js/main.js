let products = JSON.parse(localStorage.getItem("products")||"[]");
let categories = JSON.parse(localStorage.getItem("categories")||"[]");

const slider = document.getElementById("slider");
const productBox = document.getElementById("productBox");
const catRow = document.getElementById("categoryRow");
const catMenu = document.getElementById("catMenu");

/* MENU */
function toggleCat(){
  catMenu.style.display = catMenu.style.display=="block"?"none":"block";
}

categories.forEach(c=>{
  catMenu.innerHTML+=`<div onclick="filterCat('${c}')">${c}</div>`;
  catRow.innerHTML+=`
  <div class="cat" onclick="filterCat('${c}')">
    <div>${c}</div>
    <small>${c}</small>
  </div>`;
});

/* SLIDER */
products.slice(0,5).forEach(p=>{
  if(p.images[0]){
    slider.innerHTML+=`
    <div class="slide">
      <img src="${p.images[0]}">
    </div>`;
  }
});

/* PRODUCTS */
function show(list){
  productBox.innerHTML="";
  list.forEach(p=>{
    productBox.innerHTML+=`
    <div class="product" onclick="openP('${p.id}')">
      ${p.offer?`<div class="off">${p.offer}% OFF</div>`:""}
      <img src="${p.images[0]}">
      <p>${p.name}</p>
      <div class="old">₹${p.price}</div>
      <div class="new">₹${p.finalPrice}</div>
    </div>`;
  });
}
show(products);

/* FILTER */
function filterCat(c){
  show(products.filter(p=>p.category==c));
  catMenu.style.display="none";
}

/* PRODUCT PAGE */
function openP(id){
  localStorage.setItem("viewProduct",id);
  window.location.href="product.html";
}
