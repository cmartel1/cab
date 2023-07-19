function applyPromoCode() {
    const promoCode = document.getElementById('promoCode').value;
    const totalPrice = document.getElementById('totalPrice');

    if (promoCode === 'beaver') {
        totalPrice.textContent = 'Total: $9.99';
    } else {
        totalPrice.textContent = 'Total: $19.99';
    }
}
