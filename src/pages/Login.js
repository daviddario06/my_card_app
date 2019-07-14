import React from 'react';
import '../styles/Login.css'

const Login = () => (
    <form className = "Login" action ="/">
        <h3 className = "userName">User Name</h3>
        <input className = "inputUser"></input>
        <br/>
        <h3 className = "passWord" >Password</h3>
        <input className = "inputPass"></input>
        <button type = "submit" className = "buttonLogin"  >Login</button>          
    </form>
)

export default Login