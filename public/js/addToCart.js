let addToCartBtn = document.querySelectorAll("#add-to-cart-btn");
const cartCount = document.querySelector("#cart-count");

const addToCart = async function (id) {
  const cart = await axios.get("/cartItems");
  for (let i = 0; i < cart.data.length; i++) {
    if (cart.data[i].product == id) {
      try {
        let id = cart.data[i]._id;
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

const updateIcon = async function () {
  try {
    const cart = await axios.get("/cartItems");
    let info = 0;

    for (let i = 0; i < cart.data.length; i++) {
      info = info + cart.data[i].quantity;
    }

    cartCount.innerText = info;
  } catch (error) {
    console.log("Error: " + error);
  }
};

addToCartBtn.forEach(function async(curBtn) {
  curBtn.addEventListener("click", async function (e) {
    await addToCart(curBtn.name);
    await updateIcon()
  });
});

window.addEventListener("load", async function () {
  await updateIcon()
})
