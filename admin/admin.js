
/* CATEGORY */
let categories = JSON.parse(localStorage.getItem("categories")) || [];
let products = JSON.parse(localStorage.getItem("products")) || [];

const catList = document.getElementById("catList");
const catSelect = document.getElementById("pCategory");

function renderCategories(){
  catList.innerHTML = "";
  catSelect.innerHTML = "";

  categories.forEach(cat=>{
    catList.innerHTML += `<li>${cat}</li>`;
    catSelect.innerHTML += `<option value="${cat}">${cat}</option>`;
  });
}

function addCategory(){
  const name = document.getElementById("catName").value.trim();
  if(!name) return alert("Enter category name");

  categories.push(name);
  localStorage.setItem("categories", JSON.stringify(categories));
  document.getElementById("catName").value = "";
  renderCategories();
}

/* PRODUCT */
function addProduct(){
  const product = {
    name: document.getElementById("pName").value,
    price: document.getElementById("pPrice").value,
    offer: document.getElementById("pOffer").value,
    category: document.getElementById("pCategory").value,
    image: document.getElementById("pImage").value
  };

  if(!product.name || !product.price) {
    alert("Fill all required fields");
    return;
  }

  products.push(product);
  localStorage.setItem("products", JSON.stringify(products));

  alert("Product Saved ✅");

  document.getElementById("pName").value="";
  document.getElementById("pPrice").value="";
  document.getElementById("pOffer").value="";
  document.getElementById("pImage").value="";
}

renderCategories();
