import React, { Component } from "react"

export default class App extends Component {
    state = {
        name: "",
        email: "",
        password: "",
        isActive: false,
        type: "password",
        text: "Show password"
    }
    handleInput = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    handleCheckboxChange() {
        if (this.state.isActive === false) {
            this.setState({ isActive: true, type: "text", text: "Hide password" })
        } else {
            this.setState({ isActive: false, type: "password", text: "Show password" })
        }
    }
    
    render() {
        console.log(JSON.stringify(this.state))
        


        return (
            <div className='Name'>
                <label htmlFor="name">Name:</label>
                <input value={this.state.value} type="text" id="name" name="name" onChange={(e)=>this.handleInput(e)} />
                <button onClick={this.handleButton}>sil</button>

                <label htmlFor="email">Email:</label>
                <input value={this.state.value} type="text" id="email" name="name" onChange={(e)=>this.handleInput(e)} />
                <button onClick={this.handleButton}>sil</button>


                <label htmlFor="password">Password:</label>
                <input value={this.state.value} type="text" id="name" name="name" onChange={(e)=>this.handleInput(e)} />
                <button onClick={this.handleButton}>sil</button>
            </div>

        )
        
    } 
    }