import React from "react"
import "./style.css"
import Head from "./head"
import Ul from "./ul"
import { getList, addTodo,close,complete } from "./apiService"
import {Redirect} from "react-router-dom"
class Home extends React.Component {
    state = {
        list: []
    }
    componentDidMount() {
        getList().then(obj => {
            this.setState({ list: obj.data })
        }) 

    }
    handleAdd = (text) => {
        addTodo(text).then(() =>
            getList().then(obj => {
                this.setState({ list: obj.data })
            })
        )
    }
    
    handleClose = (id) => {
        close(id).then(() =>
            getList().then(obj => {
                this.setState({ list: obj.data })

            })
        )
    }
    handleComplete = (id) => {
        complete(id).then(()=>{
            getList().then((obj) =>{
                this.setState({list:obj.data})
            })
        })
    }
    updateTitle = (id,title) =>{
      var obj = this.state.list.map((obj) =>{
          if(obj._id === id) obj.title=title
          return obj
      })
      this.setState({list:obj})
    }
    render() {
        if(!this.props.authorize) return <Redirect to="/login" />
        return (
            <div id="home">
                <Head handleAdd={this.handleAdd} />
                <Ul
                    list={this.state.list}
                    handleComplete={this.handleComplete}
                    handleClose={this.handleClose}
                    updateTitle={this.updateTitle}
                />
            </div>
        )
    }
}
export default Home