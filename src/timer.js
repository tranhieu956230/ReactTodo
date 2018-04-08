import React from "react"


class Timer extends React.Component{
    render(){
          return(
              <span id="timer">{this.props.text}</span>
          )
    }
}

export default Timer