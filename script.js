function scrollToProducts() {
    document.getElementById("products").scrollIntoView({ behavior: "smooth" });
  }
  
  let cart = [];
  const cartCount = document.getElementById("cart-count");
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  const cartModal = document.getElementById("cart-modal");
  
  function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    updateCartUI();
  }
  
  function updateCartUI() {
    cartCount.textContent = cart.length;
    cartItems.innerHTML = "";
  
    let total = 0;
    cart.forEach((item, index) => {
      const li = document.createElement("li");
      li.textContent = `${item.name} - ₹${item.price}`;
      cartItems.appendChild(li);
      total += item.price;
    });
  
    cartTotal.textContent = total;
  }
  
  document.getElementById("cart-btn").addEventListener("click", () => {
    cartModal.style.display = "block";
  });
  
  function closeCart() {
    cartModal.style.display = "none";
  }
  
  function checkout() {
    alert("Thank you for your purchase!");
    cart = [];
    updateCartUI();
    closeCart();
  }