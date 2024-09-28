let addToCartBtn = document.querySelectorAll("#add-to-cart-btn");

const addToCart = async function (id) {
  return await axios
    .post("/cart", {
      id: id,
      quantity:1
    })
    .then((response) => console.log("Success:" + response.data))
    .then((error) => console.log("Error:" + error));
};

addToCartBtn.forEach(function async(curBtn) {
  curBtn.addEventListener("click", async function (e) {
    await addToCart(curBtn.name);
  });
});
