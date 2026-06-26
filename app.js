
const featuredProducts = [

{
id:1,
name:"Premium Notebook",
price:299,
image:"images/notebook.png",
category:"Books"
},

{
id:2,
name:"Luxury Pen",
price:199,
image:"images/pen.png",
category:"Pens"
},

{
id:3,
name:"School Bag",
price:999,
image:"images/bag.png",
category:"Bags"
},

{
id:4,
name:"Color Kit",
price:399,
image:"images/colors.png",
category:"Art"
}

];

const featuredContainer =
document.getElementById("featuredProducts");

if(featuredContainer){

featuredProducts.forEach(product=>{

featuredContainer.innerHTML+=`

<div class="product-card">

<img src="${product.image}"
alt="${product.name}">

<div class="product-info">

<h3>${product.name}</h3>

<p class="price">

₹${product.price}

</p>

<a
href="product.html"
class="btn">

View Details

</a>

</div>

</div>

`;

});

}


if(localStorage.getItem("cart")==null){

localStorage.setItem("cart",JSON.stringify([]));

}