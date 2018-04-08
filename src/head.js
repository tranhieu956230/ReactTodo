import React from "react"

class Head extends React.Component {
    state = {
        text: ""
    }
    
    handleAdd = () => {
        if(this.state.text !== "") {
        this.props.handleAdd(this.state.text)
        this.setState({ text: '' })
        }
    }
    handleChange = (e) => {
        this.setState({ text: e.target.value })
    }
    handleKeyPress = (e) => {

        if (this.state.text !== "" && e.key === "Enter") {
            e.preventDefault()
            this.props.handleAdd(this.state.text)
            this.setState({ text: '' })
        }
    }
    render() {
        return (
            <div id="head">
                <h1>TODO LIST</h1>
                <form onSubmit={(e) => e.preventDefault()}>
                    <input
                        onChange={this.handleChange}
                        placeholder={"Title..."}
                        value={this.state.text}
                        onKeyPress={this.handleKeyPress}
                    />
                    <button onClick={this.handleAdd}>Add</button>
                </form>
            </div>
        )
    }
}

export default Head