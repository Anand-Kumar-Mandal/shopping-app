import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useCookies } from "react-cookie";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';

export function CrudIndex() {
    const [products, setProducts] = useState([]);
    const nav = useNavigate();
    const [cookie, setCookie, removeCookie] = useCookies();
    useEffect(() => {
        if (cookie["UserId"] == undefined) {
            nav("/login");
        }
        axios({
            method: 'get',
            url: `http://127.0.0.1:5000/products`
        })
            .then(response => {
                setProducts(response.data);
            })
    }, []);
    //trash button function
    function handleTrash(e) {
        var flag = window.confirm("Are you sure\n Want to Delete?");
           
        if (flag == true) {
            axios({
                method: 'delete',
                url:`http://127.0.0.1:5000/deleteproduct/${parseInt(e.currentTarget.value)}`
            })
            alert("Record Deleted");
            nav("/home");
        }
        }

    return (
        <div className="container-fluid">
            <h2 className="text-center mt-4 mb-2 ">Product Grid</h2>
            <div className="mb-3">
                <Button href="/NewProduct" variant='contained' style={{color:'white'}} size="large"><PlaylistAddIcon style={{color:'white'}}/>  Add New Product</Button>
            </div>
            <table className="table table-hover">
                <thead>
                    <tr className='text-center' style={{backgroundColor:'powderblue'}}>
                        <th>Category</th>
                        <th>Image</th>
                        <th>See</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product =>
                            <tr key={product.id}>   
                                <td className='crud-index-prod-title'>{product.title}</td>

                                <td className='text-center'><img src={product.image} width='50px' height='50px' /></td>

                                <td  className='text-center'><Button variant="contained" color="success" href={'/cruddetails/' + product.id}><OpenInNewIcon style={{ color: 'white' }} /></Button></td>
                                
                                <td  className='text-center'><Button variant="contained" color="warning" href={'/crudedit/' + product.id}><EditIcon style={{color:'white'}} /></Button></td>

                                <td  className='text-center'><Button  variant="contained" style={{backgroundColor:'red'}} onClick={handleTrash} value={product.id}><DeleteForeverIcon style={{color:'white'}}/></Button></td>
                            </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}