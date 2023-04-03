//in this we access all category products by useparams()

import { useState, useEffect } from 'react';
import { useParams ,Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import './shopper-home.css'
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShareSharpIcon from '@mui/icons-material/ShareSharp';
import Rating from '@mui/material/Rating';



export function ShopperProducts() {
    const params = useParams();
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    const [cookie, setCookie, removeCookie] = useCookies({background:''});
 
    function buyNowClick(e) {
    navigate(`/details/${e}`)
    }
    
    

    
    // useEffect(() => {
    //     if (cookie["UserId"] == undefined) {
    //         navigate("/login");
    //     }
    //     axios({
    //         method: 'get',
    //         url: `http://fakestoreapi.com/products/category/${params.catName}`
            
    //     }).then((response) => {
    //         setProducts(response.data);
    //     })
    // }, [params.catName]);

    //to know the details of clickekd product
    // useEffect(() => {
    //     axios({
    //         method: 'get',
    //         url: `http://127.0.0.1:5000/details/${params:id}`
    //     }).then(response => {
    //         setFavStyle(response.data);
    //     })
    // }, []);
 

    useEffect(() => {
        if (cookie["UserId"] == undefined) {
            navigate("/login");
        }
        axios({
            method: 'get',
            url: `http://127.0.0.1:5000/products`
            
        }).then((response) => {
            setProducts(response.data);
        })
    },[]);

    return (
        <div className='container-fluid' >
            <div className='headings'><h2 className='text-center mt-5 heading'>Products</h2></div>
            <div className='d-flex flex-wrap justify-content-center'>
            {
                    products.map(product =>
                        <div className="card m-3 p-2" key={product.id} style={{ width: '280px' }}>
                            <Link to={'/details/' + product.id}>
                            <img src={product.image} height='180px' width='100px' className="card-img-top" />
                            </Link>
                            <div className='fav-share-icon'>
                            <CardContent>
                                <div variant='body1' component="div">
                                {product.title}
                                </div>
                                <h6 variant='h6' color='text.black' component='div'>₹{product.price }</h6>
                            </CardContent>
                            
                            </div>
                            {/* footer cart button */}
                            <div className='card-footer d-flex justify-content-between mt-auto'>
                            <Rating className='mt-2' size="small" value={product.rating.rate} readOnly />
                                <Button size='small' variant='contained' value={product.id} onClick={() => { buyNowClick(product.id) }} style={{ backgroundColor: 'black' }}>Buy Now</Button>
                            </div>

                        </div>
                
                        )
                }
            </div>
        </div>
    )
}