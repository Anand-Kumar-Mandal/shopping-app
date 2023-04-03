import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { width } from '@mui/system';

export function CrudDetails() {
    
    const params = useParams();
    const [products, setProducts] = useState([{ id: 0,title: "",price: 0,description: "",category: "",image:"",rating:{rate:0,count:0} }]);
    useEffect(() => {
        axios({
            method: 'get',
            url: `http://127.0.0.1:5000/details/${params.id}`
        })
            .then(response => {
                setProducts(response.data);
            })
    }, []);

    return (
        
        <div className='container-fluid '>
            <h2 style={{textAlign:'center', marginTop:'50px'}}>Product Details{ products[0].id}</h2>
            <div className='crud-index-prod-detail-box ' >
            <div>
                <div style={{float:'left', marginTop:'70px',marginLeft:'20px'}}>
                
                <div ><img src={products[0].image} width="200px" height='200px' /></div>
                </div>
                <div  style={{float:'right', width:'700px',margin:'5px'}}>
                    <div className='fw-bold'>Title</div>
                    <div className='form'>{ products[0].title }</div>
                    <div className='fw-bold'>Category</div>
                    <div className='form'>{ products[0].category }</div>
                    <div className='fw-bold'>Price</div>
                    <div className='form'>₹{products[0].price}</div>
                    <div className='fw-bold'>Description</div>
                    <div className='form'>{products[0].description}</div>
                    <h5>Rating</h5>
                    <div className='fw-bold'>Rate</div>
                    <div className='form'>{products[0].rating.rate}</div>
                    <div className='fw-bold'>Count</div>
                    <div className='form'>{ products[0].rating.count}</div>
                </div>
                
                    <Link to="/products" className='btn btn-primary mt-5 w-25 align-center'>See Products</Link>
                
            
            </div>
            
            </div>
        </div>
    )
}