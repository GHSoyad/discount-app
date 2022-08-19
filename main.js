// Set total price
document.getElementById('price-btn').addEventListener('click', function () {
    const totalPriceInput = getInputValueById('price-field');
    setElementValueById('total-price', totalPriceInput);
})

// Get discount
document.getElementById('discount-btn').addEventListener('click', function () {
    const discountField = document.getElementById('discount-field');
    const discountFieldValue = discountField.value;
    const discount = parseFloat(discountFieldValue);

    if (discountFieldValue === 'DOM') {
        const totalPrice = getElementValueById('total-price');

        const discountAmount = totalPrice * (30 / 100);
        const discountAmountFixed = discountAmount.toFixed(2);
        setElementValueById('discount-amount', discountAmountFixed);

        const discountedPrice = totalPrice - discountAmount;
        const discountedPriceFixed = discountedPrice.toFixed(2);
        setElementValueById('discounted-price', discountedPriceFixed);

        discountField.value = '';
    }
    else if (isNaN(discount)) {
        discountField.value = '';
        return alert('Coupon doesnt exist!!');
    }
    else if (discount <= 100 && discount >= 0) {
        const totalPrice = getElementValueById('total-price');

        const discountAmount = totalPrice * (discount / 100);
        const discountAmountFixed = discountAmount.toFixed(2);
        setElementValueById('discount-amount', discountAmountFixed);

        const discountedPrice = (totalPrice - discountAmount);
        const discountedPriceFixed = discountedPrice.toFixed(2);
        setElementValueById('discounted-price', discountedPriceFixed);
        discountField.value = '';
    }
    else {
        discountField.value = '';
        return alert('Enter valid discount number!!')
    }
})