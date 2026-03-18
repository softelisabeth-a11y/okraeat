import styled from 'styled-components';

export const StyledSelect = styled.select`
  width: ${(props) => props.width ? props.width : "100%"};
  height: ${(props) => props.height ? props.height : "inherit"};
  padding: 10px;
  border: 1px solid #9D9D9D;
  border-top-left-radius: 4px !important;
  border-top-right-radius: 4px !important;
  border-radius: 4px !important;
  background-color: #FFF;
  color: #F05801;
  font-size: 16px;
  outline: none;

  &:focus{
    border: 1px solid var(--primary-color);
    outline: none;
}
  
  @media (max-width: 768px) {
    font-size: 14px;
    height: 34px;
    padding: 5px;
  }
`;

export const StyledOption = styled.option`
  background-color: #FFF;
  color: #F05801;
`;

const SelectList = ({ data, height, onChange,value,children }) => {
    return (
        <StyledSelect height={height ? height : "inherit"} value={value} onChange={onChange}>
            {children ? children : " "}
            {             
                (data && data?.length > 0) && data.map((item, index) => (
                   
                    <StyledOption key={index} value={item.id_acc}>{item.nom}</StyledOption>
                ))
            }
        </StyledSelect>
    );
};
export default SelectList;