import React from "react"

class Span extends React.Component{
    handleClose = (e) => {
        e.stopPropagation()
        this.props.handleClose(this.props.id)
    } 
    render(){
        return(
           <span id="close"onClick={this.handleClose} >{"\u00D7"}</span>
        )
    }
}

export default Span