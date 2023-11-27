import React from "react";
import './Login.css'
import logo from '../../../images/logo.png'

const Login = () => {
    return (
        <>
            <div className="login-page">
                <div className="login">
                    <div className="login-card">
                        <div className="login-user">
                            <p className="login-txt">Login</p>
                            <img src={logo} className="login-img"/>
                            <p className="login-mf-txt">Login with Microsoft Account</p>
                           <div className="btn-div"><button type="button" className="login-btn">Login</button></div> 
                        </div>
                        <div className="login-text">
                            <div className="login-greet1">Hello Triconites !</div>
                            <div className="login-greet2">See what's happening in Tricon.</div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;