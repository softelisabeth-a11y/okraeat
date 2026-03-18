import styled, { css } from "styled-components";


export const Buttons = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 16px;
    background: #FFFFFF;
    border-radius: 100px;
    outline: none;
    border: 1px solid var(--primary-white);
    cursor: pointer;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #020101;

    ${(props) =>
    props.primarybutton &&
    css`
      background: var(--primary-color);
      color: var(--primary-body);
      border: 1px solid var(--primary-color);
    `}
`

export const SimpleButton = styled.button`
    padding: 8px 10px;
    background: #FFFFFF;
    border-radius: 100px;
    outline: none;
    border: 1px solid var(--primary-white);
    cursor: pointer;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #020101;

    ${(props) =>
    props.primarybutton &&
    css`
      background: var(--primary-color);
      color: var(--primary-white);
      border: 1px solid var(--primary-color);
    `}

    ${(props) =>
    props.secondarybutton &&
    css`
      background: #F2F4F6;
    `}
`

// Width
// Fixed (406px)
// Height
// Hug (34px)
// Radius
// 100px
// Border
// 1px
// Padding
// 8px, 12px, 8px, 12px
// Gap
// 8px
// #F05801

