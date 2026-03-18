import { useState, useEffect } from 'react';
// styled 
import { ContainerSeach } from './SearchStyle'

// composant 
import { SelectPicker } from 'rsuite';
import SearchIcone from '../../../../assets/Home/svg/SearchIcone'
import MapInIcone from '../../../../assets/Home/svg/MapInIcone';
import OutLineRight from '../../../../assets/Home/svg/outLineRight';

import axios from "axios";


function Search({value, onKeyUp, onChangeOne, handleActifFilter }) {

   //  find quartier restaurants 
   const [quartier, setQuartier] = useState([]);


   const getQuartierResto = async () => {

       return new Promise((resolve, reject)=>{
     axios
           .get("http://localhost:5000/okraeat/quartiers_restaurants")

           .then((res) => {
               resolve(res.data.data);
      
           })
           .catch((error) => reject(error));
       })
   };


  const data = quartier.map(
    item => ({ label: item.lib, value: item.id_qrt })
  );

  useEffect(() => {
      
   
    getQuartierResto()
    .then((r) => {
      setQuartier(r)
     
    })
    .catch((e) => console.error(e));

}, []);

  return (
    <ContainerSeach>

      <div className='search_name'>

        <SearchIcone />

        <input type="search" className='input_search' value={value} onKeyUp={onKeyUp} onChange={onChangeOne} placeholder='Rechercher restaurant ou un met' />

      </div>

      <div className='search_localisation'>
        <MapInIcone />

        <SelectPicker searchable={false} placeholder="Cotonou" data={data} style={{ width: '90%' }} onChange={(v)=>handleActifFilter(5, v)}/>

        <div className="out_line_right">

          <OutLineRight />

        </div>

      </div>


    </ContainerSeach>
  )
}

export default Search
