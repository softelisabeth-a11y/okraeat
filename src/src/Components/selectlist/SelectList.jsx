import React, { useState } from 'react';
import styled from 'styled-components';

// Styles pour la case à cocher
const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

const StyledCheckbox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.width}px; /* Utiliser la prop width pour définir la largeur */
  height: ${props => props.height}px; /* Utiliser la prop height pour définir la hauteur */
  background: ${props => (props.checked ? 'black' : 'white')};
  border: 1px solid #CCD4DC;
  border-radius: 4px;
  transition: all 150ms;

  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')};
  }
`;

export const CustomCheckbox = ({ className, checked, width, height, ...props }) => {
  return (
    <CheckboxContainer className={className}>
      <HiddenCheckbox checked={checked} {...props} />
      <StyledCheckbox checked={checked} width={width} height={height}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
  );
};
