import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginAsync } from '../redux/Slice/InitalSlice';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }: any) => {
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.initial.loginData);
  if (data.length==0) {
    return <Navigate to="/login" />;
  }
  return <>{children}</>;
}

export default ProtectedRoute