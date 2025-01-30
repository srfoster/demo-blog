import React from 'react';
import BlogPost from '../Components/BlogPost';
import { CopyBlock } from 'react-code-blocks';
import ShowMore from '../Components/ShowMore';
import { Stack } from '@mui/system';

function Post() {
  const [count, setCount] = React.useState(0)

  return (
    <BlogPost 
      title="React explorations" 
      date="2025-01-28"
    >

      <p>Demo of when state is in the parent component, but rendered/changed in the child components.</p>

      <p>For a fun time, press this button (and note that the number at the end of the blog post increments).  The point being, we can have one component that changes the state, and another (rendered far away) that renders that state.</p>

      <Child1
        count={count}
        setCount={setCount}
      />

      <p>But now... deeper dive into the .map function</p>

      <CopyBlock text={`
        const arr = [1, 2, 3, 4, 5]
        arr.map((num) => num*2)
        // returns [2, 4, 6, 8, 10]
        
        let x = arr.map((num) => num*2)
                   .map((num) => num+1)

        // x is now [3, 5, 7, 9, 11]

        //These two are "equivalent" (in effect, not computation)
        let y = arr.map((num) => ("" + num))
                   .map((num) => parseInt(num))

        let y = arr      

        // y is now [1, 2, 3, 4, 5]

        let squares = arr.map((num) => <svg>
           <rect width={num*10} height={num*10} />
        </svg>)

      `} 
        language="javascript"
        showLineNumbers={true}
        theme="dracula"
        wrapLines={true} />

      <br />
      <br />
      <br />

      <p>Here's an interactive demonstration of how a humble list of numbers can be .mapped into a list of jsx elements, e.g. squares</p>

      <Child1
        count={count}
        setCount={setCount}
      />
      <MapDemo max={ count } />


      <p>And... check it out!  The count variable controlled by the buttons up above is also being rendered here at the end of the blog post!</p>

      <h1>
        <Child2
          count={count}
        />
      </h1>
    </BlogPost>
  );
}

function MapDemo({ max }) {
  const arr = []
  for (let i = 1; i <= max; i++) {
    arr.push(i)
  }

  const squares = arr.map(
    (num) =>
      <div style={{
        width: num * 10,
        height: num * 10,
        border: "1px solid black",
        backgroundColor: "red"
      }} />
  )

  return <>
    <Stack direction="row" spacing={2}>
      <CopyBlock text={`
          ${JSON.stringify(arr)}.map(
            (num) =>
              <div style={{
                width: num * 10,
                height: num * 10,
                border: "1px solid black",
                backgroundColor: "red"
              }} />
      `} />

        {squares}
      </Stack>
    </>
}


function Child1({count, setCount}) {
  return <>
    <button onClick={()=>setCount(count+1)}>Click me</button>    
  </>
}

function Child2({count}) {
  return <>
    <p>{count}</p>
  </>
}


export default Post;