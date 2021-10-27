import React, { useState, useEffect } from 'react';

import { Row, Col } from 'react-bootstrap';
import Product from '../Product';
import axios from 'axios';

const Homescreen = () => {

    const [products, setProducts ] = useState([]);

    useEffect(() => {
    
    const getProducts = async () => {

        const { data } = await axios.get('/products/')
        setProducts(data)

}
        getProducts()
       
    }, [])

    return (
        <div>
            <h1>Latest Products</h1>
            <Row>
                {products.map(product=> (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />    
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default Homescreen
