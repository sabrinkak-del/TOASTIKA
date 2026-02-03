document.addEventListener('DOMContentLoaded', () => {
  const cartItems = document.getElementById('cart-items');
  const totalElement = document.getElementById('total');
  const cartCount = document.getElementById('cart-count');
  const orderForm = document.getElementById('order-form');

  let cart = [];

  const updateCart = () => {
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
      const li = document.createElement('li');
      li.className = 'cart-item';

      const label = document.createElement('span');
      label.textContent = `${item.name} - ₪${item.price}`;

      const removeBtn = document.createElement('button');
      removeBtn.type = 'button';
      removeBtn.textContent = 'הסר';
      removeBtn.addEventListener('click', () => {
        cart.splice(index, 1);
        updateCart();
      });

      li.append(label, removeBtn);
      cartItems.appendChild(li);
      total += item.price;
    });

    totalElement.textContent = `סה"כ: ₪${total}`;
    cartCount.textContent = cart.length;
  };

  document.querySelectorAll('.order-btn').forEach((button) => {
    button.addEventListener('click', () => {
      const name = button.getAttribute('data-item');
      const price = Number(button.getAttribute('data-price'));
      cart.push({ name, price });
      updateCart();
    });
  });

  orderForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (cart.length === 0) {
      alert('אנא הוסף פריטים לעגלה לפני השליחה.');
      return;
    }

    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const address = document.getElementById('address').value.trim();
    const note = document.getElementById('note').value.trim();

    const items = cart.map((item) => `${item.name} (₪${item.price})`).join('\n');
    const message = `הזמנה חדשה:\n\nשם: ${name}\nטלפון: ${phone}\nכתובת: ${address}\n${note ? `הערה: ${note}\n` : ''}\nפריטים:\n${items}\n\nסה"כ: ₪${cart.reduce((sum, item) => sum + item.price, 0)}`;

    alert('ההזמנה נקלטה!\n\n' + message);

    cart = [];
    updateCart();
    orderForm.reset();
  });
});
