import styled, { css } from "styled-components";
import { devices } from "../../../Theme/Devices";



export const Buttons = styled.button`
    width: 119;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5px;
    padding: 11px;
    background: var(--primary-color);
    color:var(--primary-white) ;
    /* color: ${(props) => props.color}; */
    border-radius: 100px;
    outline: none;
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
    font-size: 8px;
    font-weight: 500;


    @media ${devices.tablet} { 
      padding: 12px 16px;
      font-size: 12px;
   }

    @media ${devices.laptop} { 
      padding: 12px 16px;
      font-size: 12px;
  
   }


    ${(props) =>
    props.modifier &&
    css`
      background: var(--primary-white);
      padding:6px;
      color:var(--primary-black);
      font-weight: 600;

       
    @media ${devices.tablet} { 
      padding: 8px;
      font-size: 12px;
   }

    @media ${devices.laptop} { 
      padding: 8px;
      font-size: 12px;
      
   }

      
  `}

    ${(props) =>
    props.hero &&
    css`

      padding: 13px 25px;
      border-radius: 4px;
      width: 60%;
      font-size: 15px;

       
    @media ${devices.tablet} { 
     
      padding:13px 25px;
      border-radius: 4px;
      font-size: 14px;
   }

    @media ${devices.laptop} { 
      width: 20%;
      padding:8px 18px;
      border-radius: 4px;
      //styleName: Label/Base | 16 · 24;
        font-size: 16px;
        font-weight: 500;
l

    
      
   }

      
  `}

    ${(props) =>
    props.login_btn &&
    css`
    background: var(--primary-white);
    color:var(--primary-black);
     border-radius: 2px;
      width: 100%;
      padding: 13px 30px;
      justify-content: center;
      font-size: 10px;
      font-weight: 500;
      border : 1px solid #757575 ;
      gap: 10px;

  
       
    @media ${devices.tablet} { 
    border-radius: 2px;
     padding: 13px 30px;
      
      
   }

    @media ${devices.laptop} { 
      width: 100%;
      border-radius: 2px;
     padding: 13px 30px;
      padding: ${(props) => props.color};
      gap: 10px;
l  font-size: 16px;
   }

      
  `}




`

