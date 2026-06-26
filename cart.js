const cartItemsContainer =
document.getElementById("cartItems");

const totalItems =
document.getElementById("totalItems");

const totalPrice =
document.getElementById("totalPrice");

const checkoutBtn =
document.getElementById("checkoutBtn");

// Load Cart

function loadCart(){

let cart =
JSON.parse(localStorage.getItem("cart")) || [];

if(!cartItemsContainer) return;

cartItemsContainer.innerHTML="";

let total = 0;

cart.forEach((product,index)=>{

total += product.price;

cartItemsContainer.innerHTML += `

<div class="cart-item">

<img
src="${product.image}"
alt="${product.name}">

<div class="cart-details">

<h3>

${product.name}

</h3>

<p class="cart-price">

₹${product.price}

</p>

</div>

<button
class="remove-btn"
onclick="removeItem(${index})">

Remove

</button>

</div>

`;

});

totalItems.textContent = cart.length;

totalPrice.textContent = total;

}

// Remove Item

function removeItem(index){

let cart =
JSON.parse(localStorage.getItem("cart")) || [];

cart.splice(index,1);

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

loadCart();

}

// Checkout

if(checkoutBtn){

checkoutBtn.addEventListener("click",()=>{

const cart =
JSON.parse(localStorage.getItem("cart")) || [];

if(cart.length===0){

alert("Your cart is empty.");

return;

}

alert("Order placed successfully!");

localStorage.setItem(
"cart",
JSON.stringify([])
);

loadCart();

});

}

loadCart();