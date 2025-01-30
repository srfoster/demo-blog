import React from 'react';

function LinkToOtherBlog({ url, text }) {
  return (
    <li>
      <a href={url}>{text}</a>
    </li>
  );
}

const LinksToOtherBlogs = () => {
  return (
    <ul>
      <LinkToOtherBlog 
        url="https://jaimechurch.github.io/Blog/" 
        text="Jamie" 
      />
      <LinkToOtherBlog 
        url="https://kalvinvar.github.io/Final/#/app" 
        text="Kalvin" 
      />
      <LinkToOtherBlog 
        url="https://jacob-pickard.github.io/Quiz-App/" 
        text="Jacob" 
      />
      <LinkToOtherBlog 
        url="https://rofenac.github.io/blog/" 
        text="David" 
      />
      <LinkToOtherBlog 
        url="https://Aprilv.github.io/my-first-react-app" 
        text="April" 
      />
    </ul>
  );
};

export default LinksToOtherBlogs;