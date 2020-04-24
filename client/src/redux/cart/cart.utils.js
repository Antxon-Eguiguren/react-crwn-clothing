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

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);

    if (existingCartItem.quantity === 1) {
        return clearItemFromCart(cartItems, cartItemToRemove);
    } else {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : { ...cartItem });
    }
}

export const clearItemFromCart = (cartItems, cartItemToClear) => {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id);
}