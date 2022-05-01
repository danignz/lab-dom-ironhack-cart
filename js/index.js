// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span');
  //console.log(price.innerText);
  const quantity = product.querySelector('.quantity input');
  //console.log(quantity.value);
  const subtotalPrice = price.innerText * quantity.value;
  //console.log(subtotalPrice);
  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = subtotalPrice;
  //console.log(subtotal.innerText);

  return subtotal.innerHTML;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //console.log(singleProduct);
  //console.log(updateSubtotal(singleProduct));
  // end of test

  // ITERATION 2
  //... your code goes here
  const productsCollection = document.getElementsByClassName('product');
  //console.log(productsCollection);
  //[...productsCollection].forEach((product) => updateSubtotal(product));
  //[...productsCollection].forEach((product) => console.log(product));

  // ITERATION 3
  //... your code goes here
  const totalValue = document.querySelector('#total-value span');
  //console.log(totalValue.innerText);
  let totalSumProducts = 0;
  [...productsCollection].forEach((product) => {total = updateSubtotal(product)
                                                totalSumProducts +=parseFloat(total);
  
  });
  totalValue.innerHTML = totalSumProducts;
}


// ITERATION 4

function removeProduct(event) {
  //... your code goes here
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //console.log("This parent is a td", target.parentNode);
  //console.log("This parent is a tr", target.parentNode.parentNode);
  //console.log("This parent is a tbody", target.parentNode.parentNode.parentNode);
  productChildNodeToDelete = target.parentNode.parentNode;
  productParentNodeDeleteFrom = target.parentNode.parentNode.parentNode;
  productParentNodeDeleteFrom.removeChild(productChildNodeToDelete);
  calculateAll();
}

window.addEventListener('load', () => {

  const RemoveBtnCollection = document.getElementsByClassName('btn btn-remove');
  [...RemoveBtnCollection].forEach((RemoveBtn) => {RemoveBtn.addEventListener('click', removeProduct);});

});


// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
