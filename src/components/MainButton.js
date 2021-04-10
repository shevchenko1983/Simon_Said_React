import React from 'react';
import styled from "styled-components";

const MainBtnWrapper = styled('div')`
    width: 150px;
    height: 150px;
    background-color: #3a4061;
    position: absolute;
    display: block;
    margin: auto;
    left: 0;
    right: 0;
    top: 230px;
    border-radius: 50%;
    box-shadow: 1px 1px 5px 7px rgb(0 0 0 / 30%);
    cursor: pointer;
    
    &:hover{
       outline: none;
       box-shadow: inset 1px 1px 5px 7px #673ab7;
    }
    
    & span{
        position: absolute;
        left: 0;
        right: 0;
        text-align: center;
        top: 50px;
        color: #fff;
        font-size: 30px;
        
    }
`;

const MainButton = ({value, action = null}) => {
  return(
      <MainBtnWrapper onClick={() => action()} id={"btn"}>
          <span>{value !== 0 ? value : "Press"}</span>
      </MainBtnWrapper>
  );
};

export default MainButton;