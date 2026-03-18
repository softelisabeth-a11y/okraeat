import styled, { css } from "styled-components";


export const Input = styled.input`
width: ${(props) => props.width};
height: ${(props) => props.height};
border: 1px solid #9D9D9D;
border-top-left-radius: 4px !important;
border-top-right-radius: 4px !important;
border-radius: 4px !important;
padding: 16px;

&:focus{
    border: 1px solid var(--primary-color);
    outline: none;
}

    ${(props) =>
        props.seach &&
        css`
     width: 85% ;
     height:40px ;
     border: none;
     outline:none ;
     &::placeholder{
        font-size: 18px;
        font-weight: 400;
     }

    `}

    @media screen and (max-width: 390px){
        height: 28px;
        &::placeholder{
            font-size: 14px;
         }
    }
    
`
export const TextArea = styled.textarea`
width: ${(props) => props.width? props.width:"100%"};
height: ${(props) => props.height};
display: flex;
width: 412px;
height: 119px;
padding: 8px;
flex-direction: column;
align-items: flex-start;
gap: 8px;
border-top-left-radius: 4px !important;
border-top-right-radius: 4px !important;
border-radius: 4px !important;
border: 1px solid #707070;
background: #FFF;

&:focus{
    border: 1px solid var(--primary-color);
    outline: none;
}

    @media screen and (max-width: 390px){
        height:147px;
        width:100%;
        &::placeholder{
            font-size: 14px;
         }
    }
`

export const SmallInput = styled.input`
width: ${(props) => props.width ? props.width : "100%"};
height: ${(props) => props.height ? props.height : "100%"};
display: flex;
justify-content: center;
align-items: center;
gap: 8px;
align-self: stretch;

color: #9D9D9D;
font-family: Roboto;
font-size: 10px;
font-style: normal;
font-weight: 400;
line-height: normal;

border: none;

&:focus{
    outline: none;
}

    @media screen and (max-width: 390px){
        &::placeholder{
            font-size: 14px;
         }
    }
    
`

