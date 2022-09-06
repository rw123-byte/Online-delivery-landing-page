let addProduct = false;

document.addEventListener("DOMContentLoaded", () => {
    const paragraphBtn = document.querySelector("#new-product-btn");
    const toyFormContainerDiv = document.querySelector(".container");
    paragraphBtn.addEventListener("click", () => {
        addProduct = !addProduct;
        if (addProduct) {
            productFormContainerDiv.style.display = "block";
        } else {
            productFormContainerDiv.style.display = "none";
        }
    });
});

function gettingCard(productData) {
    let card = document.createElement('div')
    card.className = `card`
    card.innerHTML = `
  <h2>${productData.name}</h2>
  <img src="${productData.image}" class="product-avatar" />
  <p>${productData.order} order</p>
  <button class="order-btn" id="[product_id]">Order</button>
  `
    card.querySelector('.order-btn').addEventListener('click', () => {
        let totalOrders = productData.order = +1
        card.querySelector('p').textContent = totalOrders + 'orders'
        orders(productData)
    })
    document.querySelector('#product-collection').appendChild(card)
}