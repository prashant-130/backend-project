import React from 'react';

import { Navigate,Outlet } from 'react-router-dom';


const PrivateRoute=()=>
{
    const auth= localStorage.getItem('users')


    return auth? <Outlet></Outlet>: <Navigate to='/signUp'></Navigate>
}

export default PrivateRoute;