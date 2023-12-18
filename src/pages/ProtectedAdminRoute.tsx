import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRouteAdminRoute = ({ children }: any) => {
    const data = useSelector((state: any) => state.initial.loginData);
    console.log(data.user.firstName);
    if (data.user.firstName === 'Admin') {
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
