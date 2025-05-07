import React, { useState } from 'react';
import Product from './product';

const initialProducts = [
    { id: 1, name: 'Apple', price: 1, inStack: true },
    { id: 2, name: 'Banana', price: 1, inStack: false },
    { id: 3, name: 'Cherry', price: 2, inStack: true },
];

export default function ProductList() {
    const [products, setProducts] = useState(initialProducts);

    const toggleStock = (id) => {
        setProducts(products.map(product =>
            product.id === id ? { ...product, inStack: !product.inStack } : product
        ));
    };

    return (
        <div>
            {products.map((product) => (
                <Product key={product.id} {...product} toggleStock={toggleStock} />
            ))}
        </div>
    )
}
