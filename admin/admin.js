let categories = JSON.parse(localStorage.getItem("categories")||"[]");
let products = JSON.parse(localStorage.getItem("products")||"[]");

function save(){
  localStorage.setItem("categories",JSON.stringify(categories));
  localStorage.setItem("products",JSON.stringify(products));
}

function addCategory(){
  let c = catName.value.trim();
  if(!c) return;
  categories.push(c);
  save();
  catName.value="";
  showCats();
}

function showCats(){
  catList.innerHTML="";
  categories.forEach(c=>{
    catList.innerHTML+=`<div>${c}</div>`;
  });
}
showCats();

/* PRODUCT */
function addProduct(){
  let price = Number(pPrice.value);
  let offer = Number(pOffer.value)||0;
  let final = price - (price*offer/100);

  let obj={
    id:Date.now().toString(),
    name:pName.value,
    price:price,
    offer:offer,
    finalPrice:Math.round(final),
    category:pCategory.value,
    desc:pDesc.value,
    warranty:pWarranty.value,
    return:pReturn.value,
    images:pImages.value.split(",")
  };

  products.push(obj);
  save();
  showProducts();

  pName.value="";
  pPrice.value="";
  pOffer.value="";
  pCategory.value="";
  pDesc.value="";
  pWarranty.value="";
  pReturn.value="";
  pImages.value="";
}

function showProducts(){
  productList.innerHTML="";
  products.forEach(p=>{
    productList.innerHTML+=`
    <div class="product">
      <b>${p.name}</b>
      <div class="small">${p.category}</div>
      <div>₹${p.finalPrice}</div>
      <button onclick="view('${p.id}')">View</button>
      <button onclick="del('${p.id}')">Delete</button>
    </div>`;
  });
}
showProducts();

function del(id){
  products = products.filter(p=>p.id!==id);
  save();
  showProducts();
}

function view(id){
  localStorage.setItem("viewProduct",id);
  window.open("../product.html","_blank");
}
