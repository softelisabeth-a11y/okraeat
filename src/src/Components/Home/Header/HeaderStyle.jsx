import styled, { css } from "styled-components";
import { devices } from "../../../Theme/Devices";


export const ContainerHeader = styled.div`
    width: 100% ;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom : 32px;
    
    @media ${devices.tablet} { 
      
   }

    @media ${devices.laptop} { 
       
        margin-bottom : 64px;
      
   }
    
   .container_button{
    width: 238px;
    height: 42px; 
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
   }

            @media screen and (max-width: 390px){

                .container_button{ 
                    width: 176px;
                    height: 31px;
                   
                     }
            }
            @media screen and (max-width: 600px){

                
            }

        .profil{
        width:40px;
        height: 40px;
        display: flex;
        justify-content : center;
        align-items: center;
        padding: 10px;
        border-radius: 38px;
        background-color: #F05801;
        color: #F9F9F9;
        font-weight: 500;
        font-size:  14px;

        }

        @media screen and (max-width: 390px){

        .profil{ 
            width:29px;
            height: 29px;
            padding: 7px; 
            font-size:  10px; }
        }
        @media screen and (max-width: 600px){

        .profil{ padding: 10px; font-size:  10px; }
        }

        

`

