import React from 'react';
import BlogPost from '../Components/BlogPost';
import { Chessboard } from "react-chessboard";
import { BlocklyWorkspace } from 'react-blockly';

const MY_TOOLBOX = `<xml id="toolbox" style="display: none">
  <block type="controls_if"></block>
  <block type="controls_whileUntil"></block>
</xml>`;

function Post() {
  const [xml, setXml] = React.useState();

  return (
    <BlogPost 
      title="Playing around with react" 
      date="2025-01-22"
    >
      <p>Today I started playing around with react. It's pretty cool!  I made a chessboard:</p>

      <Chessboard id="BasicBoard" />

      <p>Also, a blockly coding interface:</p>

      <BlocklyWorkspace
        className="width-100" // you can use whatever classes are appropriate for your app's CSS
        style={{ height: 400 }}
        toolboxConfiguration={MY_TOOLBOX} // this must be a JSON toolbox definition
        initialXml={xml}
        onXmlChange={setXml}
      />
    </BlogPost>
  );
}

export default Post;