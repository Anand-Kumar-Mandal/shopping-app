import './shopper-home.css';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useEffect, useState } from 'react';
import { ShopperProducts } from './Products';
import { current } from '@reduxjs/toolkit';
import Carousel from 'react-bootstrap/Carousel';


const data = ['/ShopperImg/slide1.webp', '/ShopperImg/slide7.webp', '/ShopperImg/slide2.jpg', '/ShopperImg/slide3.jpg', '/ShopperImg/slide5.jpg', '/ShopperImg/slide6.webp','/public/ShopperImg/Premium Vector1.jpg','/','/ShopperImg/Premium Vector3.jpg']


export function ShopperHome() {
    const data = ['/ShopperImg/slide1.webp', '/ShopperImg/slide7.webp', '/ShopperImg/slide2.jpg', '/ShopperImg/slide3.jpg', '/ShopperImg/slide5.jpg', '/ShopperImg/slide6.webp','/public/ShopperImg/Premium Vector1.jpg','/','/ShopperImg/Premium Vector3.jpg']
   

    return (
        <div className='container-fluid mt-2'>
            <div style={{ display: 'block', padding:"30px" }}>
      <Carousel>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
height='400px' src="/ShopperImg/PremiumVector1.jpg"
            alt="Image One"
          />
          <Carousel.Caption>
            <p>Sample Text for Image One</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
height='400px' src="/ShopperImg/PremiumVector2.jpg"
            alt="Image Two"
          />
          <Carousel.Caption>
            <p>Sample Text for Image Two</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
height='400px' src="/ShopperImg/PremiumVector3.jpg"
            alt="Image Three"
          />
          <Carousel.Caption>
            <p>Sample Text for Image Three</p>
          </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
height='400px' src="/ShopperImg/slide7.jpg"
            alt="Image four"
          />
          <Carousel.Caption>
            <p>Sample Text for Image Four</p>
          </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
height='400px' src="/ShopperImg/slide1.jpg"
            alt="Image five"
          />
          <Carousel.Caption>
            <p>Sample Text for Image Five</p>
          </Carousel.Caption>
                    </Carousel.Item> 
                    <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
height='400px' src="/ShopperImg/slide2.jpg"
            alt="Image six"
          />
          <Carousel.Caption>
            <p>Sample Text for Image six</p>
          </Carousel.Caption>
                    </Carousel.Item>   
                    <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
height='400px' src="/ShopperImg/slide3.jpg"
            alt="Image seven"
          />
          <Carousel.Caption>
            <p>Sample Text for Image Seven</p>
          </Carousel.Caption>
                    </Carousel.Item> 
                    <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
height='400px' src="/ShopperImg/slide5.jpg"
            alt="Image Eight"
          />
          <Carousel.Caption>
            <p>Sample Text for Image Eight</p>
          </Carousel.Caption>
                    </Carousel.Item> 
                    <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
height='400px' src="/ShopperImg/slide6.png"
            alt="Image Nine"
          />
          <Carousel.Caption>
            <p>Sample Text for Image Nine</p>
          </Carousel.Caption>
        </Carousel.Item>             
      </Carousel>
    </div>
            
            <div>
                <ShopperProducts />
            </div>
            
        </div>
    )
}