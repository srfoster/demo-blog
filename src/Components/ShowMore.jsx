
import React from 'react';

export default function ShowMore({children}) {
  const [show, setShow] = React.useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? 'Show Less' : 'Show More'}
      </button>
      {show && children}
    </div>
  ); 
}