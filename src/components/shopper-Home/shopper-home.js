import './shopper-home.css';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useEffect, useState } from 'react';
import { ShopperProducts } from './Products';
import { current } from '@reduxjs/toolkit';

export function ShopperHome() {
    const data = ['/ShopperImg/slide1.webp', '/ShopperImg/slide7.webp', '/ShopperImg/slide2.jpg', '/ShopperImg/slide3.jpg', '/ShopperImg/slide5.jpg', '/ShopperImg/slide6.webp',]
    const [slide,setSlide] = useState('/ShopperImg/slide1.webp');
    function handleOver() {
        setSlide('/ShopperImg/slide2.jpg')
    }
    function handleOut() {
        setSlide(data[1])
    }

    return (
        <div className='container-fluid mt-2'>
            <div className='carousel-container'>
                <img src={slide} onMouseOver={handleOver} className='carousel-img' onMouseOut={handleOut} />
                <p>Move mouse over to image</p>
            </div>
            
            <div>
                <ShopperProducts />
            </div>
            
        </div>
    )
}