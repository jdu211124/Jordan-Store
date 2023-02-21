import products from "./products.json" assert {type: 'json'};

const cart = [];

const products_conatiner = document.querySelector(".products-container")
const cart_items_container = document.querySelector(".cart-up-side")


products.forEach((product) => {
    products_conatiner.innerHTML += `
    <div class = "product">
        <img src = "./images/${product.image}" alt="">
        <div class="product-details">
             <div class="ptoduct-details-left-side">
                 <p class="product-name">${product.name}</p>
                 <p class="product-price">${product.price}</p>
              </div>
           <button class="btn" data-id="${product.id}">Add to cart</button>
        </div> 
        </div>
        `;
});




document.querySelectorAll(".btn").forEach(button=>{
    button.addEventListener('click', function(e){
        addToCart(this.dataset.id)
    })
})

function addToCart(id){
    let elem;
    for (let i = 0, len = products.length; i < len; i++) {
        if(products[i].id == id) {
            elem =  products[i];
            break;  
        }   
    }
    
    document.querySelector(".cart-item-right-side").innerHTML += `      
        <div class="small-cart">
            <img class="jpeg" src = "./images/${elem.image}">
            <div class="cart-content">
                ${elem.name}
                ${elem.price}
            </div>
            <div class="button"> 
                <button class = "delete"  data-id="${elem.id}">Delete</button>
            </div>
        </div>
    `

    document.querySelectorAll(".delete").forEach(btn => {
        btn.addEventListener('click', function(e){
            this.parentNode.parentNode.remove()
        })
    })
}
