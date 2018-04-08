import React from "react"


class EditForm extends React.Component{
    state = {
        title:"" ,
        date:""
    }
    titleChange = (e) => {
       this.setState({title:e.target.value})
    }
    dateChange = (e) => {
        this.setState({date:e.target.value})
    }
    handleSave = (e) => {
        e.stopPropagation()
        this.props.handleSave(this.state.title,this.state.date)
    }
    render(){
        return(
            <li>
             <label htmlFor="title"><b>Title:</b></label>
             <input type="text" name="title" placeholder="title" onChange={this.titleChange} required/>
             <label htmlFor="deadline"><b>DeadLine:</b></label>
             <input type="text" name="title" placeholder="DD/MM/YYYY" onChange={this.dateChange} />
             <button type="button" onClick={this.handleSave} id="save">Save</button>
             <button type="button" onClick={this.props.handleCancel} id="cancel">Cancel</button>
            </li>
        )
    }
}
export default EditForm