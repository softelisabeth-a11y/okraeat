import styled from "styled-components";

export const FooterContainer = styled.div` 
    width:100%;
     display:flex ;
    flex-direction:column ;
    align-items:center;
    justify-content:center ;
    background-color: var(--primary-body);
    padding : 24px 0;
    gap:15px;

    .allclass{
        display:flex ;
    flex-direction:column ;
    align-items:center;
    justify-content:center ;
    font-weight: 500;
    font-size: 15px;
    color:var(--primary-white)
    }

    .links{
    display:flex ;
    flex-direction:row ;
    align-items:center;
    gap:10px;
    }

`