const subtotalItems = document.querySelector("#subtotal-items");
const subtotal = document.querySelector("#subtotal");
const totalItems = document.querySelector("#total-items");

const getCartInfo = async function () {
  try {
    const cart = await axios.get("/cartItems");
    let info = [0 ,0];

    for (let i = 0; i < cart.data.length; i++) {
        info[0] = info[0] + cart.data[i].quantity;
        info[1] = info[1] + cart.data[i].quantity * cart.data[i].price
    }
   
    return info;
  } catch (error) {
    console.log("Error: " + error);
  }
};

const loadPrice = async function () {
  try {
    const cartRes = await axios.get("/cartItems");
    let price = 0;

    for (let i = 0; i < cartRes.data.length; i++) {
        total = total + cart.data[i].quantity;
        
    }

    return price;
  } catch (error) {
    console.log("Error: " + error);
  }
};

window.addEventListener("load", async function () {
  let items = await getCartInfo();
  try {
    subtotalItems.innerText = `(${items[0]} Items)`;
    totalItems.innerText = `(${items[0]} Items)`;
    subtotal.innerText = `$${(Math.round(items[1] * 100) / 100).toFixed(2)}`;
  } catch (e) {
    console.log(e);
  }

  

});
