import React, { Component, Fragment } from 'react';
import Counters from './components/counters';
import Navbar from './components/navbar';

class App extends Component {
  state = {
    counters: [
      {id: 1, value: 0},
      {id: 2, value: 0},
      {id: 3, value: 0},
      {id: 4, value: 0},
    ],
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(counter => counter.id !== counterId);
    this.setState({counters});
  };

  handleIncrement = (counterId) => {
    const counters = [...this.state.counters];
    const index = this.state.counters.findIndex(counter => counter.id === counterId);
    counters[index].value++;
    this.setState({counters});
  };

  handleReset = () => {
    const counters = this.state.counters.map(counter => ({...counter, value: 0}));
    this.setState({counters});
  };

  handleDecrement = (counterId) => {
    const counters = [...this.state.counters];
    const index = this.state.counters.findIndex(counter => counter.id === counterId);
    if (counters[index].value) {
      counters[index].value--;
    }

    this.setState({counters});
  };

  render() {
    return (
      <Fragment>
        <Navbar counterLength={this.state.counters.filter(entry => entry.value > 0).length}/>
        <div className="container">
          <Counters counters={ this.state.counters }
                    onDelete={ this.handleDelete }
                    onDecrement={ this.handleDecrement }
                    onIncrement={ this.handleIncrement }
                    onReset={ this.handleReset }/>
        </div>
      </Fragment>
    );
  }
}

export default App;
