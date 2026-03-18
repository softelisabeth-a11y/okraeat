import styled ,{css} from "styled-components";
import { devices } from "../../../Theme/Devices";


export const BoutonAjouter = styled.div`
    width:140px;
    height:42px;
    border-radius:100px;
    margin-top:8px;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    background-color:var(--primary-color);
    cursor:pointer;
    

    .ajouter{
        font-family: Roboto;
        font-size:12px;
        font-weight:500;
        color:var(--primary-white);
        font-family:'Roboto','sans-serif';
    }
    .icon_ajout{
        height:18px;
        width:18px;
        margin-right:8px;
        color:var(--primary-white);
    }

    @media ${devices.mobile} {
        width:133px;
        height:40px; 
  }

  @media screen and (max-width: 390px) {
    .ajouter {
        font-size:12px;
    }
    .icon_ajout{
    
    font-family:'Roboto','sans-serif';    height:13px;
        width:13px;
    }
  }

`


