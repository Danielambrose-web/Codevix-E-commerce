
//from product page to  add to cart

  function addToCart(name, price, image) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if product already exists in cart
    const existing = cart.find(item => item.name === name);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ name, price, image, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(name + " added to cart!");
  }





//cartttttttt from cart page
    const cartItemsContainer = document.getElementById("cartItems");
   // const subtotal
      Elem = document.getElementById("subtotal");
    const totalElem = document.getElementById("total");

    function loadCart() {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cartItemsContainer.innerHTML = "";

      if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p class='empty'>Your cart is empty.</p>";
        subtotalElem.textContent = "$0.00";
        totalElem.textContent = "$0.00";
        return;
      }

      let subtotal = 0;

      cart.forEach((item, index) => {
        subtotal += item.price * item.quantity;

        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
          <img src="${item.image}" alt="${item.name}">
          <div class="item-details">
            <h3>${item.name}</h3>
            <p>$${item.price.toFixed(2)}</p>
          </div>
          <div class="quantity">
            <button onclick="updateQuantity(${index}, -1)">-</button>
            <span>${item.quantity}</span>
            <button onclick="updateQuantity(${index}, 1)">+</button>
          </div>
          <p><strong>$${(item.price * item.quantity).toFixed(2)}</strong></p>
          <button onclick="removeItem(${index})" style="color:red; border:none; background:none; cursor:pointer;">🗑️</button>
        `;
        cartItemsContainer.appendChild(cartItem);
      });

      subtotalElem.textContent = `$${subtotal.toFixed(2)}`;
      totalElem.textContent = `$${subtotal.toFixed(2)}`;
    }

    function updateQuantity(index, change) {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart[index].quantity += change;
      if (cart[index].quantity <= 0) cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      loadCart();
    }

    function removeItem(index) {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      loadCart();
    }

    loadCart();