/*Code 02 :

import React, { Component } from 'react'; 
class Counter extends Component { 
state = {
 count: 0
 }; increment = () => {
 this.setState({ count: this.state.count + 1 }); 
}; 
render() { 
return 
( <div> 
<p>Count: {this.state.count}</p> 
<button onClick={this.increment}>Increment</button> 
</div> );
 }
 } 
export default Counter;*/

import React, { Component } from 'react';

// Step 1: Define Props interface (empty if no props)
interface CounterProps {}

// Step 2: Define State interface
interface CounterState {
  count: number;
}

// Step 3: Add types to the Component
class Counter extends Component<CounterProps, CounterState> {
  // Initialize state with type safety
  state: CounterState = {
    count: 0,
  };

  // Step 4: Increment method
  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;