import { useState } from "react";

const initialState = { 
    cart: [],
    total: 0 
};

export const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const addToCart = (payload) => {
        if(!state.cart.includes(payload)) {
            setState({
                ...state,
                cart: [...state.cart, payload],
                total: state.total + payload.price
            });
        } 
    };

    const removeFromCart = (payload) => {
        const newCartState = state.cart.filter(product => product !== payload);
        setState({
            ...state,
            cart: [...newCartState],
            total: state.total - payload.price
        });
    };

    return { state, addToCart, removeFromCart }
};