export default function removeFromCartAction(product) {
    return {
        type: "REMOVE_FROM_CART",
        payload: product
    };
};