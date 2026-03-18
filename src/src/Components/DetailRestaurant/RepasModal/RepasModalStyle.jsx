import styled from "styled-components";


import { Uploader, CheckPicker } from "rsuite";

export const ModalBodyContainer = styled.div`
.step-container{
    display: flex;
    flex-direction: column;
    gap: 24px !important;
    padding: 24px 0px;
}

step-title-row{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.profil-title-row{
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
}

.step-title{
    color: #111439;
    font-family: 'Helvetica Neue', sans-serif !important;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%; /* 31.2px */
}


.actif-switch-container{
    display: flex;
    align-items: center;
    gap: 8px;
}

.subtitle{
    color: #020101;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.switch-label{
    font-weight: 400;
    font-size: 14px;
    line-height: 16.41px;
    color: #020101;
    margin-right: 8px;
}

.input-group{
    width: 401px;
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.label{
    font-family: 'Helvetica Neue', sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #020101;
}

.buttons-container{
    width: 401px;
    display: flex;
    align-items: flex-start;
    gap: 8px;
}

.commande-options-container{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
}

.commande-options-row{
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 16px;
}

.option-container{
    display: flex;
    padding: 8px;
    align-items: flex-start;
    gap: 16px;
    border-radius: 4px;
    border: 1px solid #CCD4DC   
}

.option-cmd-label{
    color: #020101;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

/* min-price start */
.min-price-container{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2.522px;
}

.price-input-row{
    display: flex;
    height: 28px;
    align-items: center;
    flex-shrink: 0;
    border-radius: 4px;
    border: 0.63px solid #B0B0B0;
    background: #FFF;
}

.input-container{
    width: 95px;
    height: 28px;
    display: flex;
    padding: 8px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    align-self: stretch;
}

.devise-container{
    display: flex;
    padding: 0px 8px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    align-self: stretch;
    background-color: #E0E0E0;
}

.devise-text{
    color: #130F26;
    text-align: center;
    font-family: Roboto;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.ouverture-container{
    display: flex;
    width: 400px;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
}

.ouverture-row{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
}

.ouverture-label{
    color: #020101;
    font-family: Roboto, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.time-inputs-container{
    display: flex;
    align-items: flex-start;
    gap: 16px;
}

.time-input-container{
    height: 34px;
}

.switch-container{
    display: flex;
    align-items: center;
    gap: 8px;
}

.switch-label{
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
}

.ouverture-row-actions{
    display: flex;
    align-items: center;
    gap: 24px;
}

.switch-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    padding: 0px;
}

.accompagnement-container{
    display: flex;
    width: 80%;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
 
}

.double-input-group{
    display: flex;
    align-items: flex-start;
    gap: 16px;
    align-self: stretch;
}

.double-input-group-item{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    flex: 1 0 0;
}

.ajouter-accomp{
    color: #F05801;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
    letter-spacing: 0.15px;
    text-decoration-line: underline;
    cursor: pointer;
}

.img-success{
}

.textarea-container{
    width: 401px;
}



@media screen and (max-width: 390px){
    .input-group, .buttons-container, .textarea-container{
        width: 252.83px;
    }

    .step-title-row{
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 16px;
    }

    .step-title{
        font-weight: 500;
        font-size: 14px;
        line-height: 18.2px;
    }
    .switch-label{
        font-size: 10px;
        line-height: 11.72px;
    }

    .label{
        font-size: 10px;
        line-height: 100%;
    }

    .ouverture-container{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 12px;
        overflow-x: auto;
        border: 1px solid blue;
    }
    
    .ouverture-row{
        width: 100%;
        display: flex;
        justify-content: flex-end;
        gap: 16px;
        align-items: center;
    }
    
    .ouverture-label, .switch-label{
        font-size: 10px;
    }
    
    .ouverture-row-actions{
        gap: 15px;
    }
    
    .switch-container{
        gap: 6px;
    }

    .accompagnement-container{
        width: 252.83px;
    }

    .double-input-group{
        gap: 8px;
    }

    .ajouter-accomp{
        font-size: 10px;
    }

    .img-success{
        width: 200px;
        height: 200px;
    }
}

@media screen and (min-width: 390px) and (max-width: 430px){
    .input-group, .buttons-container, .textarea-container{
        width: 252.83px;
    }
}

`

export const UploaderCustum = styled(Uploader)`
@media screen and (max-width: 390px){
    width: 252.83px;
    height: 148.167px;
}

&:hover{
    border: none !important;
}
`
export const PreviewImage = styled.div`
    width: 401px !important;
    height: 235px !important;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    border: 1px solid #9D9D9D;
    background: rgba(157, 157, 157, 0.10) !important;

    .icon-container{
        height: 100%;
    }

    @media screen and (max-width: 390px){
        width: 252.83px !important;
        height: 148.167px !important;
    }

    @media screen and (min-width: 390px) and (max-width: 430px){
        width: 350.83px !important;
        height: 148.167px !important;
    }
`


export const SelectList = styled(CheckPicker)`
.rs-picker-default .rs-btn{
    height: 58px !important;
   }
`

export const TimeInput = styled.input.attrs({ type: 'time' })`
    width: ${(props) => props.width ? props.width : "100%"};
    height: ${(props) => props.height ? props.height : "100%"};
    display: flex;
    padding: 8px;
    align-items: center;
    gap: 4px;
    border-radius: 4px;
    border: 1px solid #020101;
    background: #FFF;
  `;