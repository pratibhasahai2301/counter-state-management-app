import React, { Component, Fragment } from 'react';
import Counter from './counter';

import 'bootstrap/dist/css/bootstrap.css';

class Counters extends Component {
  render() {
    const { counters, onReset, onIncrement, onDecrement, onDelete } = this.props;

    return (
      <Fragment>
        <button className="btn btn-primary mt-3" onClick={onReset}>Reset</button>
        {
          counters.map((counter) => {
            return <Counter key={counter.id}
                            counter={counter}
                            onDelete={onDelete}
                            onIncrement={onIncrement}
                            onDecrement={onDecrement}
            />
          })
        }
      </Fragment>

    );
  }
}

export default Counters;