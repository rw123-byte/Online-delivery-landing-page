let addProduct = false;

document.addEventListener("DOMContentLoaded", () => {
    const paragraphBtn = document.querySelector("#new-product-btn");
    const productFormContainerDiv = document.querySelector(".container");
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

function orders(productOrder) {
    fetch(`https://fakestoreapi.com/products${productOrder.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(productOrder)
        })
        .then(res => res.json())
        .then(product => console.log(product))
}

function getProduct() {
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(productData => productData.forEach(product => gettingCard(product)))
}
getProduct();

function addingProductPost(productObj) {
    fetch('https://fakestoreapi.com/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: "application/json"
            },
            body: JSON.stringify(productObj)
        })
        .then(res => res.json())
}
addingProductPost()