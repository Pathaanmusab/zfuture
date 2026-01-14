let products = JSON.parse(localStorage.getItem("products")) || [];
let slider = JSON.parse(localStorage.getItem("slider")) || [];

function addSlider(){
  slider.push({
    url: surl.value,
    type: stype.value
  });
  localStorage.setItem("slider",JSON.stringify(slider));
  alert("Slider Added");
}

function addProduct(){
  products.push({
    name:name.value,
    price:+price.value,
    offer:+offer.value,
    images:images.value.split(","),
    category:category.value,
    warranty:warranty.value,
    return:returnp.value,
    hide:false
  });
  localStorage.setItem("products",JSON.stringify(products));
  location.reload();
}

const list = document.getElementById("list");
products.forEach((p,i)=>{
  list.innerHTML += `
  <div class="card">
    <b>${p.name}</b><br>
    <button onclick="del(${i})">Delete</button>
    <button onclick="hide(${i})">${p.hide?'Show':'Hide'}</button>
  </div>`;
});

function del(i){
  products.splice(i,1);
  localStorage.setItem("products",JSON.stringify(products));
  location.reload();
}

function hide(i){
  products[i].hide = !products[i].hide;
  localStorage.setItem("products",JSON.stringify(products));
  location.reload();
}
