import React from 'react';
import BlogPost from '../Components/BlogPost';
import ShowMore from '../Components/ShowMore';
import { CopyBlock } from 'react-code-blocks';

function Post() {
  return (
    <BlogPost 
      title="Moving back to state and props" 
      date="2025-01-22"
    >
      <p>State and props, yay!  Here's a component that shows more if you click the button:</p>

      <ShowMore>
        <p>Check it out, here's the code for the component you just interacted with!!!</p>
        <CopyBlock
          text={`function ShowMore({children}) {
  const [show, setShow] = React.useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? 'Show Less' : 'Show More'}
      </button>
      {show && children}
    </div>
  ); 
}`}
          language={"jsx"}
          showLineNumbers={false}
          wrapLines
        />
        <p>Cool syntax highlighting, right??</p>
        <p>And here's how you would render it:</p>
        <CopyBlock
          text={`<ShowMore>
  <p>Content to show</p>
</ShowMore>`}
          language={"jsx"}
          showLineNumbers={false}
          wrapLines
        />
      </ShowMore>
    </BlogPost>
  );
}

//Component to show a preview of a post and a button to show more

export default Post;