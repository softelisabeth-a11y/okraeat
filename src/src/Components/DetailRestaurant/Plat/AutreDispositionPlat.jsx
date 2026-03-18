import React, { useState, useEffect } from "react";
import ImagePlat from "../../../../assets/imgDetailRestaurant/img_restaurant.jpg";
import { BoutonModifier } from "../Bouton/BoutonModifier";
import { Toggle } from "rsuite";
import { devices } from "../../../Theme/Devices";
import styled, { css } from "styled-components";
import { StyledToggle } from "../../../Pages/DetailRestaurant/DetailRestaurantStyle";
import { PiPencilSimpleLineFill } from "react-icons/pi";
import UpdateRepasModal from "../RepasModal/UpdateRepasModal";
import axios from 'axios'
import { SpinnerCircular } from 'spinners-react';

function AutreDispositionPlat({ item, tableRepas, cmptCat }) {


  // const {id_rep,populaire} = item;
  //state et fonction d'ouverture et de fermeture du modal
  const [showRepasModal, setShowRepasModal] = useState(false);
  const handleCloseRepas = () => setShowRepasModal(false);
  const handleShowRepas = () => setShowRepasModal(true);




  // state de modification repas 
  const [nomUp, setNomUp] = useState();
  const [idrepUp, setIdrepUp] = useState();
  const [idserUp, setIdserUp] = useState();
  const [cat, setCat] = useState();
  const [imgUp, setImgUp] = useState();
  const [populaireUp, setPopulaireUp] = useState();
  const [descriptionUp, setDescriptionUp] = useState();
  const [prixUp, setPrixUp] = useState();
  const [statutUp, setStatutUp] = useState();
  const [accompagnemetUp, setAccompagnemetUp] = useState([]);



   //  find types repas
   const [typeRepas, setTypeRepas] = useState([]);

   const getTypeRepas = async () => {
 
     return new Promise((resolve, reject)=>{
     axios
         .get("http://localhost:5000/okraeat//type_repas")
 
         .then((res) => {
             resolve(res.data.data);
          
         })
         .catch((error) => reject(error));
 
     })
 };
 


  const platPopulaire = async (id_modif, reconnu) => {
  
    await axios
      .put("http://localhost:5000/okraeat/repasPopulaire/" + id_modif, { populaire: reconnu })
      .then((res) => {
        window.location.reload()
      })
      .catch((error) => console.log(error));
  };

  const [accomp, setAccomp] = useState([]);

  const getAccomp = async () => {

    return new Promise((resolve, reject)=>{
    axios
        .get("http://localhost:5000/okraeat/get_accompagnement")

        .then((res) => {
            resolve(res.data.data);
         
        })
        .catch((error) => reject(error));

    })
};

  //  let image = `../../../../file/${item.img_url}`
  let image = `http://localhost:5000/okraeat/file/${item.img_url}`
 
 const activeUpdate = (id)=>{

const modTable =tableRepas.filter((mod)=>(  mod.id_rep === id  ))

 setIdrepUp(modTable[0].id_rep)
   setIdserUp(modTable[0].id_ser)

   let foundCategory = null;
  
   typeRepas.map((res)=>(
         res.Servirs.map((rsl)=>{
 
           if (rsl.id_ser == modTable[0].id_ser) {
            
             foundCategory = {
               id_cat : res.id_cat,
               lib : res.lib
             }          
 
           }
 
         })
   ))

   setCat(foundCategory)




   setImgUp(modTable[0].img_url)
   setNomUp(modTable[0].nom)
  setPopulaireUp(modTable[0].populaire)
  setDescriptionUp(modTable[0].description)
  setPrixUp(modTable[0].prix)
  setStatutUp(modTable[0].statut)

  const table = [] 
  modTable[0].Accompagnements.map((item)=>{
   
        
    const rsul = {
                id_acc : item.id_acc,
                nom : item.nom,
                id_ea : item.EstAccompagner.id,
                prix : item.EstAccompagner.prix
    }

    return table.push(rsul)

  })

  

   setAccompagnemetUp(table)


    if (nomUp!="" && accompagnemetUp!="" ) {

      handleShowRepas()
    }

  }

  

const UpdateInfo = (item, value, id_ea, prix, num)=>{
 

  if(item == 'nom'){
    
    setNomUp(value)
  }

  if(item == 'actif'){
 
    setStatutUp(value)
  }
  if(item == 'prix'){

    setPrixUp(value)
  }

  if(item == 'description'){

    setDescriptionUp(value)
  }

  if(item == 'id_acc'){
    
    if (id_ea != null) {
      
      let name 

      accomp.map((res)=>{
        if(res.id_acc == value){
          name = res.nom
        }
      })
  
      if (name != "") {
  
      const rsul = accompagnemetUp.map((v, index)=>{
  
        if (v.id_ea == id_ea && index == num) {
  
          return {
               ...v, 
               id_acc : parseInt(value),
               nom : name,
               id_ea : id_ea,
               prix : prix 
          }
        }
        return v
      })
  
      setAccompagnemetUp(rsul)

    } else {
      let name 

      accomp.map((res)=>{
        if(res.id_acc == value){
          name = res.nom
        }
      })
  
      if (name != "") {
  
      const rsul = accompagnemetUp.map((v, index)=>{


        if (index == num) {
  
          return {
               ...v, 
               id_acc : parseInt(value),
               nom : name,
      
          }
        }
        return v
      })
  
      setAccompagnemetUp(rsul)
    }

    
      
    }

    

  }

}

  if(item == 'id_acc_prix'){

    if (id_ea != null) {

      const rsul = accompagnemetUp.map((v, index)=>{

        if (v.id_ea == id_ea && index == num) {
  
          return {
               ...v, 
               prix:parseInt(value)  
          }
        }
        return v
      })
  
      setAccompagnemetUp(rsul)
      
    } else {

      const rsul = accompagnemetUp.map((v, index)=>{


        if (index == num) {
  
          return {
               ...v, 
               prix:value 
          }
        }
        return v
      })
  
      setAccompagnemetUp(rsul)
    }
       

  }

  if(item == 'ajout'){

    
   const nouvelFrmulaireAccompagnement = { id_acc: "", prix: "" };
   setAccompagnemetUp([
      ...accompagnemetUp,
      nouvelFrmulaireAccompagnement,
    ]);
  }


}

const deleteItem = (index)=>{
    
  if (index === 0) {
    const newAccompagnements = [...accompagnemetUp];
    newAccompagnements.shift();

    setAccompagnemetUp(newAccompagnements);
    
  } else  {
    const newAccompagnements = [...accompagnemetUp];
    newAccompagnements.splice(index, 1);
    setAccompagnemetUp(newAccompagnements);
  }

   
}

useEffect(() => {

  getTypeRepas()
  .then((r) => {
   
    setTypeRepas(r)
   
   
  })
  .catch((e) => console.error(e));
   
  getAccomp()
  .then((r) => {
    setAccomp(r) 
  })
  .catch((e) => console.error(e));

}, []);

  return (
    <ContainerPlat>
      <div className="detail_plat">
        <span className="nom_plat">{item.nom}</span>
        <span className="montant_plat">{item.prix}</span>

        <p className="info_plat">{item.description
        }</p>

        <p>
          <span className="repas_populaire">Repas populaire</span>
          <StyledToggle
            size="sm"
            onChange={(checked, e) => platPopulaire(item.id_rep, checked)

            }
           
          />
        </p>
      </div>
      <div className="container_bouton">
        <img
          src={image}
          alt="plat"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "0 8px 8px 0",
          }}
        />
        <BoutonModifier className="bouton_update" onClick={()=>activeUpdate(item.id_rep)}>
          <PiPencilSimpleLineFill className="icon_modifier" />
          <span className="texte_modifier">Modifier</span>
        </BoutonModifier>
      </div>
      {/* modale de modification */}

        <UpdateRepasModal
        show={showRepasModal}
        handleClose={handleCloseRepas}

        nomUp={nomUp}
        idrepUp={idrepUp}
        idserUp={idserUp}
        cat={cat}
        imgUp={imgUp}
        populaireUp={populaireUp}
        descriptionUp={descriptionUp}
        prixUp={prixUp}
        statutUp={statutUp}
        accompagnemetUp={accompagnemetUp}
        typeRepas={typeRepas}

        item={item}
        UpdateInfo={UpdateInfo}
        deleteItem={deleteItem}
        cmptCat={cmptCat}
    
      />

    
     
    </ContainerPlat>
  );
}

const ContainerPlat = styled.div`
  width: 49%;
  height: 170px;
  display: flex;
  flex-direction: row;
  border-radius: 8px;
  margin-top: 8px;
  margin-right: 8px;
  margin-bottom: 10px;
  border: 1px #f0f0f0 solid;
  @media ${devices.mobile} {
    width: 100% !important;
    margin-top: 0px !important;
    margin-right: 0px !important;
    margin: 8px !important;
  }

  @media screen and (max-width: 390px) {
    .nbre_met_commentaire {
      padding-left: 8px !important;
      margin-top: 4px !important;
    }
  }

  /* Fin media query */

  .container_bouton {
    width: 48%;
    position: relative;
  }

  .bouton_update {
    position: absolute;
    top: 8px;
    right: 8px;
  }
  .detail_plat {
    width: 52%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    padding: 8px;
    border-radius: 8px 0px 0px 8px;
    background-color: white;
  }
  .nom_plat {
    font-weight: 600;
    font-size: 15px;
    color: var(--primary-body);
  }
  .montant_plat {
    font-weight: 400;
    font-size: 13px;
    color: var(--primary-body);
  }
  .info_plat {
    font-weight: 400;
    font-size: 12px;
    color: #000000;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .repas_populaire {
    font-weight: 400;
    font-size: 15px;
    color: var(--primary-body);
    margin-right: 8px;
  }
  .rs-toggle-checked .rs-toggle-presentation {
    background-color: var(--primary-color);
  }
`;
export default AutreDispositionPlat;
