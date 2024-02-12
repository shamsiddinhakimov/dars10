import Button from './Button'
import React, { useCallback } from 'react';


function App() {
  // const handleClick = useCallback(() => {
      
  //   onClick();
  // }, [onClick]);



  return (<>
  <Button value="2"></Button>
   <button onClick={handleClick}>Bosing</button>
  
  </>
   
  )
}

export default App