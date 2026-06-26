const products=[

{
id:1,
name:"Premium Notebook",
price:299,
category:"Books",
image:"images/notebook.png"
},

{
id:2,
name:"Luxury Pen",
price:199,
category:"Pens",
image:"images/pen.png"
},

{
id:3,
name:"School Bag",
price:999,
category:"Bags",
image:"images/bag.png"
},

{
id:4,
name:"Color Kit",
price:399,
category:"Art",
image:"images/colors.png"
},

{
id:5,
name:"Sketch Book",
price:249,
category:"Books",
image:"images/sketchbook.png"
},

{
id:6,
name:"Marker Set",
price:349,
category:"Art",
image:"images/markers.png"
}

];

const productContainer=document.getElementById("productContainer");
const searchBox=document.getElementById("searchBox");
const categoryFilter=document.getElementById("categoryFilter");

// Display Products

function displayProducts(items){

if(!productContainer) return;

productContainer.innerHTML="";

items.forEach(product=>{

productContainer.innerHTML+=`

<div class="product-card">

<img
src="${product.image}"
alt="${product.name}">

<div class="product-info">

<h3>

${product.name}

</h3>

<p class="price">

₹${product.price}

</p>

<p>

${product.category}

</p>

<button
class="btn"
onclick="addToCart(${product.id})">

Add To Cart

</button>

</div>

</div>

`;

});

}

// Add To Cart

function addToCart(id){

const cart=
JSON.parse(localStorage.getItem("cart"))||[];

const product=
products.find(item=>item.id===id);

cart.push(product);

localStorage.setItem(

"cart",

JSON.stringify(cart)

);

alert(product.name+" added to cart.");

}

// Search

if(searchBox){

searchBox.addEventListener("input",()=>{

const keyword=
searchBox.value.toLowerCase();

const filtered=
products.filter(product=>

product.name.toLowerCase().includes(keyword)

);

displayProducts(filtered);

});

}

// Category Filter

if(categoryFilter){

categoryFilter.addEventListener("change",()=>{

const category=
categoryFilter.value;

if(category==="all"){

displayProducts(products);

return;

}

const filtered=
products.filter(product=>

product.category===category

);

displayProducts(filtered);

});

}

// Initial Load

displayProducts(products);