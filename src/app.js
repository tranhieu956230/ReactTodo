
import React from "react"
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
              
              if(res.success)sessionStorage.setItem("token" , res.data.accessToken)
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
    clearState = () => {
        this.setState({registerState:false,loginMessage:"",registerMessage:""})
    }
    
    render() {
    console.log(this.state.loginMessage)
        return (
            <BrowserRouter>
                <div>
                    <NavBar authorize={this.state.authorize} logout={this.logout} clearState={this.clearState}/>
                    <Switch>
                        <Route exact path="/" component={() => <Home authorize={this.state.authorize}/>} />
                        <Route exact path="/login"  component={() => 
                        <LoginPage
                         login={this.login}
                         authorize={this.state.authorize} 
                         message={this.state.loginMessage}
                         clearState={this.clearState}
                         />}
                         />
                        <Route exact path="/register" component={() => 
                        <RegisterPage
                         signUp={this.signUp}
                         message={this.state.registerMessage}
                         success={this.state.registerState}
                         clearState={this.clearState}
                        />} 
                        />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App

