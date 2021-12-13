import React from 'react'
import './productList.css'
import Product from '../product/Product'
import { products } from '../../data'

const ProductList = () => {
    return (
        <div className='pl'>
            <div className='pl-texts'>
                <h1 className='pl-title'> Create, Design & Inspire</h1>
                <p className='pl-desc'> This is a portfolio containing a list of projects i've worked on.</p>
            </div>
            <div className='pl-lists'>
                {products.map( (item) => (
                    <Product key={item.id} img={item.img} link={item.link}/>
                ))}
                
            </div>
        </div>
    )
} 

export default ProductList
