import React, { useContext, useState } from 'react';
import './LoginFrom.css';
import athenImg from '../../../logos/athenticarion.png';

import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router-dom';
firebase.initializeApp(firebaseConfig);

const LoginFrom = () => {
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [createUser, setCreateUser] = useState(false);
    const [user, setUser] = useState({
        newUser: false,
        name: '',
        email: "",
        password: "",
        error: "",
        success: ""
    })
    const handleChange = (e) => {
        // console.log(e.target.name, e.target.value);
        let fromValid = true;
        if (e.target.name === "email") {
            fromValid = /\S+@\S+\.\S+/.test(e.target.value);


        }
        if (e.target.name === "password") {
            fromValid = e.target.value.length > 6;
        }
        if (fromValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);

        }
    }
    const handleSubmit = (e) => {
        if (createUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                })
                .catch(error => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo)
                });
        }
        if (!createUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    history.replace(from);
                    setLoggedInUser(newUserInfo)
                    setUser(newUserInfo);
                })
                .catch(error => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo)
                });
        }
        e.preventDefault();
    }

    return (
        <div>
            <div className="row">
                <div className="col-md-6 d-flex align-items-center">
                    <form onSubmit={handleSubmit}>
                        <p className="py-3 text-center">Login</p>
                        <div>
                            <input type="checkbox" name="newUser" onChange={() => setCreateUser(!createUser)} />
                            <label htmlFor="newUser" className='text-danger'>Create a new user?</label>

                        </div>
                        {
                            createUser && <div className="inputStyle"><input type="text" name='name' onBlur={handleChange} placeholder="Your Name" required /></div>
                        }

                        <div className="inputStyle">
                            <input type="text" name='email' onBlur={handleChange} placeholder="User name or email" required />
                        </div>

                        <div className="inputStyle">
                            <input type="password" name="password" onBlur={handleChange} placeholder="Password" required />
                        </div>
                        <div>
                            <p className="text-danger">Forgot your password?</p>
                        </div>
                        <div>
                            <input type="submit" value={createUser ? "Sign up" : "Sign in"} className="btn btn-primary btn_style px-5 w-100" />
                            <input type="submit" value="Sign in with Google" className="btn btn-primary btn_style px-5 w-100 mt-1" />
                        </div>
                        <p className="text-danger">{user.error}</p>
                        {
                            user.success && <p className="text-success">User {createUser ? 'Created ' : 'Login'} successfully</p>
                        }

                    </form>
                </div>
                <div className="col-md-6">
                    <img style={{ height: '100vh' }} src={athenImg} alt="" className="img-fluid" />
                </div>
            </div>
        </div>
    );
};

export default LoginFrom;