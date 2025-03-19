import React, { useEffect } from 'react'
import {Link,useNavigate} from 'react-router-dom'
const Nav=()=>
{
    const auth= localStorage.getItem('users')
    const navigate=useNavigate()
    const logout=()=>
    {
         localStorage.clear()
         navigate('/signUp')
    }
   return <>
   <div>
    <ul className='nav-ul'>
        <li><Link to="/">Products</Link></li>
        <li><Link to="/add">Add Product</Link></li>
        <li><Link to="/update">Update Product</Link></li>
        {/* <li><Link to="/logout">Logout</Link></li> */}
        <li><Link to="/profile">Profile</Link></li>
        <li>{auth? <Link to="/SignUp">SignUp</Link>:<Link onClick={logout} to="/SignUp">Logout</Link>}</li>
    </ul>
   </div>
   </>
}
export default Nav;