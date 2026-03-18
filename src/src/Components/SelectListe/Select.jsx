import { SelectPicker } from 'rsuite';
import { ContainerSelect } from './SelectStyle';

import './UpRsuit.css'



const Select = ({width,placeholder, data, onChange}) => (
  <ContainerSelect>

    <SelectPicker searchable={false} placeholder ={placeholder}  data={data} onChange={onChange} style={{ width: width }}  />

   
  </ContainerSelect>
);

export default Select;
