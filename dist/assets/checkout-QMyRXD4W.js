import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css             */document.addEventListener("DOMContentLoaded",()=>{d(),u()});function d(){const t=JSON.parse(sessionStorage.getItem("amazon_buy_now"));let n=[];t?n=[t]:n=JSON.parse(localStorage.getItem("amazon_cart")||"[]");const o=document.getElementById("checkout-items-list"),c=document.getElementById("summary-items-price"),l=document.getElementById("summary-total-price");if(n.length===0){o.innerHTML='<div class="alert alert-info">Your cart is empty. <a href="products.html">Continue shopping</a>.</div>';return}o.innerHTML="";let s=0;n.forEach(e=>{const m=(e.price||"0").toString(),i=(parseFloat(m.replace(/[^0-9.]/g,""))||0)*(e.quantity||1);s+=i;const a=document.createElement("div");a.className="d-flex gap-3 mb-4",a.innerHTML=`
            <img src="${e.img}" alt="${e.title}" width="100" class="object-fit-contain rounded border">
            <div class="flex-grow-1">
                <h6 class="fw-bold mb-1">${e.title}</h6>
                <div class="text-danger fw-bold">₹${i.toLocaleString("en-IN")}</div>
                <div class="small">Qty: ${e.quantity||1}</div>
                <div class="small text-success mt-1 fw-bold">Eligible for FREE Shipping</div>
            </div>
        `,o.appendChild(a)});const r="₹"+s.toLocaleString("en-IN",{minimumFractionDigits:2});c.textContent=r,l.textContent=r}function u(){const t=document.getElementById("place-order-btn");t&&t.addEventListener("click",()=>{alert("Order placed successfully! Thank you for shopping with Amazon Clone."),sessionStorage.getItem("amazon_buy_now")?sessionStorage.removeItem("amazon_buy_now"):localStorage.removeItem("amazon_cart"),window.location.href="orders.html"})}
