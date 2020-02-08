import React, { useState, useEffect } from "react";
import { sortableContainer, sortableElement } from "react-sortable-hoc";
import arrayMove from "array-move";
import Toolbar from './components/Toolbar/Toolbar'

import { Letter, LetterContainer } from "./components/Alphabet/Letter";

const SortableLetterContainer = sortableContainer(({ children }) => (
  <div className="letter-hover">{children}</div>
));
const SortableLetter = sortableElement(({ index, audio, svg, togglePlay, letter, selectedLetter }) => {

  useEffect(() => {
    if (letter === selectedLetter) {
      console.log('this is audio',audio)
      console.log('this is audio',letter)
      console.log('this is audio',selectedLetter)
      audio.url.play();
    }
  }, [audio, selectedLetter])

  return (
    <LetterContainer>
      <div onClick={togglePlay}>
        <Letter key={svg} svg={svg} />
      </div>
    </LetterContainer>
  )
});

const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
]

const App = () => {
  const [svgs, setSvgs] = useState(alphabet);
  const [selectedLetter, setSelectedLetter] = useState('');

  const togglePlay = (index) => {
    setSelectedLetter(svgs[index]);
  };

  const handleJumble = (newArr) => {
    setSvgs(newArr);
  };

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setSvgs(arrayMove(svgs, oldIndex, newIndex));
  };

  const reset = () => {
    setSvgs(alphabet);
  };
  

  return (
    <div className="App" style={{ height: "100" }}>
      <Toolbar 
        svgs={svgs}
        handleSetJumble={handleJumble}
        handleReset={reset}
      />
      <main style={{ marginTop: "50px" }}></main>
      <h1>Put the letters in order</h1>
      <SortableLetterContainer
        axis="x"
        onSortEnd={onSortEnd}
        onSortStart={(node, event) =>{
          event.preventDefault()
        }}
      >
        {svgs.map((svg, i) => {
          const audio = new Audio();
          audio.url = `./components/sound/${alphabet[i]}.m4a`
          return ( 
            <SortableLetter index={i} selectedLetter={selectedLetter} letter={svgs[i]} audio={audio} key={svg} svg={svg} collection="letters" />
          )

        })}
      </SortableLetterContainer>
    </div>
  );
};

export default App;
