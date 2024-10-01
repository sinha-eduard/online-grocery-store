const subtotalItems = document.querySelector("#subtotal-items");
const subtotal = document.querySelector("#subtotal");
const taxes = document.querySelector("#tax");
const totalItems = document.querySelector("#total-items");
const cartDisplay = document.querySelector("#cart-body");
const finTotal = document.querySelector("#final-total");
const delivery = document.querySelector("#delivery");
const pickup = document.querySelector("#pickup");
let numSub = 0;

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

const loadCart = async function () {
  try {
    const cart = await axios.get("/cartItems");

    for (let i = 0; i < cart.data.length; i++) {
      const mainDiv = document.createElement("div");
      const leftDiv = document.createElement("div");
      const imgDiv = document.createElement("div");
      const infoDiv = document.createElement("div");
      const rightDiv = document.createElement("div");
      const botDiv = document.createElement("div");
      const parentDisplay = document.createElement("div");
      const qDiv = document.createElement("div");
      const title = document.createElement("h2");
      const cat = document.createElement("p");
      const quant = document.createElement("p");
      const price = document.createElement("p");
      const tPrice = document.createElement("p");
      const img = document.createElement("img");
      const rBtn = document.createElement("btn");
      const add = document.createElement("btn");
      const minus = document.createElement("btn");
      const hr = document.createElement("hr");

      title.append(cart.data[i].name);
      quant.append(cart.data[i].quantity);

      quant.id = "asdasdsad";

      cat.append(cart.data[i].category);
      price.append(`$${((cart.data[i].price * 100) / 100).toFixed(2)}/ea`);
      img.src = cart.data[i].img;

      tPrice.append(
        `$${(cart.data[i].price * cart.data[i].quantity).toFixed(2)}`
      );

      rBtn.append("Remove");

      add.append("+");

      minus.append("-");

      imgDiv.append(img);

      infoDiv.append(title);
      infoDiv.append(price);

      leftDiv.append(imgDiv);
      leftDiv.append(infoDiv);

      rightDiv.append(tPrice);

      qDiv.append(quant);
      botDiv.append(add);
      botDiv.append(qDiv);
      botDiv.append(minus);
      botDiv.append(rBtn);

      mainDiv.append(leftDiv);
      mainDiv.append(rightDiv);

      parentDisplay.append(mainDiv);
      parentDisplay.append(botDiv);
      parentDisplay.append(hr);
      cartDisplay.append(parentDisplay);

      mainDiv.classList.add("flex");
      mainDiv.classList.add("justify-between");

      botDiv.classList.add("flex");
      botDiv.classList.add("flex-row-reverse");
      botDiv.classList.add("justify-start");
      botDiv.classList.add("mb-4");

      leftDiv.classList.add("flex");

      rightDiv.classList.add("flex");

      img.classList.add("h-36");
      img.classList.add("portrait:h-20");
      img.classList.add("portrait:min-w-20");

      title.classList.add("pt-4");
      title.classList.add("pl-4");
      title.classList.add("text-lg");

      price.classList.add("pl-4");
      price.classList.add("text-base-300");

      tPrice.classList.add("font-bold");
      tPrice.classList.add("text-xl");
      tPrice.classList.add("portrait:text-lg");
      tPrice.classList.add("pt-5");

      rBtn.classList.add("link");
      rBtn.classList.add("link-hover");
      rBtn.classList.add("mr-4");
      rBtn.id = "removeBtn";
      rBtn.name = cart.data[i]._id;

      add.classList.add("btn");
      add.classList.add("btn-accent");
      add.classList.add("btn-xs");
      add.classList.add("rounded-r-full");
      add.classList.add("ml-2");
      add.name = cart.data[i]._id;
      add.id = "addBtn";

      minus.classList.add("btn");
      minus.classList.add("btn-accent");
      minus.classList.add("btn-xs");
      minus.classList.add("rounded-l-full");
      minus.classList.add("mr-2");
      minus.name = cart.data[i]._id;
      minus.id = "minusBtn";
      if (cart.data[i].quantity == 1) {
        minus.setAttribute("disabled", "");
      }
    }
  } catch (e) {
    console.log(e);
  }
};

const finTotalDis = function (sub) {
  let subtotal = sub;
  numSub = sub;
  let subDel = subtotal + 7.99;
  let subPic = subtotal;
  if(subtotal == 0){
    subDel = subtotal
  }
  

  if (delivery.checked) {
    taxes.innerText = `$${((0.13 * subDel * 100) / 100).toFixed(2)}`;
    finTotal.innerText = `$${((1.13 * subDel * 100) / 100).toFixed(2)}`;
  } else {
    taxes.innerText = `$${((0.13 * subPic * 100) / 100).toFixed(2)}`;
    finTotal.innerText = `$${((1.13 * subPic * 100) / 100).toFixed(2)}`;
  }
};

const loadPrices = async function () {
  let items = await getCartInfo();
  try {
    subtotalItems.innerText = `(${items[0]} Items)`;
    totalItems.innerText = `(${items[0]} Items)`;
    subtotal.innerText = `$${((items[1] * 100) / 100).toFixed(2)}`;
    finTotal.innerText = `$${((items[1] * 100) / 100).toFixed(2)}`;
    finTotalDis(items[1]);
  } catch (e) {
    console.log(e);
  }
};

window.addEventListener("load", async function () {
  await loadPrices();
  cartDisplay.innerHTML = "";
  await loadCart();

  const rbtn = document.querySelectorAll("#removeBtn");
  rbtn.forEach((element) => {
    element.addEventListener("click", async function () {
      element.parentElement.parentElement.remove();
      await axios({
        method: "delete",
        url: `/cartItems/${element.name}`,
      });
      await loadPrices();
    });
  });

  const addbtn = document.querySelectorAll("#addBtn");
  const minusbtn = document.querySelectorAll("#minusBtn");

  addbtn.forEach((element) => {
    element.addEventListener("click", async function () {
      await axios({
        method: "put",
        url: "/cartItems",
        data: {
          cartId: element.name,
          plus: true,
        },
      });
      await loadPrices();

      try {
        const cart = await axios.get(`/cartItems/${element.name}`);
        element.parentElement.children[1].children[0].innerText =
          cart.data.quantity;

          if (cart.data.quantity > 1) {
            element.parentElement.children[2].removeAttribute("disabled");
          }

        element.parentElement.parentElement.children[0].children[1].children[0].innerText = `$${(
          cart.data.price * cart.data.quantity
        ).toFixed(2)}`;
      } catch (e) {
        console.log(e);
      }
    });
  });

  minusbtn.forEach((element) => {
    element.addEventListener("click", async function () {
      try {
        await axios({
          method: "put",
          url: "/cartItemsRemove",
          data: {
            cartId: element.name,
            minus: true,
          },
        });
        await loadPrices();
        const cart = await axios.get(`/cartItems/${element.name}`);

        element.parentElement.children[1].children[0].innerText =
          cart.data.quantity;

        if (cart.data.quantity == 1) {
          element.setAttribute("disabled", "");
        }

        element.parentElement.parentElement.children[0].children[1].children[0].innerText = `$${(
          cart.data.price * cart.data.quantity
        ).toFixed(2)}`;
      } catch (e) {
        console.log(e);
      }
    });
  });
});

delivery.addEventListener("change", function () {
  finTotalDis(numSub);
});

pickup.addEventListener("change", function () {
  finTotalDis(numSub);
});
