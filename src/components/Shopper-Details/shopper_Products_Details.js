import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './shopper-details.css'
import { addToCart,removeFromCart } from "../../redux/Actions-Slice/cart-Slicer";
import { useDispatch } from "react-redux";

export function ShopperDetails() {
    const [products, setProducts] = useState([{ id: 0, title: "", price: 0, description: "", category: "", image: "", rating: { rate: 0, count: 0 } }]);
    const [cartbtn, setcartbtn] = useState('Add to Cart');
    const params = useParams();
    const dispatch = useDispatch();
    function handleCartBtn(product) {
        if (cartbtn === 'Add to Cart') {
            setcartbtn('Remove from Cart');
            dispatch(addToCart(product));
        } else {
            dispatch(removeFromCart(product));
            setcartbtn('Add to Cart')
        }
    }
    useEffect(() => {
        axios({
            method: 'get',
            url:`http://127.0.0.1:5000/details/${params.id}`
        }).then(response => {
            setProducts(response.data);
        })
    }, []);
    return (
        <div className="mt-3">
             <div className="container-fluid"  >
            <h2 className="text-center">Details</h2>
            <div className="row">
                <div className="col-4">
            <img src={products[0].image} className='img-inside' />
                </div>
                <div className="col-6">
                    <dl>
                        <dt className="title-head">Title</dt>
                        <dd className="title">{products[0].title}</dd>
                        <dt className="title-head">Price</dt>
                        <dd className="title">₹{products[0].price}</dd>
                        <dt className="title-head">Rating</dt>
                        <dd className="title"><span className="bi bi-star-fill text-success"></span>{products[0].rating.rate} [{products[0].rating.count}]</dd>
                        <dt className="title-head">Description</dt>
                        <dd className="title">{ products[0].description}</dd>
                    </dl>
                        <div>
                        <Button size='small' variant='contained' onClick={()=>{handleCartBtn(products[0])}}  className="me-3 btncart" style={{backgroundColor:'#ff1a1a'}}><AddShoppingCartIcon />{cartbtn}</Button>
                            <Button href={'/category/' + products[0].category} variant='outlined' >Back to {products[0].category}</Button>
                    </div>
                </div>
            </div>
        </div>
       </div>
    )
}