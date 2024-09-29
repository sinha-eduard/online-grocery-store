let addToCartBtn = document.querySelectorAll("#add-to-cart-btn");

const addToCart = async function (id) {
  const cart = await axios.get("/cartItems");
  for (let i = 0; i < cart.data.length; i++) {
    if (cart.data[i].product == id) {
      try {
        let id = cart.data[i]._id
        return await axios({
          method: "put",
          url: "/cartItems",
          data: {
            cartId: id,
            plus: true,
          },
        });
        
      } catch (e) {
        console.log(e);
      }
      
    }
  }

  return await axios
    .post("/cart", {
      product: id,
      quantity: 1,
    })
    .then((response) => console.log("Success:" + response))
    .then((error) => console.log("Error:" + error));
};

addToCartBtn.forEach(function async(curBtn) {
  curBtn.addEventListener("click", async function (e) {
    await addToCart(curBtn.name);
  });
});
