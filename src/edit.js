import React from "react"

class EditButton extends React.Component{
    render(){
        return(
            <span id="edit" onClick={this.props.handleEdit}>Edit</span>
        )
    }
}
export default EditButton