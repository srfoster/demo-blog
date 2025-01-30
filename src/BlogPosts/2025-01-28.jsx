import React from 'react';
import BlogPost from '../Components/BlogPost';
import ShowMore from '../Components/ShowMore';
import { CopyBlock } from 'react-code-blocks';

function Post_2025_01_24() {
  return (
    <BlogPost 
      title="Another component that fetches JSON" 
      date="2025-01-28"
    >

      <p>Here's the code for a SpellBook component</p>

      <CopyBlock text={`function SpellBook() {
  const [spells, setSpells] = React.useState([])

  React.useEffect(() => {
    fetch("https://www.dnd5eapi.co/api/spells")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setSpells(data.results)
      })
  }, [])

  return <>
    <p>Click below to see a list of DnD spells</p>
    <ShowMore>
    {
      spells.map((spell) => <div>{ spell.name }</div>)
    }
    </ShowMore>
  </>
}
        `} />

      <p>And here's what it does when rendered!</p>

      <SpellBook />

    </BlogPost>
  );
}

function SpellBook() {
  const [spells, setSpells] = React.useState([])

  React.useEffect(() => {
    fetch("https://www.dnd5eapi.co/api/spells")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setSpells(data.results)
      })
  }, [])

  return <>
    <p>Click below to see a list of all DnD spells</p>
    <ShowMore>
    {
        spells.map((spell) => <div>{spell.name}</div>)
    }
    </ShowMore>
    <p>Click below to see a list of level-1 DnD spells</p>
    <ShowMore>
    {
        spells
          .filter((spell) => spell.level == 1)
          .map((spell) => <div>{spell.name}</div>)
    }
    </ShowMore>
  </>
}


export default Post_2025_01_24;