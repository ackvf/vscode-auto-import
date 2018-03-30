import React from 'react'


export default class Account extends React.Component {
  state = {
    counter: 0
  }

  render() {
    return (
      <>
        <h1>Dashboard</h1>
        <p className="App-intro">
          <button
          >increment
          </button>
          <button
          >decrement
          </button>
          <span>{this.state.counter}</span>
        </p>
      </>
    )
  }
}
