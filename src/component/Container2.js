import React from 'react'
import '../css/container2.css'

import product1 from '../img/product1.png'
import product2 from '../img/product2.png'
import product3 from '../img/product3.png'
import product4 from '../img/product4.png'
import product5 from '../img/product5.png'


const Container2 = (props) => {
    return (
        <>
            <div className="product_some">
                <h1 className='product_heading'>OUR PRODUCT</h1>
                <div className="some_product_main">
                    <div className="some_product">
                        <img src={product1} className="productimg" />
                        <h5>{props.name1}</h5>
                        <h6>{props.price1}</h6>
                        <button className='product_btn'>View</button>
                    </div>
                    <div className="some_product">
                        <img src={product2} className="productimg" />
                        <h5>{props.name2}</h5>
                        <h6>{props.price2}</h6>
                        <button className='product_btn'>View</button>
                    </div>
                    <div className="some_product">
                        <img src={product3} className="productimg" />
                        <h5>{props.name3}</h5>
                        <h6>{props.price3}</h6>
                        <button className='product_btn'>View</button>
                    </div>
                    <div className="some_product">
                        <img src={product4} className="productimg" />
                        <h5>{props.name4}</h5>
                        <h6>{props.price4}</h6>
                        <button className='product_btn'>View</button>
                    </div>
                    <div className="some_product">
                        <img src={product5} className="productimg" />
                        <h5>{props.name5} </h5>
                        <h6> {props.price5}</h6>
                        <button className='product_btn'>View</button>
                    </div>

                </div>
            </div>
        </>
    )

}





export default Container2
