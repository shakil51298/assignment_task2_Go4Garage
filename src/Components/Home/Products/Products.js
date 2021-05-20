import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ProductCard from './ProductCard';
import { productFakedata } from './ProductFakeData';


const Products = () => {
    const [products, setProducts] = useState([])

    const addProduct = () => {
        fetch('http://localhost:5000/Addvendor/list', {
            method: 'POST',
            body: JSON.stringify(productFakedata),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => {
                // do something
            })
    }
    useEffect(() => {
        axios('http://localhost:5000/vendor/list')
            .then(data => {
                setProducts(data.data);
            })
    }, [])
    return (
        <div className="container">
            {/* <h1>hi there</h1> */}
            {/* <button onClick={addProduct}>add product</button> */}
            <h3 className="text-center mt-3">Products</h3>
            <div className="row">
                {
                    products.map((pd, index) => <ProductCard key={index} products={pd}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Products;