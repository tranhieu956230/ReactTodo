import React from "react"
import { Redirect ,Link} from "react-router-dom";


class LoginPage extends React.Component{

    state = {
        email:"",
        password: "",
    }
    login = () => {
          this.props.login({email: this.state.email,password:this.state.password})
    }
    passwordChange = (e) =>{
        this.setState({password:e.target.value})
    }
    emailChange = (e) =>{
        this.setState({email:e.target.value})
    }
    render(){
       if(this.props.authorize) return <Redirect to="/" />
        return(
            <div id="login">
                   <form>
                        <h1>Login</h1>
                        <p>You must login in order to continue</p>
<<<<<<< HEAD
                        <p id="error">{this.props.message}</p>
=======
                        <p>{this.props.message}</p>
>>>>>>> 83307eebb74df8777bfd7fd1ac5854f42c6323a6
                        <label for="email"><b>Email</b></label><br/>
                        <input type="text" placeholder="Email" name="email" onChange={this.emailChange} required/><br/>
                        <label for="psw"><b>Password</b></label><br/>
                        <input type="password" placeholder="password" onChange={this.passwordChange} name="psw" required/><br/>
                        <button type="button" onClick={this.login}>Login</button>
                    </form>
<<<<<<< HEAD
                    <p>Not registered? <span> <Link to="/register">Create an account</Link></span></p>
=======
                    <p>Not registered? <span><Link to="/register">Create an account</Link></span></p>
>>>>>>> 83307eebb74df8777bfd7fd1ac5854f42c6323a6
            </div>
        )
    }
}
export default LoginPage