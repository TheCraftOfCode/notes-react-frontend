import { Card, CardContent } from '@material-ui/core'
import React, { useState } from 'react'
import "./loginSignup.css"
import Axios from "axios"

function LoginSignUp(props) {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [login,setLogin] = useState(true);
    const [signUp,setSignUp] = useState(false);

    const [error,setError] = useState();

    const handleLogin = () => {
        const data = {
            email : email,
            password : password
        }

        Axios.post("https://xpressnotes.herokuapp.com/api/auth/login",data).then(function (response){
            if(response?.data?.token) 
            {
                localStorage.setItem("token", response.data.token) 
                localStorage.setItem("email", email) 
                console.log(response.data)
            }
        }).then(() => props.handlePage()).catch(error => setError("Incorrect Username or Password"));
    }

    const handleSignUp = () => {
        const data = {
            name : name,
            email : email,
            password : password
        }
        Axios.post("https://xpressnotes.herokuapp.com/api/auth/register",data,{headers : {"Content-type" : "application/json"}})
        .then(response => handleLogin(null)).catch(error => setError("Invalid data"))
    }

    
    const handleLoginClick = (event) => {
        event.preventDefault()
        handleLogin()
    }

    const handleSignUpClick = (event) => {
        event.preventDefault()
        handleSignUp()
        
    }

    const handleChange = () => {
        setLogin(!login);
        setSignUp(!signUp);
        setError();
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

                    {error ? <span className="loginSignUpInvalidCred">{error}</span> : null}
                    

                    <form className={"loginSignUpForm"}>

                        {
                            signUp ? <input 
                                        type="text"
                                        placeholder="Name" 
                                        onChange ={ event => event.target.value === " " ? null : setName(event.target.value) }
                                        value = {name} 
                                    /> : null

                        }

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



                        {login ? <button type="submit" onClick={handleLoginClick}>Login</button> : null}
                        {signUp ? <button type="submit" onClick={handleSignUpClick}>SignUp</button> : null}

                        {login ? <div onClick={handleChange}>New Here ? Sign Up.</div> : null}
                        {signUp ? <div onClick={handleChange}>Already have an account ? Login</div> : null}
                    </form>
            </CardContent>  
        </Card>
    )
}

export default LoginSignUp
