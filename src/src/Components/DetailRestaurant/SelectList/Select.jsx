import styled from "styled-components";
import { devices } from "../../../Theme/Devices";

const StyledSelect = styled.select`
  width: 88px;
  padding: 8px;
  /* margin-left:8px; */
  border: none;
  border-top-left-radius: 4px !important;
  border-top-right-radius: 4px !important;
  border-radius: 4px !important;
  background-color: transparent;
  color: green;
  font-size: 16px;
  outline: none;



  @media ${devices.mobile} { 
    width: 88px;
          }
 
`;

const StyledOption = styled.option`
  background-color: #fff;
  color: green;
`;

const SelectList = ({ data }) => {
  return (
    <StyledSelect>
      {data &&
        data?.length > 0 &&
        data.map((item, index) => (
          <StyledOption key={index} value={item.value}>
            {item.label}
          </StyledOption>
        ))}
    </StyledSelect>
  );
};
export default SelectList;
