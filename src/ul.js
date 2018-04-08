import React from "react"
import Li from "./li"

class Ul extends React.Component{

    render(){
        var list = this.props.list.map((obj,i) => 
        <Li
         key={"key-"+i} 
        text={obj.title} 
        id={obj._id} 
        completed={obj.completed} 
        handleComplete={this.props.handleComplete}
        handleClose={this.props.handleClose}
        updateTitle={this.props.updateTitle}
        />)
        return(
            <ul>
                 {list}
            </ul>
        )
    }
}
export default Ul