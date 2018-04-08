import React from "react"
import { Redirect } from "react-router-dom";

class RegisterPage extends React.Component {
    state = {
        email: "",
        username: "",
        password: "",
        password1: "",
        redirect:false
    }
    emailChange = (e) => {
        this.setState({ email: e.target.value })
    }
    usernameChange = (e) => {
        this.setState({ username: e.target.value })
    }
    passwordChange = (e) => {
        this.setState({ password: e.target.value })
    }
    repeatChange = (e) => {
        this.setState({ password1: e.target.value })
    }
    signUp = () => {
        this.props.signUp(this.state)
    }
    redirect = () => {
        this.setState({redirect:true})
    }
    clearState = () => {
       this.props.clearState()
    }
    render() {
        const successMessage = (this.props.success) ? <p id="success">You've successfully created a new account<br/>Redirect to Login in 5 seconds...<br/></p> : null
        if(this.props.success) setTimeout(()=>{this.redirect()} ,5000)
        if(this.state.redirect) 
        {   
            this.clearState()
            return <Redirect to="/login" />
        }
      
        this.setState({redirect:true})
    }
    render() {
        const successMessage = (this.props.success) ? <p id="success">You've successfully created a new account<br/>Redirect to Login in 5 seconds...<br/></p> : null
        if(this.props.success) setTimeout(()=>{this.redirect()} ,5000)
        if(this.state.redirect) return<Redirect to="/login" />
        
        return (
            <div id="register">
                <h1>Sign up</h1>
                <p>Please fill in this form to create an account</p>

                <p id="error">{this.props.message}</p>
                {successMessage}
                <hr />
                
                <label for="email"><b>Email</b></label><br />
                <input type="text" placeholder="Enter Email" name="email" onChange={this.emailChange} required /><br />

                <label for="username"><b>Username</b></label><br />
                <input type="text" placeholder="Enter Username" name="username" onChange={this.usernameChange} required /><br />

                <label for="psw"><b>Password</b></label><br />
                <input type="password" placeholder="Enter Password" name="psw" onChange={this.passwordChange} required /><br />

                <label for="psw-repeat"><b>Repeat Password</b></label><br />
                <input type="password" placeholder="Repeat Password" name="psw-repeat" onChange={this.repeatChange} required /><br />

                <p>By creating an account you agree to our <a href="#" >Terms & Privacy</a></p><br />
                <button type="submit" onClick={this.signUp}>Sign Up</button>
            </div>

        )
    }
}
export default RegisterPage