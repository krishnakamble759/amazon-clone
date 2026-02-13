import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css             */import"./main-CCOaeQKb.js";document.addEventListener("DOMContentLoaded",()=>{const r=document.getElementById("cart-items"),s=document.getElementById("empty-cart"),i=document.querySelectorAll(".total-qty"),m=document.querySelectorAll(".total-price"),p=document.getElementById("checkout-card"),l=()=>{const t=JSON.parse(localStorage.getItem("amazon_cart")||"[]");if(t.length===0){r.innerHTML="",r.appendChild(s),p?.classList.add("opacity-50"),d(0,0);return}s.remove(),r.innerHTML="";let o=0,a=0;t.forEach((e,c)=>{const y=(e.price||"0").toString(),h=parseFloat(y.replace(/[^0-9.]/g,""))||0;o+=e.quantity,a+=h*e.quantity;const v=`
                <div class="cart-item row py-3 border-bottom g-3">
                    <div class="col-md-3">
                        <img src="${e.img}" alt="${e.title}" class="img-fluid rounded">
                    </div>
                    <div class="col-md-7">
                        <h5 class="mb-1 fw-bold">${e.title}</h5>
                        <p class="text-success small mb-1">In stock</p>
                        <p class="small text-muted mb-2">Eligible for FREE Shipping</p>
                        <div class="d-flex align-items-center gap-3 qty-controls">
                            <select class="form-select form-select-sm border-secondary w-auto bg-light rounded-3" data-index="${c}">
                                ${[1,2,3,4,5,6,7,8,9,"10+"].map(n=>`
                                    <option value="${n==="10+"?10:n}" ${e.quantity===(n==="10+"?10:n)?"selected":""}>Qty: ${n}</option>
                                `).join("")}
                            </select>
                            <span class="vr"></span>
                            <a href="#" class="small text-decoration-none delete-item" data-index="${c}">Delete</a>
                            <span class="vr"></span>
                            <a href="#" class="small text-decoration-none">Save for later</a>
                        </div>
                    </div>
                    <div class="col-md-2 text-end">
                        <h5 class="fw-bold">₹${e.price}</h5>
                    </div>
                </div>
            `;r.insertAdjacentHTML("beforeend",v)}),d(o,a),g()},d=(t,o)=>{i.forEach(a=>a.textContent=t),m.forEach(a=>a.textContent=o.toLocaleString("en-IN"))},g=()=>{document.querySelectorAll(".delete-item").forEach(t=>{t.addEventListener("click",o=>{o.preventDefault();const a=t.getAttribute("data-index"),e=JSON.parse(localStorage.getItem("amazon_cart")||"[]");e.splice(a,1),localStorage.setItem("amazon_cart",JSON.stringify(e)),l();const c=new Event("storage");window.dispatchEvent(c),window.location.reload()})}),document.querySelectorAll("select.form-select").forEach(t=>{t.addEventListener("change",o=>{const a=t.getAttribute("data-index"),e=parseInt(o.target.value),c=JSON.parse(localStorage.getItem("amazon_cart")||"[]");c[a].quantity=e,localStorage.setItem("amazon_cart",JSON.stringify(c)),l(),window.location.reload()})})},u=()=>{const t=document.querySelector("#checkout-card .btn-warning");t&&t.addEventListener("click",()=>{JSON.parse(localStorage.getItem("amazon_cart")||"[]").length>0&&(sessionStorage.removeItem("amazon_buy_now"),window.location.href="checkout.html")})};l(),u()});
