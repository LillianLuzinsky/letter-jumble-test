import React, { useState } from "react";
import { sortableContainer, sortableElement } from "react-sortable-hoc";
import arrayMove from "array-move";
import Toolbar from './components/Toolbar/Toolbar'

import { Letter, LetterContainer } from "./components/Alphabet/Letter";
import A from './components/Alphabet/a';
import B from './components/Alphabet/b';
import C from "./components/Alphabet/c";
import D from "./components/Alphabet/d";
import E from "./components/Alphabet/e";
import F from "./components/Alphabet/f";
import G from "./components/Alphabet/g";
import H from "./components/Alphabet/h";
import I from "./components/Alphabet/i";
import J from "./components/Alphabet/j";
import K from "./components/Alphabet/k";
import L from "./components/Alphabet/l";
import M from "./components/Alphabet/m";
import N from "./components/Alphabet/n";
import O from "./components/Alphabet/o";
import P from "./components/Alphabet/p";
import Q from "./components/Alphabet/q";
import R from "./components/Alphabet/r";
import S from "./components/Alphabet/s";
import T from "./components/Alphabet/t";
import U from "./components/Alphabet/u";
import V from "./components/Alphabet/v";
import W from "./components/Alphabet/w";
import X from "./components/Alphabet/x";
import Y from "./components/Alphabet/y";
import Z from "./components/Alphabet/z";

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
  b: <B/>,
  c: <C/>,
  d: <D/>,
  e: <E/>,
  f: <F/>,
  g: <G/>,
  h: <H/>,
  i: <I/>,
  j: <J/>,
  k: <K/>,
  l: <L/>,
  m: <M/>,
  n: <N/>,
  o: <O/>,
  p: <P/>,
  q: <Q/>,
  r: <R/>,
  s: <S/>,
  t: <T/>,
  u: <U/>,
  v: <V/>,
  w: <W/>,
  x: <X/>,
  y: <Y/>,
  z: <Z/>
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
