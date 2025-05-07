import React from 'react';
import ProductList from './components/productslist_useState';

export default function App() {
  return (
    <div className="App">
      <h1 style={{ marginLeft: '20px', color: 'orange' }}>Product Inventory</h1>
      <ProductList />
    </div>
  )
}
