let products = JSON.parse(localStorage.getItem("products")||"[]");
let categories = JSON.parse(localStorage.getItem("categories")||"[]");

/* CATEGORY */
function addCategory(){
 let c=document.getElementById("catName").value.trim();
 if(!c)return;
 categories.push(c);
 localStorage.setItem("categories",JSON.stringify(categories));
 document.getElementById("catName").value="";
 renderCats();
}
function renderCats(){
 let box=document.getElementById("catList");
 box.innerHTML="";
 categories.forEach((c,i)=>{
  box.innerHTML+=`
  <div class="item">
   ${c}
   <button onclick="delCat(${i})">Delete</button>
  </div>`;
 });
}
function delCat(i){
 categories.splice(i,1);
 localStorage.setItem("categories",JSON.stringify(categories));
 renderCats();
}

/* PRODUCT */
function saveProduct(){
 let id=document.getElementById("pid").value||Date.now();
 let name=pname.value;
 let cat=pcat.value;
 let price=Number(pprice.value);
 let offer=Number(poffer.value)||0;
 let finalPrice=price - (price*offer/100);

 let images=pimages.value.split("\n").filter(x=>x);

 let obj={
  id,name,category:cat,price,offer,finalPrice,
  desc:pdesc.value,
  images,
  return:preturn.value,
  returnDays:preturnDays.value,
  warranty:pwarranty.value,
  warrantyTime:pwarrantyTime.value
 };

 let i=products.findIndex(x=>x.id==id);
 if(i>-1) products[i]=obj;
 else products.push(obj);

 localStorage.setItem("products",JSON.stringify(products));
 clearForm();
 renderProducts();
}

function renderProducts(){
 let box=document.getElementById("plist");
 box.innerHTML="";
 products.forEach(p=>{
  box.innerHTML+=`
  <div class="item">
   <b>${p.name}</b> (${p.category})<br>
   ₹${p.finalPrice}
   <div class="actions">
    <button onclick="editProduct('${p.id}')">Edit</button>
    <button onclick="delProduct('${p.id}')">Delete</button>
   </div>
  </div>`;
 });
}

function editProduct(id){
 let p=products.find(x=>x.id==id);
 pid.value=p.id;
 pname.value=p.name;
 pcat.value=p.category;
 pprice.value=p.price;
 poffer.value=p.offer;
 pdesc.value=p.desc;
 pimages.value=p.images.join("\n");
 preturn.value=p.return;
 preturnDays.value=p.returnDays;
 pwarranty.value=p.warranty;
 pwarrantyTime.value=p.warrantyTime;
}

function delProduct(id){
 products=products.filter(x=>x.id!=id);
 localStorage.setItem("products",JSON.stringify(products));
 renderProducts();
}

function clearForm(){
 document.querySelectorAll("input,textarea").forEach(i=>i.value="");
}

/* INIT */
renderCats();
renderProducts();
