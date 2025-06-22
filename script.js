let cart = [];

function addToCart(productName, price) {
  cart.push({ name: productName, price });
  updateCartUI();
}

function updateCartUI() {
  const cartItemsEl = document.getElementById('cart-items');
  const cartCountEl = document.getElementById('cart-count');
  const cartTotalEl = document.getElementById('cart-total');

  cartItemsEl.innerHTML = '';
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    const li = document.createElement('li');
    li.innerHTML = `${item.name} - ₹${item.price} 
      <button onclick="removeFromCart(${index})">❌ Remove</button>`;
    cartItemsEl.appendChild(li);
  });

  cartCountEl.innerText = cart.length;
  cartTotalEl.innerText = total;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartUI();
}

function closeCart() {
  document.getElementById('cart-modal').style.display = 'none';
}

function openCart() {
  document.getElementById('cart-modal').style.display = 'block';
  updateCartUI();
}

function openCheckoutForm() {
  document.getElementById('checkout-form-modal').style.display = 'block';
}

function closeCheckoutForm() {
  document.getElementById('checkout-form-modal').style.display = 'none';
}

function submitOrder(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const address = document.getElementById('address').value;
  const phone = document.getElementById('phone').value;

  alert(`Thank you, ${name}! Your order has been placed.`);

  // Clear cart & form
  cart = [];
  updateCartUI();
  document.getElementById('checkout-form-modal').style.display = 'none';
  document.getElementById('cart-modal').style.display = 'none';
  event.target.reset();
}

document.getElementById("cart-btn").addEventListener("click", openCart);
function scrollToProducts() {
  const productSection = document.getElementById('products');
  productSection.scrollIntoView({ behavior: 'smooth' });
}
