import styled ,{css} from "styled-components";


export const BoutonModifier = styled.div`
    width:100px;
    height:36px;
    border-radius:100px;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    background-color:var(--primary-white);
    cursor:pointer;

    .texte_modifier{
        font-size:16px;
        font-weight:500;
        color:var(--primary-body);
        font-family:'Roboto','sans-serif';
    }
    .icon_modifier{
        height:16px;
        width:16px;
        margin-right:8px;
        color:var(--primary-body);
    }
`
export const MealsSpecial = styled.div`
    width:82%;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
    margin-bottom:3%;
    .un_plat{
        width:26%;
        margin:1.3%;
    }
    .info1{
        width: 61px;
        height: 16px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 16px;
        text-align: center;
        color: #020101;
        font-family:'Roboto','sans-serif';
    }
    .info2{
        width: 288px;
        height: 14px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 12px;
        /* display: flex; */
        /* align-items: center; */
        color: #020101;
    }
`
export const TitleSectionMeals = styled.h6`
    width: 67%;
    height: 38px;
    margin:4%;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    text-align: left;
    color: #020101;

`

