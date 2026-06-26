const routes = {

    home: "index.html",

    products: "products.html",

    product: "product.html",

    cart: "cart.html",

    about: "about.html",

    contact: "contact.html"

};

// Navigate Function

function navigate(page){

    if(routes[page]){

        window.location.href = routes[page];

    }

}

// Highlight Current Page

const currentPage =
window.location.pathname.split("/").pop();

document.querySelectorAll("nav a").forEach(link=>{

    const href = link.getAttribute("href");

    if(href===currentPage){

        link.classList.add("active");

    }

});

// Browser Back & Forward

window.addEventListener("popstate",()=>{

    console.log("Navigation Changed");

});

// Home Logo Click

const logo =
document.querySelector(".logo");

if(logo){

    logo.style.cursor="pointer";

    logo.addEventListener("click",()=>{

        navigate("home");

    });

}