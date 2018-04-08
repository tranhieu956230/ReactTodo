import ReactDOM from "react-dom"
import React from "react"
<<<<<<< HEAD
import App from "./app"

ReactDOM.render(<App/>,document.getElementById("root"))
=======
import Home from "./home"
import LoginPage from "./LoginPage"
import RegisterPage from "./registerPage"
import { Route, Switch, BrowserRouter } from "react-router-dom"
import NavBar from "./navbar"
import {login,register} from "./apiService"
class App extends React.Component {
    state = {
        authorize:false,
        loginMessage:"",
        registerMessage:"",
        registerState:false
    }
    componentDidMount(){
        if(!!sessionStorage['token'] ) this.setState({authorize:true})
    }
    login = ({email,password}) => {
        login({email,password}).then(res=>{
            
              sessionStorage.setItem("token" , res.data.accessToken)
              this.setState({authorize:res.success,loginMessage:res.message})
        })
    }
    logout = () => {
        this.setState({authorize:false})
        sessionStorage.removeItem("token")
    }
    signUp = (obj) => {
       register({email:obj.email,password:obj.password,name:obj.username}).then(res=>{
           
          this.setState({registerMessage:res.message,registerState:res.success})
       })
    }
    render() {
    
        return (
            <BrowserRouter>
                <div>
                    <NavBar authorize={this.state.authorize} logout={this.logout}/>
                    <Switch>
                        <Route exact path="/" component={() => <Home authorize={this.state.authorize}/>} />
                        <Route exact path="/login"  component={() => 
                        <LoginPage
                         login={this.login}
                         authorize={this.state.authorize} 
                         message={this.state.loginMessage}
                         />}
                         />
                        <Route exact path="/register" component={() => 
                        <RegisterPage
                         signUp={this.signUp}
                         message={this.state.registerMessage}
                         success={this.state.registerState}
                        />} 
                        />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
>>>>>>> 83307eebb74df8777bfd7fd1ac5854f42c6323a6

