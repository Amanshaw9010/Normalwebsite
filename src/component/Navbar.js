import React, { useState } from 'react'
import logo from '../img/logo.png'
import '../css/nav_bar.css'
import Bgimg from '../img/Bgimg2.jpg'

import userpic from '../img/user_pic.jpeg'
import subMenu1 from '../img/edit_profile.png'
import subMenu2 from '../img/setting.png'
import subMenu3 from '../img/help.png'
import subMenu4 from '../img/logout.png'


const Navbar = () => {

    // let subMenu = document.getElementById("subMenu");

    // function togglemenu(){
    //     subMenu.classList.toggle("open_menu");
    // }


    const [isActive, setIsActive] = useState(false);

    return (
        <>

            <div className="black_bg"></div>
            <img src={Bgimg} className="BG" />
            <div className="main_container">
                <div className="container1">
                    <img src={logo} alt="" className='navbar_img' />
                </div>
                <div className="container2">
                    <h2 className='brand_name'>SAVITRI </h2>
                </div>
                <div className="container3">
                    <a href="/" className='navbar_item'><h2>Home </h2></a>
                    <a href="/product" className='navbar_item'><h2>Product </h2></a>
                    <a href="/Aboutus" className='navbar_item'><h2>About us </h2></a>
                    <img src={logo} className="User_pic" onClick={(e) => setIsActive(!isActive)} />
                </div>


                {isActive && (
                    <div className="sub_menu_wrap" id="subMenu" >
                        <div className="sub_menu">
                            <div className="user_info">
                                <img src={userpic} className="drop_img" />
                                <h3 className="drop_main_heading" >Suraj Shaw</h3>
                            </div>
                            <hr />

                            <a href="#" className="sub_menu_link">
                                <img src={subMenu1} className="sub_menu_item_pic" />
                                <p>Edit Profile</p>
                                <span> > </span>
                            </a>


                            <a href="#" className="sub_menu_link">
                                <img src={subMenu2} className="sub_menu_item_pic" />
                                <p>Setting</p>
                                <span> > </span>
                            </a>


                            <a href="#" className="sub_menu_link">
                                <img src={subMenu3} className="sub_menu_item_pic" />
                                <p>Help and Support</p>
                                <span> > </span>
                            </a>


                            <a href="#" className="sub_menu_link">
                                <img src={subMenu4} className="sub_menu_item_pic" />
                                <p>Logout</p>
                                <span> > </span>
                            </a>
                        </div>
                    </div>
                )}

            </div>
            <div className="container4">
                <h1 className='navbar_title' >Organic Spices</h1>
                <p className='navbar_text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ex asperiores molestias id sed eligendi tenetur facere eaque beatae Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta est architecto voluptate sunt porro consequuntur eos quis, rerum ullam fugiat! </p>
                <button className='btn'>Explore Spices</button>
            </div>

        </>
    )
}

export default Navbar
