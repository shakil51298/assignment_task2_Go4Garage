import React from 'react';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../../firebase.config';


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}


const LoginWithPassWord = () => {

    // google Sign in
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then((result) => {
            var user = result.user;
            console.log(user);
        }).catch((error) => {
            var errorMessage = error.message;
            toast.error(errorMessage, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            })
        });
    }

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = userInfo => {
        fetch('http://localhost:5000/user', {
            method: 'POST',
            body: JSON.stringify({ userInfo }),
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then(data => {
                // console.log(data[0].userType , data[0].userName);
                if (data) {
                    toast.success(`Hi , ${data[0].userName}.You are logged sucessfully as our ${data[0].userType}`, {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    })
                }
            })
    };
    return (
        <div className="centered">
            <h3>Login</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="form-control" placeholder="user name : shakil_123" {...register("User_name", { required: true })} />
                {errors.User_name && <span>This field is required</span>}
                <br />
                <input className="form-control" placeholder="password : at least six numbers,latters" {...register("password", { required: true })} />
                {errors.password && <span>This field is required</span>}
                <br />
                <div className="text-center">
                    <input className="btn btn-success" type="submit" value=" login" />
                </div>
            </form>
            <div className="buttonGroup text-center">
                <br />
                <button onClick={handleGoogleSignIn} className="m-1 btn btn-outline-success">signin with google</button>
                <button className="m-1 btn btn-outline-success">signin with Facebook</button>
            </div>
            <h6 className="text-center mt-3">signin and signup as <Link to="/user/signup"> signup ?</Link>
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

export default LoginWithPassWord;