import React from 'react';

export const displayShadowBlock = (section) => {
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