import { Formik, Form, Field } from "formik";
import axios from 'axios';
import './shopper-login.css'
import { useCookies } from "react-cookie";
import { useNavigate,Link } from "react-router-dom";
import { Button } from "@mui/material";
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import { useEffect, useState } from "react";
export function ShopperLogin() {
    const navigate = useNavigate();
    const [cookie, setCookie, removeCookie] = useCookies();
    const [email,setEmail]=useState('');
    const [password, setPassword] = useState('');
    const loginUser = async (e) => {
        e.preventDefault();
        const res = await fetch('/signup', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email,
                password
            })
        });

        const data = await res.json();
        
        if (data.message) {
            window.alert(data.message);
            console.log("login successful")
            setCookie('email',email);
            navigate('/home')
        } else {
            window.alert(data.error);
            console.log("invalid credientials")
            navigate('/invalid')

            
        }
    }
    // useEffect(() => {
    //     axios({
    //         method: 'get',
    //         url:'/'
    //     })
    // })
    return (
        <div className="container-fluid d-flex w-5" >
            <div width="50%">
            <img src='ShopperImg/lock-3d.png' className="loginImg" style={{marginTop:'12%',marginLeft:'10%'}} />
            </div>
            <div style={{marginTop:'8%',marginLeft:'15%'}}>
                <h1 ><AccountCircleSharpIcon style={{fontSize:'50px'}} /> User Login</h1>

               
                    <form className="loginForm" method='post'>
                        <dl>
                            <dt className="mb-2">Email</dt>
                            <dd><input type="text" className='form-control' onChange={(e)=>setEmail(e.target.value)} style={{width:'100%'}} name="email" value={email} /> </dd>
                            <dt className="mb-2">Password</dt>
                        <dd><input type="password" className='form-control' onChange={(e) => setPassword(e.target.value)} style={{ width: '100%' }} name="password" value={password} /> </dd>
                        </dl>
                        <button className="btn loginbtn" onClick={loginUser} >Login</button>
                            <Button href="/register" variant='text' style={{ color: 'black' }}>New User?<u>Register</u></Button>
                    </form>
                

            

            </div> 
        </div>
    )
}