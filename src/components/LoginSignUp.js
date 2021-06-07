import { Card, CardContent } from '@material-ui/core'
import React, { useState } from 'react'
import "./loginSignup.css"


function LoginSignUp() {

    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [login,setLogin] = useState(true);
    const [signUp,setSignUp] = useState(null);

    const handleValidation = () => {
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email) && password !== "") return true;
        else return false;
    }

    const handleLogin = (event) => {
        event.preventDefault()
        if(!handleValidation()) 
        {
            window.alert("Invalid Email Address or Password")
            return
        }
        //Login API Call
    }

    const handleSignUp = (event) => {
        event.preventDefault()
        if(!handleValidation()) 
        {
            window.alert("Invalid Email Address or Password")
            return
        }
        //SignUp API Call
    }

    const handleChange = () => {
        setLogin(!login);
        setSignUp(!signUp);
    }

    return (
        <Card className={"loginSignUpCard"} >
            <CardContent className={"loginSignUpCardContent"}>
                    <div className={"loginSignUpCardImg"}>
                        <div className={"loginSignUpCardImgOne"}></div>
                        <div className={"loginSignUpCardImgTwo"}></div>
                        <div className={"loginSignUpCardImgTwo"}></div>
                        <div className={"loginSignUpCardImgTwo"}></div>
                        <div className={"loginSignUpCardImgThree"}></div>
                    </div>
                <form className={"loginSignUpForm"}>
                    <input 
                        type="text" 
                        placeholder="Email"
                        onChange = { event => event.target.value === " " ? null : setEmail(event.target.value) }
                        value={email}

                        />
                        
                    <input 
                        type="password" 
                        placeholder="Password"
                        onChange = { event => event.target.value === " " ? null : setPassword(event.target.value) }
                        value={password}
                        />

                    {login ? <button type="submit" onClick={handleLogin}>Login</button> : null}
                    {signUp ? <button type="submit" onClick={handleSignUp}>SignUp</button> : null}

                    {login ? <div onClick={handleChange}>New Here ? Sign Up.</div> : null}
                    {signUp ? <div onClick={handleChange}>Already have an account ? Login</div> : null}
                </form>
            </CardContent>  
        </Card>
    )
}

export default LoginSignUp
