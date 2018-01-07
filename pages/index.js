import React, { Component } from 'react'

class myApp extends Component{
    state = {
        firstLine: 'To Do Lists',
        input: '',
        todos: [],
    }

    handleChange = (event) => {
        if(event.key === 'Enter'){
            const newTodos = [...this.state.todos,this.state.input]
            this.setState({todos: newTodos})
        }
        else{
            this.setState({input: event.target.value});
        }
    }

    renderTodo = () => {
        return this.state.todos.map((item, count) => {
            return <li key={count}>{item}</li>
        })
    }

    render(){
        return (
            <div>
                <h1>{this.state.firstLine}</h1>
                <input
                value={this.state.input}
                onChange={this.handleChange}
                onKeyPress={this.handleChange}
                />
                <ol>
                    {this.renderTodo()}
                </ol>
            </div>
        )
    }
}

export default myApp
