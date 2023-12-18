import React from 'react';
import './styles.css'; 
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Home = () => {
    const data = useSelector((state: any) => state.initial.loginData);
    console.log(data);
    return (
        <div>
            <div className="navbar">
                <div className="logo">Your Logo</div>
                <div className="navbar-tabs">
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Signup</Link>
                    <Link to="/onBoard">Onboard Developer</Link>
                    <Link to="/getAllDevelopers">Get All Developers</Link>
                </div>
            </div>
            <div className="content">
                {/* Your homepage content goes here */}
                <h1>Welcome to Your Website</h1>
                <p>This is a place for amazing things!</p>
            </div>
        </div>
    );
}

export default Home;
