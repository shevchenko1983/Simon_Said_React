import React from 'react';

export const displayShadowBlock = (section) => {
    //console.log(section);
    section.innerHTML = `<div className='shadow'></div>`;
    if(section.children){
        section.children[0].style.backgroundColor = "rgba(0,0,0,0.5)";
        section.children[0].style.width = "100%";
        section.children[0].style.height = "100%";
        section.children[0].style.position = "absolute";
        section.children[0].style.top = "0";
    }else{
        section.style.backgroundColor = "rgba(0,0,0,0.5)";
        section.style.width = "100%";
        section.style.height = "100%";
        section.style.position = "absolute";
        section.style.top = "0";
    }

    return section;
}


export const blinkingColorSections = (section, counter, sections) => {
    setTimeout(() => {
       displayShadowBlock(section);
    }, 500);
    section.innerHTML = "";

    //call recursive function till counter < sections.length
    counter ++;
    if(counter < sections.length){
        setTimeout(() => {
            blinkingColorSections(sections[counter], counter, sections);
        }, 1000);
    }
}