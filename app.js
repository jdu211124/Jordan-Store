import products from "./products.json" assert {type: 'json'};

let cart = ['2','5'];

const products_conatiner = document.querySelector(".products-container")
const cart_items_container = document.querySelector(".cart-up-side")



 for ( let i = 0; i < products.length; i++){
    let product = `
    <div class = "product">
            <img src = "./images/${products[i].image}" alt="">
         <div class="product-details">
              <div class="ptoduct-details-left-side">
                  <p class="product-name">${products[i].name}</p>
                  <p class="product-price">${products[i].currency}${products[i].price}</p>
               </div>
                   <button class="add_btn" data-id="${products[i].id}">Add to cart</button>
          </div> 
     </div>
    `;
    products_conatiner.innerHTML += product;
 }

document.querySelectorAll(".add_btn").forEach((button) => {
    button.addEventListener('click', function(e){
    cart.push(e.target.dataset.id);
    renderCart(e.target.dataset.id);
    total();
    });
});
 
document.querySelector(".clearCart").onclick = function(){
    cart = [];
    renderCart();
    total();
  }


 function renderCart(id){
       document.querySelector(".cart-item-right-side").innerHTML = "";
    
       cart.forEach(itemId=>{
         
        document.querySelector(".cart-item-right-side").innerHTML += `      
        <div class="small-cart">
             <img class="jpeg" src = "./images/${products[itemId-1].image}">
             <div class="cart-content">
                 ${products[itemId-1].name} <br>
                 ${products[itemId-1].price}${products[itemId-1].currency}
            </div>
             <div class="button"> 
                 <button class = "delete"  data-id="${products[itemId-1].id}">Delete</button>
             </div>
         </div>
     `;
     })
 

    document.querySelectorAll(".delete").forEach((btn) => {
        btn.addEventListener('click', function(e){
            // this.parentNode.parentNode.remove()
           cart.forEach((itemId, index)=>{
            if(itemId == e.target.dataset.id){
                cart.splice(index, 1);
            }
           })
           renderCart();
           total();
        });
    });
}
 
    function total() {
        const onlyTotal = document.querySelector(".total-price");
        let totalPrice = 0;
      
        if(cart.length > 0) {
          cart.forEach((item) => {
            totalPrice += parseFloat(products[item - 1].price) ;
          });  
        }
        onlyTotal.innerHTML = "Total: $" + totalPrice;
      
      }
  
  total();
   renderCart();

