import React from "react"
import Span from "./span"
import EditButton from "./edit"
import EditForm from "./EditForm"
import Timer from "./timer"
class Li extends React.Component{
    state = {
        edit:false,
        time:""

    }
    handleComplete = ()=>{
        this.props.handleComplete(this.props.id)
    }
    handleEdit = (e) => {
        e.stopPropagation()
        this.setState({edit:true})
    }
    handleCancel = (e) => {
        e.stopPropagation()
        this.setState({edit:false})
    }
    handleSave = (title,date) => {
          this.setState({time:date,edit:false})
          this.props.updateTitle(this.props.id,title)
    }
    handleClose= (id) => {
        this.setState({time:""})
        this.props.handleClose(id)
    }
    render(){
       // console.log(this.state.time)
        if(this.state.edit) return(
        <EditForm handleCancel={this.handleCancel} 
        text={this.props.text} handleSave={this.handleSave}
         date={this.state.time}
         />)
        var completed = this.props.completed ? "completed" : ""
        return(
            <li 
            onClick={this.handleComplete} className={completed}>
            {this.props.text}
            <Timer text={this.state.time}/>
            <EditButton handleEdit={this.handleEdit}/>
            <Span handleClose={this.handleClose} id={this.props.id}/>
            </li>
        )
    }
}

export default Li