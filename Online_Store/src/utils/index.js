// param: Array of products 
// return: Number total price of all products

export const totalPrice = (products) => {
    let sum = 0;
    products.forEach((product) => sum += product.price);
    return sum;
}