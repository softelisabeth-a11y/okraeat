import styled from "styled-components";
import { devices } from "../../Theme/Devices";




export const GreenSelect = styled.select`
 
display: flex;
padding: 8px;
align-items: center;
gap: 5px;
border-radius: 4px;
border: 1px solid #C5C7CD;
background: #FFF;
color: gray;
font-family: Roboto;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
outline: none;

@media ${devices.tablet} { 
           
        }
     
         @media ${devices.laptop} { 
            width: 100%;
           
        }

        option{
           
        }
        

@media screen and (max-width: 390px){
   
}


`
