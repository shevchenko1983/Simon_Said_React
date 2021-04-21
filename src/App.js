import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import ColorSection from "./components/ColorSection";
import MainButton from "./components/MainButton";
import {displayShadowBlock} from "./helpers/DisplayShadowBlock";


const MainWrapper = styled('div')`
  max-width: 600px;
  margin: auto;
  transform: translate(0, 20%);
  overflow: hidden;
  border-radius: 50%;
  border: 10px solid darkblue;  
  display: flex;
  flex-wrap: wrap;
  position: relative;
  
`;

const colors = ["green", "red", "yellow", "blue"];

function App() {
  const [roundCounter, setRoundCounter] = useState(0);
  const [activeSections, setActiveSections] = useState([]);
  const [startGame, setStartGame] = useState(false);
  const sectionsRef = useRef();

  //Start Game Launcher
  useEffect(() => {
      if(startGame){
          setTimeout(() => {
            startGameHandler();
          }, 1000);
      }
  }, [startGame, roundCounter]);


  const onClickStartGameBtn = () => {
      if(!roundCounter){
          setRoundCounter(1);
      }
      setStartGame(true);
  }

  const startGameHandler = () => {
      //console.log("start", sectionsRef.current.children);
      //exclude btn from sections array
      const arrayOfSections = [...Array.from(sectionsRef.current.children)].filter((item) => item.id !== "btn");
      //all section clear by default
      arrayOfSections.forEach((item) => {
          if(item.children.length > 0){
              setTimeout(() => {
                  displayShadowBlock(item);
              }, 500);
          }
      });

      //get random sections from all sections for blinking
      const sections = [...arrayOfSections.sort(() => Math.random() - Math.random()).slice(0, roundCounter)];
      //console.log(sections);
      if(sections.length > 0){
          //put active colors ONLY to array
          setActiveSections([...activeSections, ...sections.map((item) => item.style.backgroundColor)]);

          for(let i = 0; i < sections.length; i++){
              //timeout for blinking
              setTimeout(() => {
                  displayShadowBlock(sections[i]);
                  //console.log( sections[i].innerHTML, sections[i], activeSections);
              }, 500);
              sections[i].innerHTML = "";
          }
      }
  }

  //here we have a bug, second round calculated wrong
  const onCheckColorSequences = (section, activedSectionColor) => {
     //console.log(section, activedSectionColor);

      section.innerHTML = "";
      //timeout for blinking
      setTimeout(() => {
          displayShadowBlock(section);
      }, 1000);

     if(activeSections.includes(activedSectionColor)) {
         console.log("includes", activedSectionColor);
         const sectionsIndex = activeSections.findIndex((item) => item === activedSectionColor);
         activeSections.splice(sectionsIndex, 1);
         //if all answers are correct - level up!!
         if (activeSections.length === 0) {
             setRoundCounter(roundCounter + 1);
             //remove all in actived sections
             setActiveSections([]);
         }
         // else {
         //     //not guess!!!
         //     setRoundCounter(0);
         // }
     }else{
         //not guess!!!
         setRoundCounter(0);
     }
  }


 console.log(roundCounter, activeSections);

  return (
    <div className="App">
      <MainWrapper className={"main-wrapper"} ref={sectionsRef}>
          {colors.length > 0 && colors.map((item, index) => {
              return <ColorSection key={index + item}
                                   color={item}
                                   id={index}
                                   action={onCheckColorSequences}
                    />
          })}
           <MainButton action={onClickStartGameBtn} value={roundCounter}/>
      </MainWrapper>
    </div>
  );
}

export default App;
