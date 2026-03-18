import React, { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { devices } from "../../../Theme/Devices";
import Meals from "../data/LesPlats";
import Plat from "../../../Components/DetailRestaurant/Plat/Plat";

import styled from "styled-components";

export default function Slide({ donneesRp }) {

  const [currentIndex, setCurrentIndex] = useState(0);
  
 
  let tableRepas  = []
 
  if (donneesRp.Servirs) {
    
  
     donneesRp.Servirs.map((res)=>{
           
   res.Repas.map((item)=>(
    tableRepas.push(item) 
   ))
      
  
      }
          
    )
  
  }
  
  let repasPopulaire 
  
  if (tableRepas) {
  
    repasPopulaire = tableRepas.filter((item)=>item.populaire == true )
     
  }
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? repasPopulaire.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === repasPopulaire.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <ScrollableBlocksContainer>
      <ContainerTitreBoutonDefilement>
        <Titre>Plats Populaires</Titre>

        <ContainerBoutonDefilement>
          <BoutonGauche onClick={handlePrev}>
            <AiOutlineArrowLeft style={{ color: "black" }} />
          </BoutonGauche>

          <BoutonDroite onClick={handleNext}>
            <AiOutlineArrowRight style={{ color: "white" }} />
          </BoutonDroite>
        </ContainerBoutonDefilement>
      </ContainerTitreBoutonDefilement>
      <MesPlats>
        {repasPopulaire.map((plat, index) => {
          const { img_url, nom, prix, description, id_rep } = plat;
          return (
            <Defileur currentIndex={currentIndex}>
              <Plat
                key={index}
                id={id_rep}
                style={{
                  transform: `translateX(${(index - currentIndex) * 100}%)`,
                }}
                // src={`../../../../../../file/${img_url}`}
                src={`http://localhost:5000/okraeat/file/${img_url}`}
                nomPlat={nom}
                mtantPlat={prix}
                plat ={repasPopulaire}
                donneesRp ={donneesRp}
              />
            </Defileur>
          );
        })}
      </MesPlats>
    </ScrollableBlocksContainer>
  );
}

const ScrollableBlocksContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  border-top: 2px #f0f0f0 solid;

  /* Fin media query */
`;
const Defileur = styled.div`
  margin-top: 18px;
  margin-right: 18px;
  margin-bottom: 18px;
  transition: transform 0.1s ease-in-out;
  transform: translateX(${(props) => -props.currentIndex * 100}%);
  /* Fin media query */
`;
const Titre = styled.p`
  font-size: 22px;
  font-weight: 600;
  color: #000000;
  font-family: "Roboto", "sans-serif";

  /* Debut media query */
  @media ${devices.mobile} {
    font-size: 14px;
  }

  /* Fin media query */
`;

const ContainerTitreBoutonDefilement = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const MesPlats = styled.div`
  width: 100%;
  display: flex;
  overflow: hidden;
  justify-content: start;
`;
const ContainerBoutonDefilement = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BoutonGauche = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  width: 36px;
  height: 36px;
  cursor: pointer;
  background-color: #f0f0f0;

  margin-right: 8px;
`;
const BoutonDroite = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  width: 36px;
  height: 36px;
  cursor: pointer;
  background-color: var(--primary-color);
`;
