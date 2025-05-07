import React from 'react';

export default function Product({ id, name, price, inStack, toggleStock }) {
    return (
        <div style={{ border: '1px solid orange', padding: '10px', margin: '10px', borderRadius: '5px' }}>
            <h3>{name}</h3>
            <p>Price: ${price}</p>
            <p>In Stock: {inStack ? 'Yes' : 'No'}</p>
            <button style={{ backgroundColor: 'orange', padding: '5px', borderRadius: '5px' }} onClick={() => toggleStock(id)}>Toggle Stock</button>
        </div>
    )
}