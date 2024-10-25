function filterProducts(category) {
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
        if (product.getAttribute('data-category') === category || category === '') {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}
