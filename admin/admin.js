let sliders = JSON.parse(localStorage.getItem("sliders")) || [];
let categories = JSON.parse(localStorage.getItem("categories")) || [];
let products = JSON.parse(localStorage.getItem("products")) || [];

const catSelect = document.getElementById("pCat");
categories.forEach(c=>catSelect.innerHTML+=`<option>${c}</option>`);

function addSlider(){
  sliders.push({
    image:sImg.value,
    text:sText.value,
    link:sLink.value
  });
  localStorage.setItem("sliders",JSON.stringify(sliders));
  alert("Slider Added");
}

function addCategory(){
  categories.push(catName.value);
  localStorage.setItem("categories",JSON.stringify(categories));
  location.reload();
}

function addProduct(){
  products.push({
    name:pName.value,
    price:+pPrice.value,
    offer:+pOffer.value,
    category:pCat.value,
    image:pImg.value
  });
  localStorage.setItem("products",JSON.stringify(products));
  alert("Product Added");
}
