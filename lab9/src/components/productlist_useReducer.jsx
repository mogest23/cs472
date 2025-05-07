import React, { useReducer } from 'react';
import Product from './product';

const initialProducts = [
    { id: 1, name: 'Apple', price: 1, inStock: true },
    { id: 2, name: 'Banana', price: 1, inStock: false },
    { id: 3, name: 'Cherry', price: 2, inStock: true },
]

function reducer(state, action) {
    switch (action.type) {
        case 'toggleStock':
            return state.map((product) => product.id === action.id ? { ...product, inStock: !product.inStock } : product)
        default: return state;

    }
}

export default function ProductList() {
    const [products, dispatch] = useReducer(reducer, initialProducts);

    return (
        <div>
            {products.map((product) => (
                <Product key={product.id} product={product} dispatch={dispatch} />
            ))}
        </div>
    )
}