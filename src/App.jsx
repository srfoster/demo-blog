import React from 'react';
import { Box } from '@mui/material';
import Post_2025_01_21 from './BlogPosts/2025-01-21';
import Post_2025_01_22 from './BlogPosts/2025-01-22';
import Post_2025_01_23 from './BlogPosts/2025-01-23';
import Post_2025_01_24 from './BlogPosts/2025-01-24';
import Post_2025_01_27 from './BlogPosts/2025-01-27';
import Post_2025_01_28 from './BlogPosts/2025-01-28';
import Post_2025_01_29 from './BlogPosts/2025-01-29';
import './App.css';

function App() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <Box display="flex" flexDirection="column" alignItems="center" p={2}>
        <h1>My Blog</h1>
        <Post_2025_01_29 />
        <Post_2025_01_28 />
        <Post_2025_01_27 />
        <Post_2025_01_24 />
        <Post_2025_01_23 />
        <Post_2025_01_22 />
        <Post_2025_01_21 />
      </Box>
    </Box>
  );
}

export default App;
