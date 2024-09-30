const subtotalItems = document.querySelector("#subtotal-items");
const subtotal = document.querySelector("#subtotal");
const totalItems = document.querySelector("#total-items");
const cartDisplay = document.querySelector("#cart-body");

const getCartInfo = async function () {
  try {
    const cart = await axios.get("/cartItems");
    let info = [0, 0];

    for (let i = 0; i < cart.data.length; i++) {
      info[0] = info[0] + cart.data[i].quantity;
      info[1] = info[1] + cart.data[i].quantity * cart.data[i].price;
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


const loadCart = async function(){
  
  try{
    const cart = await axios.get("/cartItems");
   

    for (let i = 0; i < cart.data.length; i++) {
      const mainDiv = document.createElement("div");
      const leftDiv = document.createElement("div");
      const rightDiv = document.createElement("div");
      const title = document.createElement("h2");
      const cat = document.createElement("p");
      const price = document.createElement("p");
      const img = document.createElement("img");

      title.append(cart.data[i].name)
      cat.append(cart.data[i].category)
      price.append(`${cart.data[i].price}`)
      img.src = cart.data[i].img;
      leftDiv.append(img)
      leftDiv.append(title)
      rightDiv.append(price)
      mainDiv.append(leftDiv)
      mainDiv.append(rightDiv)
      cartDisplay.append(mainDiv)


      mainDiv.classList.add("flex")
      mainDiv.classList.add("justify-between")

      leftDiv.classList.add("flex")

      rightDiv.classList.add("flex")

      img.classList.add("h-36")

      title.classList.add("font-bold");
      title.classList.add("pt-4");
      title.classList.add("pl-4");
      title.classList.add("text-xl");

    }
   
  }catch(e){
    console.log(e)
  }

}

window.addEventListener("load", async function () {
  let items = await getCartInfo();
  try {
    subtotalItems.innerText = `(${items[0]} Items)`;
    totalItems.innerText = `(${items[0]} Items)`;
    subtotal.innerText = `$${(Math.round(items[1] * 100) / 100).toFixed(2)}`;
  } catch (e) {
    console.log(e);
  }
  cartDisplay.innerHTML = '';
  await loadCart()

});
