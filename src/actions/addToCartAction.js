export default function addToCartAction(product) {
    return {
        type: "ADD_TO_CART",
        payload: product,
    };
};