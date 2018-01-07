import React, { Component } from 'react'

class B extends Component {
    state = {
        text: 0,
        input: '',
        todos: ['Todo 1', 'Todo 2']
    }
    funcA = (a, b) => {
        console.log(this.state.text)
        // this.state.text++;
        // this.setState({
        //     text: this.state.text + 9,
        //     newText: 123
        // })
        // console.log(this.state.text)
        // console.log(a+b);
    }

    handleKeyPress = (event) => {
        if (event.key == 'Enter') {
            this.setState({
                text: this.state.input,
                input: '',
                todos: [...this.state.todos, this.state.input]
            })
        } else {
            this.setState({
                input: event.target.value
            })
        }
    }

    renderTodos = () => {
        return this.state.todos.map((item, index) => {
            return <li key={index}>{index+1}: {item}</li>
        })
    }

    render() {
        return (
            <div>
                <p>{this.state.text}</p>
                <input
                  value={this.state.input}
                  onChange={this.handleKeyPress}
                  onKeyPress={this.handleKeyPress}
                />
                <button
                  onClick={() => this.funcA(1,2)}
                >Click Me!</button>
                <ol>
                  {this.renderTodos()}
                </ol>
            </div>
        )
    }
}

export default B