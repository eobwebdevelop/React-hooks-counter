
// -------------- Counter component with state ----------
// import React, { Component } from'react';

// class Counter extends Component {

//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//     };
//   }

//   handleCounter = (value) => {
//     this.setState({count: value});
//   }

//   render() {
//     return (
//       <div>
//         <p>The counter is at : {this.state.count}</p>
//         <button onClick={() => this.handleCounter(this.state.count + 1)}>>
//           +1
//         </button>
//         <button onClick={() => this.handleCounter(this.state.count - 1)}>>
//           -1
//         </button>
//       </div>
//     );
//   }
// }

// export default Counter;

//---------- //Counter component with state -----------

// --------- Counter component with hooks function --------

import React, { useState } from 'react';

function Counter() {
  // Declares a new state variable, which we will call "count"
  // Declares a setCount function that allows you to modify the count value
  const[count, setCount] = useState(0);
  const[startValue] = useState(0);

  return (
    <div>
    <p> This is the start value of the counter: {startValue}</p>
      <p>The counter is at : {count} </p>
      <button onClick={() => setCount(count + 1)}>>
        +1
      </button>
      <button onClick={() => setCount(count - 1)}>>
        -1
      </button>
    </div>
  );
}

export default Counter;

