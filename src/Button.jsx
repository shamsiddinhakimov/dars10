import React, { useMemo } from 'react';

// export default function ExampleComponent({ value }) {
//   const expensiveCalculation = useMemo(() => {
   
//     return value * 1;
//   }, [value]);

//   return <div>{expensiveCalculation}</div>;
// }
// export default function ExampleComponent({ value }) {
//     const expensiveCalculation = useMemo(() => {
     
//       return value * 10;
//     }, [value]);
  
//     return <div>{expensiveCalculation}</div>;
//   }
export default function ExampleComponent({ value }) {
    const expensiveCalculation = useMemo(() => {
     
      return value * 20;
    }, [value]);
  
    return <div>{expensiveCalculation}</div>;
  }


  
