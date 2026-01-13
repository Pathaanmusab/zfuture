/* =======================
   ZFUTURE – MAIN JS
======================= */

/* ---------- SLIDER ---------- */
let slides = JSON.parse(localStorage.getItem("homeSlides")) || [];
const sliderBox = document.getElementById("sliderBox");
let slideIndex = 0;

function renderSlider(){
  if(!sliderBox) return;

  sliderBox.innerHTML = "";

  slides.forEach((s,i)=>{
    sliderBox.innerHTML += `
      <div class="slide ${i===0?'active':''}">
        ${
          s.type==="video"
          ? `<video src="${s.src}" autoplay muted loop></video>`
          : `<img src="${s.src}">`
        }
        <div class="slide-text">
          <h3>${s.title||""}</h3>
          <p>${s.text||""}</p>
          ${
            s.btn
            ? `<button onclick="go('${s.link||'#'}')">${s.btn}</button>`
            : ""
          }
        </div>
      </div>
    `;
  });
}

function nextSlide(){
  let all = document.querySelectorAll(".slide");
  if(all.length===0) return;
  all.forEach(s=>s.classList.remove("active"));
  slideIndex = (slideIndex+1) % all.length;
  all[slideIndex].classList.add("active");
}

setInterval(nextSlide,4000);

function go(link){
  window.location.href = link;
}

renderSlider();

/* ---------- PRODUCTS ---------- */
let products = JSON.parse(localStorage.getItem("products")) || [];
const productBox = document.getElementById("productBox");

function loadProducts(){
  if(!productBox) return;

  const url = new URLSearchParams(window.location.search);
  const cat = url.get("category");

  productBox.innerHTML = "";

  let filtered = cat
    ? products.filter(p=>p.category===cat)
    : products;

  filtered.forEach(p=>{
    productBox.innerHTML += `
      <div class="product-card" onclick="openProduct('${p.name}')">
        <img src="${p.img}">
        <h4>${p.name}</h4>

        <div class="price">
          ₹${p.finalPrice}
          <span>₹${p.price}</span>
        </div>

        <div class="off">${p.offer}% OFF</div>
      </div>
    `;
  });
}

function openProduct(name){
  window.location.href = "product.html?product="+encodeURIComponent(name);
}

loadProducts();
