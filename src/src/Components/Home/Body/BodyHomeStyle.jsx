import styled, { css } from "styled-components";
import { devices } from "../../../Theme/Devices";
import { NavLink } from "react-router-dom";

export const ContainerBodyHome = styled.div`
    width: 100% ;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding : 32px 0px;
    
   
    @media ${devices.tablet} { 
        width: 100%;
   }

    @media ${devices.laptop} { 
      width: 100%;
        padding : 10px 0px;
      
   }


    
   .container_filtre{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;  
   }

            @media screen and (max-width: 390px){

                .container_filtre{
                   flex-direction: column; 
                  align-items: center ;
                  gap: 15px;
            
                 }
            }
            @media screen and (max-width: 900px){
              .container_filtre{
                   flex-direction: column; 
                  align-items: center ;
                  gap: 15px;
            
                 }
            }

            .tabs{
    width: 40%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;  
    border-bottom: 1px solid #9D9D9D;
    height: 40px;
    /* background-color: green; */
    padding : 0 8px;
   }

   @media screen and (max-width: 350px){

.tabs{ width: 100%; }
}
   @media screen and (max-width: 390px){

.tabs{ width: 100%; }
}
   @media screen and (max-width: 500px){

.tabs{ width: 100%;}
}
@media screen and (max-width: 900px){
  .tabs{ width: 90%; }
}

   .container_select_liste{
 
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center; 
    gap: 8px;
   
   }

   @media screen and (max-width: 390px){

.container_select_liste{ 
  
  width: 100%; 
  font-size: 12px ; 
  overflow: scroll; 
  padding-bottom : 10px;
 
}

.container_select_liste::-webkit-scrollbar-thumb {
    background-color:#9D9D9D !important; /* Nouvelle couleur de la poignée */
    border-radius: 10px; /* Arrondi des coins de la poignée */
    height: 10px;
}


}
   @media screen and (max-width: 600px){

.container_select_liste{ 
  
  width: 100%; 
  font-size: 12px ; 
  overflow: scroll; 
  padding-bottom : 10px;
 
}

.container_select_liste::-webkit-scrollbar-thumb {
    background-color:#9D9D9D !important; /* Nouvelle couleur de la poignée */
    border-radius: 10px; /* Arrondi des coins de la poignée */
    height: 10px;
}


}

@media screen and (max-width: 600px){

}
   
    .container_food{
        width:100%;
        display: flex;
        justify-content: center;
        align-items: center;

        }
        .filter_food_container{
        width:100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr); /* Trois colonnes égales par ligne */
        row-gap: 10px; 
        column-gap: 100px; 
        justify-items: center; 
        align-items: center;
        padding-top :20px;
        padding-bottom:20px;

        }

         @media screen and (max-width: 390px){

        .filter_food_container{ grid-template-columns: repeat(1, 1fr); /* Trois colonnes égales par ligne */
   
      }
        }
        @media screen and (min-width: 390px ) and (max-width:700px ){

          .filter_food_container{ grid-template-columns: repeat(1, 1fr); /* Trois colonnes égales par ligne */
          width:90%;
    
      
      }
        }
        @media screen and (min-width: 700px ) and (max-width:900px ){

          .filter_food_container{ grid-template-columns: repeat(2, 1fr); /* Trois colonnes égales par ligne */
         
      
      }
        }

        .footer_body{

        width:100%;
       display: flex;
       justify-content: center;
       align-items: center;
      
      
        }

       

      
        

`

export const ContainerFood = styled.div`

    width: 100%;
    height: 253px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    text-decoration: none;


 
   
    
    @media ${devices.tablet} { 
      width: 314px ;
      height: 300px;
     
   }

    @media ${devices.laptop} { 
        width: 314px ;
      height: 300px;
     
      
   }
           
        .info_food{
        width: 314px;
        padding-top: 8px;
        display: flex;
       flex-direction: column;
       align-items: flex-start;

     
        }

        @media screen and (max-width: 390px){

        .info_food{  width: 100%; }
        }
        @media screen and (max-width: 600px){

        
        }

          .nom_resto{
            font-family: 'Roboto' , sans-serif;
            font-size: 16px;
            font-weight: 600;
            color: #020101;


        }

        

          .rate_container{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding: 5px 0;
            font-size: 10px;
            font-weight: 400;
            color: var(--primary-black);
        }

          .container_type{
           
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            gap: 8px;
        }
          .info_suplmt{
           
            width: 100%;
            padding: 5px 0;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            font-family: Roboto;
            font-size: 12px;
            font-weight: 400;
            gap : 8px


        }
         

`

export const ContainerImageFood = styled.div`
   width: 100%;
    height: 140px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;  
    background: url(${(props) => props.imgUrl});
    background-size:100% 100%;
    background-repeat:no-repeat;
   padding : 10px 8px;
   gap: 25px;
 
    
   @media ${devices.tablet} { 
      width: 314 ;
      height: 150px;
   }

    @media ${devices.laptop} { 
        width: 314 ;
      height: 150px;
      
   }

    .container_actif{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
    }
  


`
export const ContainerStatusResto = styled.div`
        
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items : center;
            gap: 1px;
           
 
    
   @media ${devices.tablet} { 
      width: 314 ;
   
   }

    @media ${devices.laptop} { 
        width: 314 ;
 
      
   }
          .status{
            font-family: 'Roboto' sans-serif;
            font-size: 12px;
            font-weight: 400;
            color: #FF0F49;

        }
          .separateur{
           
        }
          .duree{
            color: var(--primary-black);
        }
          .red_point{
            border-radius:5px ;
            width:5px ;
            height:5px ;
            background-color: red;
            color: red;
            margin:0 2px;
        }
          .prix_mini{
            font-weight: 600;
            color: var(--primary-black);
        }
  


`