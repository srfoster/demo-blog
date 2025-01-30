import React from 'react';
import BlogPost from '../Components/BlogPost';
import LinksToOtherBlogs from '../Components/LinksToOtherBlogs';

function Post() {
  return (
    <BlogPost 
      title="Hello, World!" 
      date="2025-01-21"
    >
      <p>Made links to other blogs:</p>
      <LinksToOtherBlogs />
    </BlogPost>
  );
}

export default Post;