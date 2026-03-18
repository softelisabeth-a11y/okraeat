import React, { useState, useEffect } from "react";
import axios from "axios";
import { IoMdAddCircleOutline } from "react-icons/io";
import { Panel } from "rsuite";
import styled, { css } from "styled-components";
import "./cssslid.css";
import Image from "../../../assets/imgDetailRestaurant/img_restaurant.jpg";
import AutreDispositionPlat from "../../Components/DetailRestaurant/Plat/AutreDispositionPlat";
import { BoutonAjouter } from "../../Components/DetailRestaurant/Bouton/BoutonAjouterStyle";
import { SpinnerCircular } from 'spinners-react';
// components

function PlatsRestaurant({donneesRp, handleShowRepas }) {
 
  let tableRepas  = []
 
  if (donneesRp.Servirs) {
    
  
     donneesRp.Servirs.map((res)=>{
           
   res.Repas.map((item)=>(
    tableRepas.push(item) 
   ))
      
  
      }
          
    )
  
  }




  const [activeTab, setActiveTab] = useState("tab0"); // Onglet actif par défaut

  const handleTabClick = (tabKey) => {
    setActiveTab(tabKey);
  };
  

  // Recuperation de plat
  const [repas, setRepas] = useState([]);
  const [cat, setCat] = useState([]);


  const [loaderResto, setLoaderResto] = useState(false);

    const monId = donneesRp.id

  // const repasNonPopulaire = repas.filter((item) => item.populaire === false);

  const getRepas = async (id) => {
    return new Promise((resolve, reject) => {

    setLoaderResto(true)
    axios
      .get("http://localhost:5000/okraeat/recuperationPlatsResto/"+id)
      .then((res) => {
              resolve(res.data.data)
           
      })
      .catch((error) => reject(error));
    })
  };

  
  
  // Convertissez la chaîne JSON en tableau JavaScript


  
  const activeRepas =(item)=>{
    let tableRepas = []

      item.map((serv)=>(
        serv.Servirs.map((rep)=>{

         rep.Repas.map((rsul)=>{

          tableRepas.push(rsul)  
              
              })

              
            })
      ))

    setCat(tableRepas)
   
  }


  
let repasNonPopulaire 

  
if (tableRepas) {

  repasNonPopulaire = tableRepas.filter((item)=>item.populaire == false)
  
}


  useEffect(() => {
    
    getRepas(monId)

    .then((r) => {
   console.log('res.data.data', r);
      setRepas(r)
      setLoaderResto(false)
      activeRepas(r.Categories)

    })
    .catch((e) => {console.error(e)
      setLoaderResto(false)
    });

  }, []);

   let cmpt = []
   donneesRp.Categories.map((item)=>(
    cmpt.push({
      id : item.id_cat,
      lib : item.lib
    })
   ))


  // const categorieRepas = repas.Categories.map((item)=>{
  //   return item;
  // })

  return (
    !loaderResto && repas && cat.length > 0 ? 

    
    <ContainerBodyHome>

      <div className="container_filtre">
        <div className="header">
          <div className="tabs">
            <div
              className={`custom-tab ${activeTab === "tab0" ? "active" : ""}`}
              onClick={() => handleTabClick("tab0")}
            >
              Mets({tableRepas.length})
            </div>
            {
             
             donneesRp.Servirs.map((item)=>(
              
              <div
              className={`custom-tab ${activeTab === `${item.id_cat + ''}` ? "active" : ""}`}
              onClick={() => handleTabClick(`${item.id_cat + ''}`)}
            >
              
             {
              cmpt.map((res)=>(
                item.id_cat == res.id && res.lib
              ))
             } 
             
             ({
                     item.Repas.length
             }) 
            
            </div>

             ))
            
           
          }
          </div>
          <BoutonAjouter
            style={{ marginRight: "20px" }}
            className="disparaitre"
            onClick={handleShowRepas}
          >
            <IoMdAddCircleOutline className="icon_ajout" />
            <span className="ajouter">Ajoutez un met</span>
          </BoutonAjouter>
        </div>
      </div>

      <div className="container_food">
        {activeTab === "tab0" && (
          <ListePlat>
          {
            repasNonPopulaire.length > 0 &&

            repasNonPopulaire.map((item)=>(

                <AutreDispositionPlat
                 item={item} 
                 tableRepas={cat}
                 cmptCat={cmpt}
                />
             
                ))

                
             }
          </ListePlat>
        )}

      {
        <ListePlat>{

         donneesRp.Servirs.map((item)=>(

          activeTab === `${item.id_cat + ''}` && 


          repasNonPopulaire.length > 0 &&
        
          repasNonPopulaire.map((info)=>(
        
                item.id_ser == info.id_ser &&

              <AutreDispositionPlat
               item={info} 
               tableRepas={cat}
               cmptCat={cmpt}
              />
           
              ))
        
         ))
        }
         </ListePlat>
      }
        
      
   
          
          
        
      </div>
    </ContainerBodyHome>

    :

<SpinnerCircular size={20} thickness={131} speed={100} color="rgba(240, 88, 1, 1)" secondaryColor="rgba(172, 57, 57, 0.44)" style={{margin:"150px"}}/>

  );
}

export const ContainerBodyHome = styled.div`
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color:red; */

  .container_filtre {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    /* background-color:yellow; */
  }

  @media screen and (max-width: 390px) {
    .container_button {
      flex-direction: column;
    }
    .header {
      display: flex;
      flex-direction: row;
      justify-content: flex-start !important;
      align-items: center;
    }
    .tabs {
      width: 100% !important;
      margin-top: 8px !important;
      height: 19px !important;
    }
    .disparaitre {
      display: none !important;
    }
  }

  .header {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .tabs {
    width: 40%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #9d9d9d;
    height: 27px;
  }

  .container_food {
    /* width: 100%;
    column-gap: 24px;
    row-gap: 24px;
    width: 100%;
    padding: 24px 0px;
    overflow: hidden;
    display: grid;
    grid-template-rows: max-content,max-content;
    grid-template-columns: max-content, max-content;
    border:1px yellow solid; */
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    /* background-color:blue; */
  }
`;

export const ContainerFood = styled.div`
  width: 314px;
  height: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  @media screen and (max-width: 390px) {
    .container_button {
      flex-direction: column;
    }
  }
  .info_food {
    width: 314px;
    height: 253px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  @media screen and (max-width: 390px) {
  }
  @media screen and (max-width: 600px) {
  }
`;

export const ContainerImageFood = styled.div`
  width: 314px;
  height: 253px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  background: url(${(props) => props.imgUrl});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  padding: 10px 8px;

  .container_actif {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }

  @media screen and (max-width: 390px) {
  }
`;

const ListePlat = styled.div`
  /* width: 100%; */
  display: flex;
  flex-direction: row;
  justify-content: start;

  flex-wrap: wrap;
  /* background-color:greenyellow; */
`;
export default PlatsRestaurant;
