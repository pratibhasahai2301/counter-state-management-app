import React, { Component } from 'react';

class Counter extends Component {

  render() {
    return (
      <div className="mt-3">
        <span className="badge">{ this.formatCount() }</span>
        <button className="btn btn-primary btn-sm m-2"
                onClick={() => this.props.onIncrement(this.props.counter.id)}>Increment</button>
        <button className="btn btn-secondary btn-sm m-2"
                onClick={() => this.props.onDecrement(this.props.counter.id)}>Decrement</button>
        <button className="btn btn-danger btn-sm m-2"
                onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</button>
      </div>
    )
  }

  formatCount() {
      return this.props.counter.value === 0 ? 'Zero' : this.props.counter.value;
  }
}

export default Counter;