import styled, { css } from "styled-components";
import { devices } from "../../../Theme/Devices";


export const ContainerSeach = styled.div`
        width: 100%;
        height: 39px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin : 10px 0px;
    border: 1px solid #E0E0E0;
    padding: 4px;
   border-radius : 64px;
   background-color : #FFFFFF;
   margin-bottom : 20px;
    
   
    @media ${devices.tablet} { 
      width: 80%;
        height: 39px;
      
   }

    @media ${devices.laptop} { 
       width: 567px;
        height: 40px;
        margin-bottom : 24px;
      
   }
    
   .search_name{
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
   }

   @media screen and (max-width: 390px){

.search_name{   width:65%; }


}
@media screen and (max-width: 600px){


}

   .search_localisation{
    width: 293px ;
    height: 32px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  
   }

   @media screen and (max-width: 390px){

.search_localisation{  width: 121px ;
height: 34px; }

.container_button{ width: 35%;  }
}
@media screen and (max-width: 600px){


}

        .input_search {
            border: none;
            outline: none;
            background-color: #FFFFFF;
            padding: 4px 8px;
            width: 95%;
            height: 32px;
            font-size : 14px
        }

            @media screen and (max-width: 390px){

                .input_search{  font-size: 10px; width: 98%;}

               
            }
            @media screen and (max-width: 600px){

                
            }

            
.rs-picker-default:not(.rs-picker-disabled) .rs-btn-active,
 .rs-picker-default:not(.rs-picker-disabled) .rs-btn:focus,
 .rs-picker-default:not(.rs-picker-disabled) .rs-btn:hover,
  .rs-picker-default:not(.rs-picker-disabled) .rs-picker-toggle-active,
   .rs-picker-default:not(.rs-picker-disabled) .rs-picker-toggle:focus,
 .rs-picker-default:not(.rs-picker-disabled) .rs-picker-toggle:hover{

    border: none !important;
 }

 .rs-picker-default .rs-btn{
  height: 35px;



 }



.rs-picker-toggle-active, .rs-picker.rs-picker-focused{
  box-shadow: none !important;
}

.rs-picker-default .rs-picker-toggle.rs-btn {
  padding-top: 8px !important;
  border: none !important;

}

.rs-picker-default .rs-picker-toggle.rs-btn .rs-picker-toggle-caret,
 .rs-picker-default .rs-picker-toggle.rs-btn .rs-picker-toggle-clean {
  top: 8px !important;
  color:#020101 !important;
  display: none;
  
}

        .out_line_right{
        width:32px;
        height: 32px;
        display: flex;
        justify-content : center;
        align-items: center;
        padding: 5px;
        border-radius: 38px;
        background-color: #F05801;
        

        }

        @media screen and (max-width: 390px){

        .out_line_right{ 
          width:32px;
          height: 25px;
          border-radius: 25px;
          padding: 2px;  }
        }
        @media screen and (max-width: 600px){

        }

        

`

