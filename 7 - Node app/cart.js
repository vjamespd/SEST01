const products = require("./product");

let cartItems = [];

const addToCart = (product) => {
    cartItems.push(product);
};

const getCartItems = () => {
    return cartItems;
};

module.exports = {
    addToCart,
    getCartItems,
};