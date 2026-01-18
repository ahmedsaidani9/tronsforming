/*Code 01 : 

import React from 'react'; 
const Greeting = ({ name }) => { 
return <div>Hello, {name}!</div>;
 };
 export default Greeting;*/


 import React from 'react';

// Step 1: Define a TypeScript interface for props
interface GreetingProps {
  name: string; // The 'name' prop should be a string
}

// Step 2: Use the interface in the functional component
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;