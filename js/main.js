let data = JSON.parse(localStorage.getItem("products")) || [];
let slider = JSON.parse(localStorage.getItem("slider")) || [];

const sliderBox = document.getElementById("sliderBox");
slider.forEach(s=>{
  if(s.type==="video"){
    sliderBox.innerHTML += `<video src="${s.url}" autoplay muted loop></video>`;
  }else{
    sliderBox.innerHTML += `<img src="${s.url}">`;
  }
});

const productBox = document.getElementById("productBox");
data.filter(p=>!p.hide).forEach(p=>{
  productBox.innerHTML += `
  <div class="card">
    <div class="badge">${p.offer}% OFF</div>
    <img src="${p.images[0]}">
    <div class="info">
      <h4>${p.name}</h4>
      <div class="price">
        <del>₹${p.price}</del>
        ₹${p.price - (p.price*p.offer/100)}
      </div>
      <small>Warranty: ${p.warranty}</small><br>
      <small>Return: ${p.return}</small>
    </div>
  </div>`;
});
