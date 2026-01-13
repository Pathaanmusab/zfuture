let sliders = JSON.parse(localStorage.getItem("sliders")) || [];
let categories = JSON.parse(localStorage.getItem("categories")) || [];
let products = JSON.parse(localStorage.getItem("products")) || [];

const sliderList = document.getElementById("sliderList");
const catList = document.getElementById("catList");
const productList = document.getElementById("productList");
const catSelect = document.getElementById("pCat");

/* ---------- CATEGORY ---------- */
function loadCats(){
  catSelect.innerHTML="";
  catList.innerHTML="";
  categories.forEach((c,i)=>{
    catSelect.innerHTML+=`<option>${c}</option>`;
    catList.innerHTML+=`
      <div>
        ${c}
        <button onclick="delCat(${i})">Delete</button>
      </div>`;
  });
}
function addCategory(){
  let c=document.getElementById("catName").value.trim();
  if(!c)return;
  categories.push(c);
  localStorage.setItem("categories",JSON.stringify(categories));
  document.getElementById("catName").value="";
  loadCats();
}
function delCat(i){
  categories.splice(i,1);
  localStorage.setItem("categories",JSON.stringify(categories));
  loadCats();
}
loadCats();

/* ---------- SLIDER ---------- */
function showSliders(){
  sliderList.innerHTML="";
  sliders.forEach((s,i)=>{
    sliderList.innerHTML+=`
      <div>
        ${s.media}
        <button onclick="delSlider(${i})">Delete</button>
      </div>`;
  });
}
function addSlider(){
  sliders.push({
    media:sMedia.value,
    text:sText.value,
    link:sLink.value
  });
  localStorage.setItem("sliders",JSON.stringify(sliders));
  sMedia.value=sText.value=sLink.value="";
  showSliders();
}
function delSlider(i){
  sliders.splice(i,1);
  localStorage.setItem("sliders",JSON.stringify(sliders));
  showSliders();
}
showSliders();

/* ---------- PRODUCT ---------- */
function showProducts(){
  productList.innerHTML="";
  products.forEach((p,i)=>{
    productList.innerHTML+=`
      <div>
        ${p.name} (${p.category})
        <button onclick="delProduct(${i})">Delete</button>
      </div>`;
  });
}
function addProduct(){
  products.push({
    name:pName.value,
    price:pPrice.value,
    offer:pOffer.value,
    category:pCat.value,
    image:pImg.value,
    return:pReturn.value,
    warranty:pWarranty.value
  });
  localStorage.setItem("products",JSON.stringify(products));
  pName.value=pPrice.value=pOffer.value=pImg.value=pWarranty.value="";
  showProducts();
}
function delProduct(i){
  products.splice(i,1);
  localStorage.setItem("products",JSON.stringify(products));
  showProducts();
}
showProducts();
