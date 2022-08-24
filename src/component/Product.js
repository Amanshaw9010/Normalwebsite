import React from 'react'
import '../css/product.css'


import Productimg from '../img/Bgimg3.jpg'

import prod1 from '../img/product1.png'
import prod2 from '../img/product2.png'
import prod3 from '../img/product3.png'
import prod4 from '../img/product4.png'
import prod5 from '../img/product5.png'

const Product_main = () => {


  const Product = (props) => {
    return (
      <>
        <div className="center_container">
          {/* <img src={Productimg} className="productimg" /> */}
          <div className="main_item_container">
            <div className="item_container">
              <div className="item_box1">
                <img src={props.imgsrc} className="prodimg" />

                <div className="item_details">
                  <h2 className="product_details" >{props.Productname}</h2><br />
                  <h2 className="product_details" >{props.Productprice}</h2><br />
                  <button className='item_btn'>Buy Now</button>
                  <button className='item_btn'>Add To Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }



  return (
    <>
      <Product imgsrc={prod5} Productname="Cumin (Jeera)" Productprice="Rs = 360/Kg" />
      <Product imgsrc={prod2} Productname="Black pepper (Golki)" Productprice="Rs = 480/Kg" />
      <Product imgsrc={prod1} Productname="Turmeric (Haldi)" Productprice="Rs = 150/Kg" />
      <Product imgsrc={prod3} Productname="Cashew (Kaju)" Productprice="Rs = 900/Kg" />
      <Product imgsrc={prod4} Productname="Almond (badam)" Productprice="Rs = 500/Kg" />

    </>
  )
}

export default Product_main
