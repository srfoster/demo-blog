import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

function BlogPost({ title, date, children }) {
  return (
    <Card variant="outlined" style={{ marginBottom: '16px', width: '99%', textAlign: "left" }}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography color="textSecondary">
          {date}
        </Typography>
        <Typography variant="body2" component="div">
          {children}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default BlogPost;