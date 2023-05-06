// import { useFormik, Formik, Form, input, ErrorMessage } from "formik";
// import * as yup from "yup";
// import axios from 'axios';
// import { useNavigate, Link } from "react-router-dom";
// import { Textinput } from "@mui/material";

// export function ShoppingRegister() {
//     const navigate = useNavigate();
//     return (
//         <div className='container-fluid mt-4 d-flex justify-content-between'>
//             <div className="mt-10px">
//                 <h3>Register User</h3>
//                 <Formik
//                     initialValues={{
//                         UserId: "",
//                         UserName: "",
//                         Password: "",
//                         Email: "",
//                         Age: 0,
//                         Mobile: ""
//                     }}

//                     validationSchema={
//                         yup.object({
//                             UserId: yup.string().required(),
//                             UserName: yup.string().required(),
//                             Password: yup.string().required().matches(/(?=.*[A-Z])\w{4,15}/),
//                             Email: yup.string().required().email(),
//                             Age: yup.number(),
//                             Mobile: yup.string().required().matches(/\+91\d{10}/)
//                         })
//                     }
//                     onSubmit={
//                         (values) => {
//                             axios({
//                                 method: "post",
//                                 url: "http://127.0.0.1:5000/registeruser",
//                                 data: values
//                             })
//                                 .then(() => {
//                                     alert("Register Successfully...");
//                                     window.confirm('Remember your userId and password\n'+'userId: '+values.UserId+"\nPassword: "+values.Password)
//                                     navigate("/login");
//                                 })
//                         }
//                     }
//                 >
//                     {
//                         <Form className="d-flex justify-content-between " >

//                             <div className="border border-primary p-3 rounded col-6">
//                                 <label className='form-label'>User Id</label>
//                                 <div ><input className='form-control w-100' type="text" name="UserId" /></div>
//                                 <div className="text-danger"><ErrorMessage name="UserId" /></div>
//                                 <label className='form-label'>User Name</label>
//                                 <div><input className='form-control w-100' type="text" name="UserName" /></div>
//                                 <div className="text-danger"><ErrorMessage name="UserName" /></div>
//                                 <label className='form-label'>Password</label>
//                                 <div><input className='form-control w-100' type="password" name="Password" /></div>
//                                 <div className="text-danger"><ErrorMessage name="Password" /></div>
//                                 <label className='form-label'>Email</label>
//                                 <div><input className='form-control w-100' type="email" name="Email" /></div>
//                                 <div className="text-danger"><ErrorMessage name="Email" /></div>
//                                 <label className='form-label'>Age</label>
//                                 <div><input className='form-control w-100' type="number" name="Age" /></div>
//                                 <div className="text-danger"><ErrorMessage name="Age" /></div>
//                                 <label className='form-label'>Mobile</label>
//                                 <div><input className='form-control w-100' type="text" name="Mobile" /></div>
//                                 <div className="text-danger"><ErrorMessage name="Mobile" /></div>

//                                 <button className='btn btn-info mt-5 mb-2 w-100'>Register</button>
//                                 <div>
//                                     <Link to="/login">Existing Users</Link>
//                                 </div>
//                             </div>
//                             <div className="col-3">
//                                 <img src='ShopperImg/free-registration-desk.webp' width='700px' height='500px' />
//                             </div>
//                         </Form>
//                     }
//                 </Formik>
//             </div>

//         </div>
//     )
// }


import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
export function ShoppingRegister() {
    const navigate = useNavigate();
    const [user, setUser] = useState({ name: '', email: '', phone: '', work: '', password: '', cpassword: '' });
    let name, value;
    function handleInputs(e) {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value });
    }
    const PostData = async (e) => {
        e.preventDefault();
        const { name, email, phone, work, password, cpassword } = user;

        const res = await fetch("/register", {
            method: 'POST',
            headers: { "Content-Type": 'application/json' },
            body: JSON.stringify({
                name, email, phone, work, password, cpassword
            })
        });
        const data = await res.json();
        if (data.message) {
            window.alert(data.message);
            console.log("Registration Successfull");
            navigate('/login');
        }
        else {
            window.alert(data.error);
            console.log("Invalid Registeration");
        }

    }

    return (
        <div className='container-fluid mt-4 d-flex justify-content-between'>
            <div className="mt-10px">
                <h3>Register User</h3>
                
                        <form className="d-flex justify-content-between " method="POST" >

                            <div className="border border-primary p-3 rounded col-6">
                                <label className='form-label'>Name</label>
                                <div ><input className='form-control w-100' type="text" name="name" value={user.name} onChange={handleInputs}/></div>
                                <label className='form-label'>Email</label>
                                <div><input className='form-control w-100' type="text" name="email" value={user.email} onChange={handleInputs}/></div>
                                <label className='form-label'>Phone</label>
                                <div><input className='form-control w-100' type="text" name="phone" value={user.phone} onChange={handleInputs}/></div>
                                <label className='form-label'>Work</label>
                                <div><input className='form-control w-100' type="text" name="work" value={user.work} onChange={handleInputs}/></div>
                                <label className='form-label'>Password</label>
                                <div><input className='form-control w-100' type="text" name="password" value={user.password} onChange={handleInputs}/></div>
                                <label className='form-label'>Confirm Password</label>
                                <div><input className='form-control w-100' type="text" name="cpassword" value={user.cpassword} onChange={handleInputs}/></div>
                                <div className="form-group form-button">
                                <input type='submit' name='register' className="btn btn-primary" value="register" onClick={PostData} />
                                </div>
                                
                                <div>
                                    <Link to="/login">Existing Users</Link>
                                </div>
                            </div>
                            <div className="col-3">
                                <img src='ShopperImg/free-registration-desk.webp' width='700px' height='500px' />
                            </div>
                        </form>
                
            </div>

        </div>
    )
}