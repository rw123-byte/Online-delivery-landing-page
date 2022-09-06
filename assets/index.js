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