import { Formik, Form, Field } from "formik";
import axios from 'axios';
import './shopper-login.css'
import { useCookies } from "react-cookie";
import { useNavigate,Link } from "react-router-dom";
import { Button } from "@mui/material";
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
export function ShopperLogin() {
    const navigate = useNavigate();
    const [cookie, setCookie, removeCookie] = useCookies();
    return (
        <div className="container-fluid mb-5 d-flex" >
            <div width="50%">
            <img src='ShopperImg/lock-3d.png' className="loginImg" style={{marginTop:'12%',marginLeft:'10%'}} />
            </div>
            <div style={{marginTop:'8%',marginLeft:'15%'}}>
                <h1 ><AccountCircleSharpIcon style={{fontSize:'50px'}} /> User Login</h1>
            <Formik
                initialValues={{
                    UserId: "",
                   Password:""
                }}
                onSubmit={(values) => {
                    axios({
                        method: "get",
                            url:"http://127.0.0.1:5000/users"
                    }).then(response => {
                           for (var user of response.data) {
                                if (user.UserId == values.UserId && user.Password == values.Password) {
                                    setCookie("UserId", values.UserId);
                                    navigate("/home");
                                    break;
                                } else {
                                    navigate("/invalid")
                                }
                            
                        }
                    })
                }}
            >
                {
                    <Form className="loginForm">
                        <dl>
                            <dt className="mb-2">User Id</dt>
                            <dd><Field type="text" className='form-control' style={{width:'100%'}}name="UserId" /> </dd>
                            <dt className="mb-2">Password</dt>
                            <dd><Field type="password" className='form-control' style={{width:'100%'}} name="Password"/> </dd>
                        </dl>
                        <button className="btn loginbtn" >Login</button>
                            <Button href="/register" variant='text' style={{ color: 'black' }}>New User?<u>Register</u></Button>
                    </Form>
                }

            </Formik>

            </div>
        </div>
    )
}