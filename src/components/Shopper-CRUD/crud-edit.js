import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, TextField } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export function CrudEdit() {
    const params = useParams();
    const [products, setProducts] = useState([{  id: 0,
        title: "",price: 0,description: "",category: "",image:"",rating:{rate:0,count:0}}]);
    const navigate = useNavigate();
    const category=[ "category","electronics","jewelery","men's clothing","women's clothing"]
    useEffect(() => {
        axios({
            method: 'get',
            url: `http://127.0.0.1:5000/details/${params.id}`
        })
            .then(response => {
                setProducts(response.data);
            })
        
    }, []);

    function handleTitle(e) {
        setProducts([{
        id:params.id ,
        title:e.target.value,
        price:products[0].price,
        description:products[0].description,
        category:products[0].category,
        image:products[0].image,
        rating:{rate:products[0].rating.rate,count:products[0].rating.count}
        }]);
        
    }
    function handlePrice(e) {
        setProducts([{
            id:params.id ,
            title:products[0].title,
            price:e.target.value,
            description:products[0].description,
            category:products[0].category,
            image:products[0].image,
            rating:{rate:products[0].rating.rate,count:products[0].rating.count}
            }]);
    }
    function handleDescription(e) {
        setProducts([{
            id:params.id ,
            title:products[0].title,
            price:products[0].price,
            description:e.target.value,
            category:products[0].category,
            image:products[0].image,
            rating:{rate:products[0].rating.rate,count:products[0].rating.count}
            }]);
    }
    function handleCategory(e) {
        setProducts([{
            id:params.id ,
            title:products[0].title,
            price:products[0].price,
            description:products[0].description,
            category:e.target.value,
            image:products[0].image,
            rating:{rate:products[0].rating.rate,count:products[0].rating.count}
            }]);
    }
    function handleImage(e) {
        setProducts([{
            id:params.id ,
            title:products[0].title,
            price:products[0].price,
            description:products[0].description,
            category:products[0].category,
            image:e.target.value,
            rating:{rate:products[0].rating.rate,count:products[0].rating.count}
            }]);
    }
    function handleRate(e) {
        setProducts([{
            id:params.id ,
            title:products[0].title,
            price:products[0].price,
            description:products[0].description,
            category:products[0].category,
            image:products[0].image,
            rating:{rate:e.target.value,count:products[0].rating.count}
            }]);
    }
    function handleRateCount(e) {
        setProducts([{
            id:params.id ,
            title:products[0].title,
            price:products[0].price,
            description:products[0].description,
            category:products[0].category,
            image:products[0].image,
            rating:{rate:products[0].rate,count:e.target.value}
            }]);
    }

    function submitUpdate() {
        var values = products[0];
        alert(products[0].title +'Product Updated successfully')
        
        axios({
            method:'put',
            url:`http://127.0.0.1:5000/updateproduct`,
            data:values
        }).then(() => {
            alert("Product Updated successfully")
            navigate("/products");
        })
    }

    return (
        <div className='container-fluid' >
            <h2 style={{textAlign:'center', marginTop:'5px'}}>Edit Product - {params.id }</h2>
            
            <div className='mt-3 ' style={{textAlign:'center',width:"1500px"}}>
            
            <div className='mt-3'><TextField style={{background:'transparent'}} className='form-control w-50' type="text" label="Title" variant="outlined"  value={products[0].title} onChange={handleTitle}  /></div>
                
                <div className='mt-3'><TextField style={{background:'transparent'}} className='form-control w-50' type="number" label="Price" variant="outlined" value={products[0].price} onChange={handlePrice} color="warning" /></div>
                
                <div className='mt-3'><TextField style={{background:'transparent'}} className='form-control w-50' type="text" label="Description" variant="outlined" value={products[0].description} onChange={handleDescription} color="warning" /></div>

                <div className='mt-3'><TextField className='form-control w-50 bg-transparent' type="text" label="Image" variant="outlined" value={products[0].image} onChange={handleImage} color="warning" /></div>
                
                <div className='mt-3'><TextField className='form-control w-50 bg-transparent' type="number" label="Rate" variant="outlined" value={products[0].rating.rate} onChange={handleRate} color="warning" /></div>
                
                <div className='mt-3'><TextField className='form-control w-50 bg-transparent' type="number" label="Count" variant="outlined"  value={products[0].rating.count} onChange={handleRateCount} color="warning" /></div>

                
                <div >
                <InputLabel className='mt-3' style={{}}>Category</InputLabel>
                <Select
                    className='form-control w-50 bg-transparent'
                    value={products[0].category}
                    label="Category"
                    onChange={handleCategory}>
                    <MenuItem value={category[0]}>{category[0]}</MenuItem>
                    <MenuItem value={category[1]}>{category[1]}</MenuItem>
                    <MenuItem value={category[2]}>{category[2]}</MenuItem>
                    <MenuItem value={category[3]}>{category[3]}</MenuItem>
                    <MenuItem value={category[4]}>{category[4]}</MenuItem>
                </Select>
                </div>
                <div style={{textAlign:'center'}}>
            <Button variant="contained"  className='mt-2 w-50'  onClick={submitUpdate}>Submit</Button>
            
                </div>
                <Link to={'/cruddetails/' + products[0].id}  >see your changes</Link>
            </div>
            
        </div>
    )
}