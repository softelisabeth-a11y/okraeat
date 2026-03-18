import styled, { css } from "styled-components";
import { devices } from "../../Theme/Devices";


export const Type = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 3px;
    background: ${(props) => props.background};
    color:var(--primary-white) ;
    /* color: ${(props) => props.color}; */
    border-radius: 3px;
    outline: none;
    font-family: 'Roboto', sans-serif;
    font-size: 8px;
    font-weight: 500;
    
   


 
    @media ${devices.tablet} { 
     border-radius: 4px;
      font-size: 14px;
      padding: 4px;
   }

    @media ${devices.laptop} { 
        border-radius: 4px;
      font-size: 14px;
      padding: 4px;
      
   }


    ${(props) =>
    props.repas &&
    css`
      background: #EEEEEE;
      font-size: 8px;
      color:var(--primary-black);

       
    @media ${devices.tablet} { 
        font-size: 10px;
   }

    @media ${devices.laptop} { 
        font-size: 10px;
      
   }

      
  `}




`

