import React from 'react'
import "./styles.css"
import Image from './Image'
import Content from './Content'
import Brand from './Brand'
import Price from './Price'
import { useProduct } from '../context/Product'
import Desc from './Desc'

const Products = () => {
    const { items } = useProduct();

    return (
        <div className='container'>
            {
                items.map((item)=>(
                <div className='product'>
                    <Image image={item.images[0]}/>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <Brand brand={item.brand}/>
                        <Price price={item.price}/>
                    </div>
                    <Content title={item.title}/>
                    <Desc desc={item.description}/>
                </div>
                ))
            }
        </div>
    )
}

export default Products
