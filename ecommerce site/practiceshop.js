let carts = document.getElementsByClassName("add");
let products = [
    {
        name: "Grey Tshirt",
        tag: "greyshirt",
        price: 15,
        inCart: 0
    },
    {
        name: "Grey Hoddie",
        tag: "greyhoddie",
        price: 20,
        inCart: 0,
    },
    {
        name: "Black Tshirt",
        tag: "blackshirt",
        price: 15,
        inCart: 0
    },

    {
        name: "Black sdshirt",
        tag: "blackdhirt",
        price: 19,
        inCart: 0
    }
]
for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener("click", () => {
        cartNumbers(products[i]);
        totalCost(products[i])
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem("cartNumbers");
    if (productNumbers) {
        document.querySelector(".cart i").textContent = productNumbers;
    }
}
function cartNumbers(products) {
    let productNumbers = localStorage.getItem("cartNumbers");
    productNumbers = parseInt(productNumbers);
    if (productNumbers) {
        localStorage.setItem("cartNumbers", productNumbers + 1);

        document.querySelector(".cart i").textContent = productNumbers + 1;
    } else {
        localStorage.setItem("cartNumbers", 1);
        document.querySelector(".cart i").textContent = 1;
    }
    setItems(products);
}
function setItems(products) {
    let cartItems = localStorage.getItem("productInCart");
    cartItems = JSON.parse(cartItems);
    if (cartItems != null) {
        if (cartItems[products.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [products.tag]: products
            }
        }
        cartItems[products.tag].inCart += 1;
    } else {
        products.inCart = 1;
        cartItems = {
            [products.tag]: products
        }
    }

    localStorage.setItem("productInCart", JSON.stringify(cartItems))
}

function totalCost(product){
    let cartCost = localStorage.getItem("totalCost");

    if(cartCost != null){
         cartCost = parseInt(cartCost);
         localStorage.setItem("totalCost", cartCost + product.price)
    }else{
        localStorage.setItem("totalCost", product.price)
    }
}
function displayCart(){
    let productContainer = document.querySelector(".products-container");
    if(cartItems && productContainer){
        console.log("runing")
    }
let cartItems = localStorage.getItem("productInCart");
cartItems =  JSON.parse(cartItems);
console.log(cartItems)
}

onLoadCartNumbers();
displayCart();