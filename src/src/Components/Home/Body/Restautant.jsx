
import { useState, useEffect } from "react"
import { ContainerFood } from "./BodyHomeStyle"
import { ContainerImageFood } from "./BodyHomeStyle"
import axios from "axios"

// import image from '../../../../../../backend-okraeat/file/1692530157491-353176363.png'
// ${img}

import { useNavigate } from 'react-router-dom';

// components 
import { Buttons } from '../Button/ButtonStyle'
import { Type } from "../../CardInfo/CardInfo"
import Status from './Status'

// react icones svg
import EditIcone from "../../../../assets/Home/svg/EditIcone";
import EyeIcone from "../../../../assets/Home/svg/EyeIcone";
import CrossIcone from "../../../../assets/Home/svg/CrossIcone";
import ValideIcone from "../../../../assets/Home/svg/ValideIcone";

import StarIcone from "../../../../assets/Home/svg/StarIcone";



function Resto({item}) {




  const navigate = useNavigate()





  useEffect(() => {

   

  }, []);
 

  // let image =  `../../../../../../file/${item.img_url}`
  let image =  `http://localhost:5000/okraeat/file/${item.img_url}`

  return (
  <ContainerFood onClick={() => navigate(`/detailRestaurant/${item.id}`)} >
      <ContainerImageFood imgUrl={image}>

        {/* <Buttons modifier onClick={() =>{clickId(item) }}>
          <EditIcone />
          <span>Modifier</span>


        </Buttons> */}

        <div className="container_actif">

          {  item.statut == 1 && <>

            <EyeIcone />

            <span
              style={{
                color: '#FFFFFF',
                fontSize: 14,
                fontWeight: '400'

              }}

            >Inactif</span>


          </>}



        </div>

        {
          item.id_typ == 1 ?

            <>

              <Type background="#DA1E0A">Bonne Dame</Type>


            </>

            :

            <>

              {

item.id_typ == 2 ?

                  <>
                    <Type background="#004FB6">Service traiteur</Type>
                  </>
                  :

                  <>
                    <Type background="#CD0C8A">Restaurant</Type>
                  </>
              }


            </>


        }



      </ContainerImageFood>


      <div className='info_food' >

        <div className="nom_resto"><span>{item.nom}</span></div>


  { item.Ouvertures ? 



        <Status
          etat={item.statut}
          ouvertures={item.Ouvertures}
          prix={item.prix_min}

        />

        :
        "En cours de chargement"
}

        <div className="rate_container">
          <StarIcone color='#F05801' />
          <StarIcone color='#F05801' />
          <StarIcone color='#F05801' />
          <StarIcone color='#9D9D9D' />
          <StarIcone color='#9D9D9D' /> (27)
        </div>


        <div className="container_type">

          {
             item.Categories.map((cat) => (

              <Type repas key={cat.id_cat}>{cat.lib}</Type>

            ))
          }

          {/* <Type repas>Gouter</Type> */}

        </div>

        <div className="info_suplmt">

          {
              item.Options.map((item, index) => (

              <div style={{ display: "flex", justifyContent: 'center', alignItems: 'center', gap: '5px' }} key={index}>

                {
      item.Proposer.statut == true ? <ValideIcone /> :<CrossIcone/> 
                }

                <span>{item.lib}</span>
              </div>
            ))
          }


        </div>



      </div>



    </ContainerFood>
  )
}

export default Resto
