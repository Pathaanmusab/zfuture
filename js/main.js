// SINGLE PRODUCT DATA (Admin se future me aayega)
const product = {
  name:"Fast Charger 65W",
  price:1999,
  offer:25,
  description:"Fast charging supported. Durable and safe.",
  warranty:"6 Months",
  return:"7 Days Return",
  images:[
    "https://via.placeholder.com/400",
    "https://via.placeholder.com/400/000",
    "https://via.placeholder.com/400/555"
  ]
};

// LOAD PRODUCT
if(document.getElementById("pName")){
  const offerPrice = Math.round(product.price - (product.price*product.offer/100));

  document.getElementById("pName").innerText = product.name;
  document.getElementById("oldPrice").innerText = "₹"+product.price;
  document.getElementById("newPrice").innerText = " ₹"+offerPrice;
  document.getElementById("pDesc").innerText = product.description;
  document.getElementById("pWarranty").innerText = product.warranty;
  document.getElementById("pReturn").innerText = product.return;

  document.getElementById("mainImg").src = product.images[0];

  const thumbBox = document.getElementById("thumbBox");
  product.images.forEach(img=>{
    thumbBox.innerHTML += `<img src="${img}" onclick="document.getElementById('mainImg').src='${img}'">`;
  });
}
