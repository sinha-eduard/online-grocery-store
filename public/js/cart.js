const subtotalItems = document.querySelector("#subtotal-items");
const totalItems = document.querySelector("#total-items");

const getCart = async function () {
  try {
    const results = await axios.get("/cartItems");
    console.log(results.data[0]._id);
    return results;
  } catch (error) {
    console.log("Error: " + error);
  }
};

const loadPrice = async function () {
  try {
    const cartRes = await axios.get("/cartItems");
    const productRes = await axios.get("/productData");

 

    return results;
  } catch (error) {
    console.log("Error: " + error);
  }
};

window.addEventListener("load", async function () {
  let items = await getCart();
  try {
    subtotalItems.innerText = `(${items.data.length} Items)`;
    totalItems.innerText = `(${items.data.length} Items)`;
  } catch (e) {
    console.log(e);
  }
});
