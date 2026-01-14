let categories = JSON.parse(localStorage.getItem("categories")) || [];
let products = JSON.parse(localStorage.getItem("products")) || [];

const catList = document.getElementById("catList");
const pCategory = document.getElementById("pCategory");
const productList = document.getElementById("productList");

function save(){
  localStorage.setItem("categories", JSON.stringify(categories));
  localStorage.setItem("products", JSON.stringify(products));
}

/* CATEGORY */
function addCategory(){
  let name = catName.value.trim();
  if(!name) return;
  categories.push(name);
  catName.value="";
  save();
  renderCategories();
}

function renderCategories(){
  catList.innerHTML="";
  pCategory.innerHTML="";
  categories.forEach((c,i)=>{
    catList.innerHTML += `<li>${c}</li>`;
    pCategory.innerHTML += `<option>${c}</option>`;
  });
}

/* PRODUCT */
function addProduct(){
  let p = {
    id: Date.now(),
    name: pName.value,
    price: pPrice.value,
    category: pCategory.value,
    images: pImages.value.split(",").map(i=>i.trim()),
    warranty: pWarranty.value,
    return: pReturn.value
  };
  products.push(p);
  save();
  renderProducts();
}

function deleteProduct(id){
  products = products.filter(p=>p.id!==id);
  save();
  renderProducts();
}

function renderProducts(){
  productList.innerHTML="";
  products.forEach(p=>{
    productList.innerHTML += `
      <div class="product">
        <b>${p.name}</b> – ₹${p.price}
        <small>Category: ${p.category}</small>
        <small>Warranty: ${p.warranty}</small>
        <small>Return: ${p.return}</small>
        <small>Images: ${p.images.length}</small>
        <div class="actions">
          <button onclick="deleteProduct(${p.id})">Delete</button>
        </div>
      </div>
    `;
  });
}

renderCategories();
renderProducts();
