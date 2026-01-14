let products = JSON.parse(localStorage.getItem("products")||"[]");
let categories = JSON.parse(localStorage.getItem("categories")||"[]");

function addProduct(){
  let price = +priceInput.value;
  let offer = +offerInput.value;
  let finalPrice = price - (price*offer/100);

  let product = {
    id: Date.now(),
    name: name.value,
    price,
    offer,
    finalPrice,
    category: category.value,
    desc: desc.value,
    images: [img1.value, img2.value, img3.value].filter(x=>x),
    return: return.value,
    returnDays: returnDays.value,
    warranty: warranty.value,
    warrantyTime: warrantyTime.value
  };

  products.push(product);
  localStorage.setItem("products", JSON.stringify(products));

  if(!categories.includes(product.category)){
    categories.push(product.category);
    localStorage.setItem("categories", JSON.stringify(categories));
  }

  alert("Product Added");
  location.reload();
}

let list=document.getElementById("list");
products.forEach(p=>{
  list.innerHTML+=`
    <div class="card">
      <b>${p.name}</b><br>
      ₹${p.finalPrice} (${p.offer}% OFF)
    </div>`;
});
