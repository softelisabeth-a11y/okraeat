import styled from "styled-components";
import { devices } from "../../Theme/Devices";


export const ContainerAcceuil = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
background-color :#FBFBFB ;
padding : 8px;

@media ${devices.tablet} { 
           
        }
     
@media ${devices.laptop} { 
        max-width: 1150px;
        margin: 0 auto;
        padding : 0px;
           
        }

@media screen and (max-width: 390px){
   
}


`

