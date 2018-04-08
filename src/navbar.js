import React from "react"

import {Link} from "react-router-dom"
class NavBar extends React.Component{
    render(){
        const login = (this.props.authorize) ?
        <li onClick={this.props.logout}><Link to="/">Logout</Link></li> : <li><Link to="/login">Login</Link></li>
        return(
            <ul id="navbar">
               <li><Link to="/">Home</Link></li>
               {login}
                 
            </ul>
        )
    }
}

export default NavBar