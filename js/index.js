// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const priceElement = price.innerHTML;
  const quantityElement = quantity.value;
  const calculatePrice = priceElement * quantityElement;
  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = calculatePrice;
  return calculatePrice;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const allProducts = document.getElementsByClassName('product');
  const firstProduct = allProducts[0];
  const secondProduct = allProducts[1];
  const firstSubtotal = updateSubtotal(firstProduct);
  const secondSubtotal = updateSubtotal(secondProduct);
  const total = firstSubtotal + secondSubtotal;

  // ITERATION 3
  const updateTotal = document.querySelector('#total-value span');
  updateTotal.innerHTML = total;
  return total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
