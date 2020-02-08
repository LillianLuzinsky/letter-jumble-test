import React, { useState } from "react";
import { sortableContainer, sortableElement } from "react-sortable-hoc";
import arrayMove from "array-move";
import Toolbar from './components/Toolbar/Toolbar'

import { Letter, LetterContainer } from "./components/Alphabet/Letter";
import A from './components/Alphabet/a';
import B from './components/Alphabet/b'

const SortableLetterContainer = sortableContainer(({ children }) => (
  <div className="letter-hover">{children}</div>
));
const SortableLetter = sortableElement(({ svg }) => (
  <LetterContainer>
    <Letter key={svg} svg={svg} />
  </LetterContainer>
));

const letterMap = {
  a: <A />,
  // b: <B />
};

const App = () => {
  const [svgs, setSvgs] = useState([
    "./letters/a.svg",
    "./letters/b.svg",
    "./letters/c.svg",
    "./letters/d.svg",
    "./letters/e.svg",
    "./letters/f.svg",
    "./letters/g.svg",
    "./letters/h.svg",
    "./letters/i.svg",
    "./letters/j.svg",
    "./letters/k.svg",
    "./letters/l.svg",
    "./letters/m.svg",
    "./letters/n.svg",
    "./letters/o.svg",
    "./letters/p.svg",
    "./letters/q.svg",
    "./letters/r.svg",
    "./letters/s.svg",
    "./letters/t.svg",
    "./letters/u.svg",
    "./letters/v.svg",
    "./letters/w.svg",
    "./letters/x.svg",
    "./letters/y.svg",
    "./letters/z.svg"
  ]);

  const [newSvgs, setNewSvgs] = useState([
    "./letters/a.svg",
    "./letters/b.svg",
    "./letters/c.svg",
    "./letters/d.svg",
    "./letters/e.svg",
    "./letters/f.svg",
    "./letters/g.svg",
    "./letters/h.svg",
    "./letters/i.svg",
    "./letters/j.svg",
    "./letters/k.svg",
    "./letters/l.svg",
    "./letters/m.svg",
    "./letters/n.svg",
    "./letters/o.svg",
    "./letters/p.svg",
    "./letters/q.svg",
    "./letters/r.svg",
    "./letters/s.svg",
    "./letters/t.svg",
    "./letters/u.svg",
    "./letters/v.svg",
    "./letters/w.svg",
    "./letters/x.svg",
    "./letters/y.svg",
    "./letters/z.svg"
  ]);

  const onSortEnd = ({ oldIndex, newIndex, collection }) => {
    switch (collection) {
      case "svgs":
        setSvgs(arrayMove(svgs, oldIndex, newIndex));
        break;
      case "newSvgs":
        setNewSvgs(arrayMove(newSvgs, oldIndex, newIndex));
        break;
      default:
        break;
    }
  };

  return (
    <div className="App" style={{ height: "100" }}>
      <Toolbar />
      <A/>
      <B/>
      <main style={{ marginTop: "50px" }}></main>
      <h1>Put the letters in order</h1>
      <SortableLetterContainer
        axis="x"
        onSortEnd={onSortEnd}
        onSortStart={(_, event) => event.preventDefault()}
      >
        {svgs.map((svg, i) => (
          <SortableLetter index={i} key={svg} svg={svg} collection="letters" />
        ))}
      </SortableLetterContainer>
    </div>
  );
};

export default App;
