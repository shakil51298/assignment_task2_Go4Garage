import React from 'react';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';





const LoginPage = () => {

    // hook form
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = userInfo => {
        const userName = userInfo.User_name;
        const userPass = userInfo.password;
        const userType = userInfo.type;
        fetch('http://localhost:5000/user/login', {
            method: 'POST',
            body: JSON.stringify({ userName, userPass, userType }),
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then(data => {
                toast.success('You sucessfully registered', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
            })
    };
    return (
        <div className="centered" id="login">
            <h3>Registration form</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="form-control w-100" placeholder="user name : shakil_123" {...register("User_name", { required: true })} />
                {errors.User_name && <span>This field is required</span>}
                <br />
                <input className="form-control" placeholder="password : at least six numbers,latters" {...register("password", { required: true })} />
                {errors.password && <span>This field is required</span>}
                <br />
                <select class="form-control" aria-label="Default select example" {...register("type", { required: true })}>
                    {errors.type && <span>This field is required</span>}
                    <option selected>Select Your type</option>
                    <option value="Shopkeeper">Shopkeeper</option>
                    <option value="Customer">Customer</option>
                </select>
                <br />
                <div className="text-center">
                    <input className="btn btn-success" type="submit" />
                </div>
            </form>
            <h6 className="text-center mt-3">signin and signup as <Link to="/user/login"> Login ?</Link>
            </h6>

            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
};

export default LoginPage;