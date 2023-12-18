import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRouteAdminRoute = ({ children }: any) => {
    const storedUserData = localStorage.getItem('userData');
    const userData = storedUserData ? JSON.parse(storedUserData) : null;
    console.log(userData);
    console.log(userData.firstName);
    useEffect(() => {
    }, []);
    if (userData  && userData.firstName =='Admin') {
        return <>{children}</>;
    } else {
        return (
            <div>
                <h3>Sorry, you are not authorized to access this page. This page is for admins only.</h3>
            </div>
        );
    }
};

export default ProtectedRouteAdminRoute;
