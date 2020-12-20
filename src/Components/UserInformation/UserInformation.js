import React, { useContext, useEffect, useState } from 'react';
import './UserInformation.css';
import { UserContext } from '../../App';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import NavBar from '../Navbar/NavBar';


const UserInformation = () => {

    const history = useHistory();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {

        const user = { ...loggedInUser, data }
        fetch('https://peaceful-reaches-79554.herokuapp.com/addUserInfo', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('your data was saved')
                }
                history.push('/booking')
            })
        
    };

    return (
        <div style={{ background: 'black', height: '100vh' }}>
            <NavBar></NavBar>
            <div className="container">
                <h3 className="text-center my-5 pt-5 text-light">Book at the Ticket</h3>
                <form className="formBorder mt-5 pt-4" onSubmit={handleSubmit(onSubmit)}>
                    <div className="inputStyle">
                        <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Full Name" className="form-control mb-3" />
                        {errors.name && <span className="error">name is required</span>}
                    </div>
                    <div className="inputStyle">
                        <input name="Email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Username or Email" className="form-control mb-3" />
                        {errors.Email && <span className="error">Email is required</span>}
                    </div>
                    <div className="inputStyle">
                        <input name="date" defaultValue={new Date().toDateString()} ref={register({ required: true })} placeholder="dd-mm-yy" className="form-control mb-3" />
                        {errors.date && <span className="error">date is required</span>}
                    </div>
                    <div className="inputStyle">
                        <input name="date" defaultValue="75 tk" ref={register({ required: true })} placeholder="dd-mm-yy" className="form-control mb-3" />
                        {errors.date && <span className="error">date is required</span>}
                    </div>
                    <div>
                        <input className="btn btn-primary px-5" type="submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserInformation;