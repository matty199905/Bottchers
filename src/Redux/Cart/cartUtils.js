

export const addItemToCart = (cartProducts, product) => {

    const productInCart = cartProducts.find((item) => item.id === product.id);

    if (productInCart) {

        return cartProducts.map((item) =>

            item.id === productInCart.id ? { ...item, quantity: item.quantity + 1 } : item
        )
    }

    return [...cartProducts, { ...product, quantity: 1 }];
}



export const removeItemFromCart = (cartProducts, id) => {

    const productToRemove = cartProducts.find((item) => item.id === id)

    return cartProducts.filter((item) => item.id !== productToRemove.id)

}



export const ShippingCostByProducts = (cartProducts, SHIPPINGCOST) => {

    if (cartProducts.length === 1 && cartProducts[0].quantity === 1) {
        return SHIPPINGCOST = 0
    }

    return SHIPPINGCOST

}


export const increaseProductCart = (cartProducts, id) => {

    return cartProducts.map((item) =>

        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    )
}



export const decreaseProducts = (cartProducts, id) => {

    const existingProduct = cartProducts.find((item) => { return (item.id === id) && (item.quantity === 1) })


    if (existingProduct) {

        return cartProducts.filter((items) => items.id !== id)

    }

    else {return cartProducts.map((item) =>

        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
    ) }

}