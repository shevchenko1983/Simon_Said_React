import React, {useEffect, useRef} from 'react';
import styled from "styled-components";

const ColorSectionWrapper = styled('div')`
    width: 300px;
    height: 300px;
    position: relative;
    
    & .shadow{
        display: block;
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.5);
    }   
`;

const ColorSection = ({action, color, id}) => {

    return(
        <ColorSectionWrapper style={{backgroundColor: color}}
                             id={id}
                             onClick={(e) => action(e.target.parentElement, color)}
        >
           <div className="shadow"/>
        </ColorSectionWrapper>
    );
}

export default ColorSection;