import React from 'react'
import '../css/container.css'
import top_recipes from '../img/containerpic1.png'
import top_recipes2 from '../img/containerpic2.png'
import top_recipes3 from '../img/containerpic3.png'
import top_recipes4 from '../img/containerpic4.png'
import BGimg3 from '../img/Bgimg3.jpg'

import slider1 from '../img/slider1.jpg'
import slider2 from '../img/slider2.jpg'
import slider3 from '../img/slider3.jpg'
import slider4 from '../img/slider4.jpg'

import SimpleImageSlider from "react-simple-image-slider";



const container = () => {
    const images = [
        { url: slider1 },
        { url: slider2 },
        { url: slider3 },
        { url: slider4 }
    ];

    return (
        <>
        
        <SimpleImageSlider
                slideDuration={1}
                autoPlay={true}
                width={1550}
                height={504}
                images={images}
                showBullets={true}
                showNavs={true}
            />
            <br />

            <div className="main">
                <img src={BGimg3} className="bg3" />

                <div className="mini_container">
                    <div className="one_cont">
                        <img src={top_recipes} className="containerpic1" />
                        <h3>TOP RECIPES</h3><br />
                        <p className='cont_para'>Lorem ipsum dolor <br /> sit amet consectetur adipisicing <br /> elit. Rem repellendus numquam reprehenderit.</p>
                    </div>

                    <div className="two_cont">
                        <img src={top_recipes2} className="containerpic1" />
                        <h3>COOKING TIP</h3><br />
                        <p className='cont_para'>Lorem ipsum dolor <br /> sit amet consectetur adipisicing <br /> elit. Rem repellendus numquam reprehenderit.</p>
                    </div>

                    <div className="three_cont">
                        <img src={top_recipes3} alt="" className="containerpic1" />
                        <h3>HERBS AND SPICES</h3><br />
                        <p className='cont_para'>Lorem ipsum dolor <br /> sit amet consectetur adipisicing <br /> elit. Rem repellendus numquam reprehenderit.</p>
                    </div>

                    <div className="four_cont">
                        <img src={top_recipes4} alt="" className="containerpic4" />
                        <h3>TASTE OF HOME</h3><br />
                        <p className='cont_para'>Lorem ipsum dolor <br /> sit amet consectetur adipisicing <br /> elit. Rem repellendus numquam reprehenderit.</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default container
