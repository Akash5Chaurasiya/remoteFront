import React, { useState } from 'react';
import './styles.css'; // Import your CSS file for styling
import { useDispatch, useSelector } from 'react-redux';
import { loginAsync } from '../redux/Slice/InitalSlice';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate();
    const dispatch=useDispatch();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e:any) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e:any) => {
        e.preventDefault();
        dispatch(loginAsync(formData)).then((ele: any) => {
            console.log(ele)
            console.warn("login Success")
            navigate('/');
        }).catch((err: any) => {
            console.log(err);
        });
        console.log('Form submitted with data:', formData);
    };
    const data=useSelector((state:any)=>state.initial.loginData);
    console.log(data);
    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />

                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
