import styled from "styled-components";
import { devices } from "../../Theme/Devices";


export const ContainerHero = styled.div`
max-width: 1150px;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color :#FBFBFB ;
gap: 25px;



@media ${devices.tablet} { 
           
        }
     
         @media ${devices.laptop} { 
            width: 100%;
             margin: 0 auto;
        padding : 0px;
           
        }

@media screen and (max-width: 390px){
   
}


`
export const ContainerLogin = styled.div`
max-width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color :#FBFBFB ;




@media ${devices.tablet} { 
           
        }
     
         @media ${devices.laptop} { 
            max-width: 1150px;
            height: 100vh;
             margin: 0 auto;
             padding : 0px;
        }

        .container_btn_login{
            width: 377;
            height: 181;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            gap: 15px;
             
        }


        .separation{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
        }

        .line{
            width: 106px;
            height: 1px;
      background: #757575;

        }
@media screen and (max-width: 390px){
   
}

`     
export const SousContainer = styled.div`
width: 90%;
padding: 32px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color :#FFF;
gap: 25px;
color: #000;
font-variant-numeric: lining-nums tabular-nums;
font-family: Inter;
font-size: 10px;
font-style: normal;
font-weight: 500;
line-height: 16.099px; /* 160.989% */




@media ${devices.tablet} { 
    width: 70%;

        }
     
         @media ${devices.laptop} { 
           
            width: 473px;
            height: 375px;
             margin: 0 auto;
             padding : 0px;
        }

        .container_btn_login{
            width: 377;
            height: 181;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            gap: 15px;
             
        }

        @media screen and (max-width: 390px){
   
            .container_btn_login{
            width: 377;
            height: 181;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            gap: 15px;
 
        }

          }


        .separation{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
        }

        .line{
            width: 106px;
            height: 1px;
      background: #757575;

        }
@media screen and (max-width: 390px){
   
}


`

