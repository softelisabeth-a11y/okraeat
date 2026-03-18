import styled from "styled-components";
import { devices } from "../../Theme/Devices";

import { SelectPicker } from 'rsuite';


export const ContainerSelect = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;


@media ${devices.tablet} { 
           
        }
     
         @media ${devices.laptop} { 
            width: 100%;
           
        }

@media screen and (max-width: 390px){
   
}

rs-picker-default:not(.rs-picker-disabled) .rs-btn-active,
 .rs-picker-default:not(.rs-picker-disabled) .rs-btn:focus,
 .rs-picker-default:not(.rs-picker-disabled) .rs-btn:hover,
  .rs-picker-default:not(.rs-picker-disabled) .rs-picker-toggle-active,
   .rs-picker-default:not(.rs-picker-disabled) .rs-picker-toggle:focus,
 .rs-picker-default:not(.rs-picker-disabled) .rs-picker-toggle:hover{
  border-color: #C5C7CD !important;
  font-weight :400;
font-size :12px
 }

 .rs-picker-default .rs-btn{
  height: 35px;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 400;



 }

 
.rs-picker-toggle-active, .rs-picker.rs-picker-focused{
  box-shadow: none !important;
}

.rs-picker-default .rs-picker-toggle.rs-btn {
  padding-top: 6px !important;
}

.rs-picker-default .rs-picker-toggle.rs-btn .rs-picker-toggle-caret,
 .rs-picker-default .rs-picker-toggle.rs-btn .rs-picker-toggle-clean {
  top: 8px !important;
  color:#020101 !important;
  
}

`

export const SelectNew = styled(SelectPicker) `
  
  border :none !important;

  outline: none !important;

  


`
