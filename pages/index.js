import React, { Component } from 'react'

class B extends Component {
  state = {
    text: 123123,
    sdjfs: 2234234,
    input: 'sjdfskjf',
    todos: ['sdfjsdkf', 'sjdfhsdf']
  }

  kuy = () => {
    this.setState({ todos: 99999 })
  }

  renderTodo = () => {
    return this.state.todos.map((item) => {
      return <li>{item}</li>
    })
  }

  render() {
    return (
      <div>
        {this.state.text}
        <p>{this.state.a}</p>
        <input
          value={this.state.input}
        />
        <button
          onClick={this.kuy}
        >Click</button>
        
        <ol>
          {this.renderTodo()}
        </ol>
      </div>
    )
  }
}

export default B
