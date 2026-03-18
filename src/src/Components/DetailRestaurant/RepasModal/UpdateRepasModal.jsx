import React, { useState, useEffect, useLayoutEffect } from "react";
import axios from "axios";
//Compoments
import CustumModal from "../../modal/Modal";
import { Toggle, Steps, Loader } from "rsuite";
import { SimpleButton } from "../../Buttons/ButtonStyle";
import { Input, TextArea } from "../../Input/InputStyle";
import {StyledSelect, StyledOption} from "../../SelectListe/SelectList";
import { SpinnerCircular } from 'spinners-react';
import { MdDelete } from "react-icons/md";

//Styles
import "./CustomSteps.css";
import {
  ModalBodyContainer,
  UploaderCustum,
  PreviewImage,
} from "./RepasModalStyle";

//Assets
import imgSuccess from "../../../../assets/success.png";
import { UploadIcon, PlusIcon } from "../../../../assets/icons/modal/Svg";

export default function UpdateRepasModal({ show, handleClose, UpdateInfo, deleteItem, cmptCat,

  nomUp,
  idrepUp,
  idserUp,
  cat,
  imgUp,
  populaireUp,
  descriptionUp,
  prixUp,
  statutUp,
  accompagnemetUp,
  typeRepas

}) {



  const accs = ["Viande de poulet", "Poisson", "Frommage"].map((item) => ({
    label: item,
    value: item,
  }));


  const handleRefresh = () => { 
    window.location.reload();
    handleClose();
  };
  //repas stepper
  const [stepRepas, setStepRepas] = React.useState(0);
  const onChangeRepas = (nextStep) => {
    setStepRepas(nextStep < 0 ? 0 : nextStep > 3 ? 3 : nextStep);
  };
  const onNextRepas = () => onChangeRepas(stepRepas + 1);
  const onPreviousRepas = () => onChangeRepas(stepRepas - 1);


 
  //  find types repas
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

  //  find types repas
  const [servir, setServir] = useState([]);
  const [affCat, setAffCat] = useState(null);


  const getServir = async () => {

    return new Promise((resolve, reject)=>{
    axios
        .get("http://localhost:5000/okraeat/servir")

        .then((res) => {
            resolve(res.data.data);
         
        })
        .catch((error) => reject(error));

    })
};

 


  //uploader
  const [uploading, setUploading] = useState(false);
  const [fileInfo, setFileInfo] = useState(null);
  const [img, setImg] = useState(null);

  function previewFile(file, callback) {
    const reader = new FileReader();
    reader.onloadend = () => {
      callback(reader.result);
    };
    reader.readAsDataURL(file);
  }
  
  const [message, setMessage] = useState("");

  const handleChangeRepasData = (item, value, id_ea, prix, num) => {

 
    
    UpdateInfo(item, value, id_ea, prix, num);

      if(item == "id_cat"){
        let foundCategory = null;

        typeRepas.map((r)=>{
             
        if (r.id_cat == value ) {
          foundCategory =  {
                  id_cat : r.id_cat,
                  lib : r.lib
            }
        }
        
        })
        setAffCat(foundCategory)
      }


  };
  const supprime= (index) => {
 
    deleteItem(index)

  };

  //Modification de plat
  const updateRepas = async (idrepUp) => {

    const formData = new FormData();
    if (img != null) {
      formData.append("image", img);
    } 
    formData.append("id_serv", idserUp);

    affCat == null ? formData.append("id_cat", cat.id_cat) : formData.append("id_cat", affCat.id_cat);

    formData.append("nom", nomUp);
    formData.append("populaire", populaireUp);
    formData.append("description", descriptionUp);
    formData.append("prix", prixUp);
    formData.append("statut", statutUp);
   
    formData.append(
      "accompagnement",
      JSON.stringify(accompagnemetUp)
    );
    

    // for (const [clé, valeur] of formData) {
    //   console.log(`Clé : ${clé}, Valeur : ${valeur}`);
    // }

    await axios
      .put("http://localhost:5000/okraeat/updateRepas/" + idrepUp, formData)

      .then((res) => {
        console.log("retour", res)
      })

      .catch((error) => console.log(error));
  };
  

  useLayoutEffect(() => {
   
   

    getAccomp()
    .then((r) => {
      setAccomp(r) 
      clench()
    })
    .catch((e) => console.error(e));

    getServir()
    .then((r) => {
      setServir(r)
   
     
    })
    .catch((e) => console.error(e));

}, []);



  return (
    <>
      <CustumModal
        headColor={"#00972F"}
        title="MODIFIER UN REPAS"
        show={show}
        handleClose={handleClose}
      >
        {
         nomUp && accompagnemetUp  ?
<>

<div>
          {stepRepas === 0 && (
            <>
              <Steps current={stepRepas} className="custom-steps">
                <Steps.Item />
                <Steps.Item />
                <Steps.Item />
              </Steps>
              <ModalBodyContainer>
                <div className="step-container">
                  <div className="profil-title-row">
                    <h5 className="step-title">Profil du Repas</h5>
                    <div className="actif-switch-container">
                      <p className="switch-label">Repas inactif</p>
                      <Toggle
                        size={"sm"}
                        checked={statutUp}
                        onChange={(checked, e) =>
                          handleChangeRepasData("actif", checked)
                        }
                      />
                    </div>
                  </div>

                  <div className="input-group">
                    <p className="label">Banière du Repas</p>
                    <UploaderCustum
                      action="//jsonplaceholder.typicode.com/posts/"
                      draggable
                      fileListVisible={false}
                      listType="picture"
                      onUpload={(file) => {
                        setUploading(true);
                        previewFile(file.blobFile, (value) => {
                          setFileInfo(value);
                        });
                        setImg(file.blobFile);
                      }}
                      onSuccess={(response, file) => {
                        setUploading(false);
                    
                      }}
                      onError={() => {
                        // setFileInfo(null);
                        setUploading(false);
                      }}
                    >
                      <PreviewImage>
                        {uploading && <Loader backdrop center />}
                        {fileInfo ? (
                          <img src={fileInfo} width="100%" height="100%" />
                        ) : (
                          <>
                            {imgUp ? (
                              <img
                              // src={`../../../../../file/${imgUp}`}
                        src={`http://localhost:5000/okraeat/file/${imgUp}`}
                                width="100%"
                                height="100%"
                              />
                            ) : (
                              <div
                                className="icon-container"
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <span>
                                  <UploadIcon />
                                </span>
                              </div>
                            )}
                          </>
                        )}
                      </PreviewImage>
                    </UploaderCustum>
                  </div>

                  <div className="input-group">
                    <p className="label">Nom du Repas</p>
                    
                   
                   <Input
                      placeholder="Paul Gontran"
                      width="100%"
                      height="48px"
                      value={nomUp}
                      onChange={(e) =>
                        handleChangeRepasData("nom", e.target.value)
                      }
                    />
                  </div>

                  <div className="input-group">
                    <SimpleButton
                      primarybutton
                      width="100%"
                      onClick={onNextRepas}
                      disabled={stepRepas === 3}
                    >
                      Continuer
                    </SimpleButton>
                  </div>
                </div>
              </ModalBodyContainer>
            </>
          )}

          {stepRepas === 1 && (
            <>
              <Steps current={stepRepas} className="custom-steps">
                <Steps.Item />
                <Steps.Item />
                <Steps.Item />
              </Steps>
              <ModalBodyContainer>
                <div className="step-container">
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="step-title">Détails du restaurant</h5>
                  </div>

                  <div className="input-group">
                    <p className="label">Catégorie du repas</p>
                    <StyledSelect
                     
                      onChange={(e) =>
                        handleChangeRepasData("id_cat", e.target.value)
                      }
                    >
                      {
                        cat  &&  
                        
                        <StyledOption value={cat.id_cat}>{cat.lib}</StyledOption>
                      }
                     

                      {
                        cmptCat.map((item)=>(

                          <StyledOption value={item.id_cat}>{item.lib}</StyledOption>

                        ))
                       
                      }
                      

                    </StyledSelect>
                    
                    
                      
                    
                  </div>

                  <div className="input-group">
                    <p className="label">Prix du repas</p>
                    <Input
                      placeholder="1500 fcfa"
                      width="100%"
                      height="48px"
                      value={prixUp}
                      onChange={(e) =>
                        handleChangeRepasData("prix", e.target.value)
                      }
                    />
                  </div>

                  <div className="input-group">
                    <p className="label">Une petite description du repas</p>
                    <div className="textarea-container">
                      <TextArea
                        placeholder="description du repas"
                        rows={25}
                        type="textarea"
                        width="100%"
                        value={descriptionUp}
                        onChange={(e) =>
                          handleChangeRepasData(
                            "description",
                            e.target.value
                          )
                        }
                      />
                    </div>
                  </div>

                  <div className="buttons-container">
                    <SimpleButton
                      secondarybutton
                      width="25%"
                      onClick={onPreviousRepas}
                      disabled={stepRepas === 3}
                    >
                      Retour
                    </SimpleButton>

                    <SimpleButton
                      primarybutton
                      width="75%"
                      onClick={onNextRepas}
                      disabled={stepRepas === 3}
                    >
                      Continuer
                    </SimpleButton>
                  </div>
                </div>
              </ModalBodyContainer>
            </>
          )}

          {stepRepas === 2 && (
            <>
              <Steps current={stepRepas} className="custom-steps">
                <Steps.Item />
                <Steps.Item />
                <Steps.Item />
              </Steps>
              <ModalBodyContainer>
              <p style={{color:"red"}}>{message}</p>  
                <div className="step-container">
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="step-title">Accompagnement du repas</h5>
                  </div>

                  <div className="accompagnement-container">
                    {accompagnemetUp.map((rep, index) => {
                      return (
                        <div key={index} className="double-input-group">
                          <div className="double-input-group-item">
                            <p className="label">Nom de l'accompagnement</p>
                            <StyledSelect
                              height={"52px"}
                              data={accs}
                            
                              onChange={(e) =>
                                handleChangeRepasData(
                                  'id_acc',
                                  e.target.value, 
                                  rep.id_ea ? rep.id_ea : null,
                                  rep.prix ? rep.prix  : 0,
                                  index
                                )
                              }
                            >
                              <StyledOption  value={rep.id_acc}>
                                {rep.nom}
                              </StyledOption>
                           

                            {
                              accomp.map((ind)=>(
                                <StyledOption  value={ind.id_acc}>
                                {ind.nom}
                              </StyledOption>
                           
                              ))
                            }

                              
                           </StyledSelect>  
  

                          </div>

                          <div className="double-input-group-item">
                            <p className="label">Prix de l'accompagnement</p>
                            <Input
                              placeholder="1500 fcfa"
                              width="100%"
                              height="52px"
                              value={rep.prix}
                              onChange={(e) =>
                                handleChangeRepasData(
                                  'id_acc_prix',
                                  e.target.value, 
                                  rep.id_ea ? rep.id_ea : null,
                                  rep.prix ? rep.prix  : 0,
                                  index 
                                )}
                                
                            />
                          </div>
                          <div className="double-input-group-item">
                            <p className="label" ></p>
                            <p className="label" ></p>
                            <p className="label" ></p>
                            <p className="label" ></p>
                            <p className="label" ></p>
                            <MdDelete style={{ height: "26px", width: "26px", cursor : "pointer" }} onClick={()=>{supprime(index)}}/>
                          </div>
                        </div>
                      );
                    })}

                    <div>
                      <p className="ajouter-accomp" onClick={()=> handleChangeRepasData("ajout")}>
                        <PlusIcon /> Ajouter un nouvel accompagnement
                      </p>
                    </div>
                  </div>

                  <div className="buttons-container">
                    <SimpleButton
                      secondarybutton
                      width="25%"
                      onClick={onPreviousRepas}
                      disabled={stepRepas === 3}
                    >
                      Retour
                    </SimpleButton>

                    <SimpleButton
                      primarybutton
                      width="75%"
                      onClick={() => {
                        onNextRepas(), updateRepas(idrepUp);
                      }}
                    >
                      Continuer{" "}
                    </SimpleButton>
                  </div>
                </div>
              </ModalBodyContainer>
            </>
          )}

          {stepRepas === 3 && (
            <>
              <ModalBodyContainer>
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <h1>Modification réussi</h1>
                  <img className="img-success" src={imgSuccess} alt="" />
                  <div className="buttons-container">
                    <SimpleButton
                      secondarybutton
                      width="25%"
                      onClick={()=>handleRefresh()}
                      disabled={stepRepas === 0}
                    >
                      Fermer
                    </SimpleButton>
                  </div>
                </div>
              </ModalBodyContainer>
            </>
          )}
        </div>

</>
          
          :

          <SpinnerCircular size={20} thickness={131} speed={100} color="rgba(240, 88, 1, 1)" secondaryColor="rgba(172, 57, 57, 0.44)" style={{margin:"150px"}}/>

        }
       
      </CustumModal>
    </>
  );
}
