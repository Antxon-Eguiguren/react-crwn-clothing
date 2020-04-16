export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    if (existingCartItem) {
        // In case the item is already in the cart, we increment the quantity
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : { ...cartItem });
    } else {
        // In case the item is not in the cart, we add the item for the first time to the cart with quantity = 1
        return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
    }
}
