let categories = JSON.parse(localStorage.getItem("categories")) || [];
let products = JSON.parse(localStorage.getItem("products")) || [];

const catList = document.getElementById("catList");
const catSelect = document.getElementById("pCategory");
const productList = document.getElementById("productList");

function save(){
  localStorage.setItem("categories", JSON.stringify(categories));
  localStorage.setItem("products", JSON.stringify(products));
}

function renderCategories(){
  catList.innerHTML = "";
  catSelect.innerHTML = "";
  categories.forEach((c,i)=>{
    catList.innerHTML += `<li>${c} <button onclick="delCat(${i})">X</button></li>`;
    catSelect.innerHTML += `<option value="${c}">${c}</option>`;
  });
}

function addCategory(){
  let name = document.getElementById("catName").value.trim();
  if(!name) return;
  categories.push(name);
  document.getElementById("catName").value="";
  save(); renderCategories();
}

function delCat(i){
  categories.splice(i,1);
  save(); renderCategories();
}

function addProduct(){
  let price = +pPrice.value;
  let offer = +pOffer.value || 0;
  let finalPrice = price - (price*offer/100);

  products.push({
    name:pName.value,
    price,
    offer,
    finalPrice,
    category:pCategory.value,
    images:pImages.value.split(",").map(i=>i.trim()),
    video:pVideo.value,
    warranty:pWarranty.value,
    return:pReturn.value,
    hide:pHide.checked
  });

  document.querySelectorAll("input").forEach(i=>i.value="");
  pHide.checked=false;

  save(); renderProducts();
}

function renderProducts(){
  productList.innerHTML="";
  products.forEach((p,i)=>{
    productList.innerHTML += `
      <div class="product">
        <b>${p.name}</b> (${p.category})<br>
        <span class="small">₹${p.finalPrice} (${p.offer}% off)</span><br>
        <span class="small">Warranty: ${p.warranty}</span><br>
        <span class="small">Return: ${p.return}</span><br>
        <span class="small">Images: ${p.images.length}</span><br>
        <span class="small">Hidden: ${p.hide}</span><br>
        <button onclick="delProduct(${i})">Delete</button>
      </div>
    `;
  });
}

function delProduct(i){
  products.splice(i,1);
  save(); renderProducts();
}

renderCategories();
renderProducts();
