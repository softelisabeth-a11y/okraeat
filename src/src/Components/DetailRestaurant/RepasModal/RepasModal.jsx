import React, { useState, useEffect } from "react";
import axios from "axios";
//Compoments
import CustumModal from "../../modal/Modal";
import { Toggle, Steps, Loader } from "rsuite";
import { SimpleButton } from "../../Buttons/ButtonStyle";
import { Input, TextArea } from "../../Input/InputStyle";
import {StyledSelect, StyledOption} from "../../SelectListe/SelectList";
import CrossIcon from "../../../../assets/Home/svg/CrossIcone"
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

export default function RepasModal({ show, handleClose, id, getDetailRestaurant, donneesRp, handleRefresh }) {



  const accs = ["Viande de poulet", "Poisson", "Frommage"].map((item) => ({
    label: item,
    value: item,
  }));



  //repas stepper
  const [stepRepas, setStepRepas] = React.useState(0);
  const onChangeRepas = (nextStep) => {
    setStepRepas(nextStep < 0 ? 0 : nextStep > 3 ? 3 : nextStep);
  };
  const onNextRepas = () => onChangeRepas(stepRepas + 1);
  const onPreviousRepas = () => onChangeRepas(stepRepas - 1);

  // state de gestion formulaire accompagnement
  const initialAccState = [{ idAccomp: "", prix: "" }];
  const [formulaireAccompagnements, setFormulaireAccompagnements] =
    useState(initialAccState);

  const onPlus = () => {
    const nouvelFrmulaireAccompagnement = { idAccomp: "", prix: "" };
    setFormulaireAccompagnements([
      ...formulaireAccompagnements,
      nouvelFrmulaireAccompagnement,
    ]);
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
  //State de recuperation des données du formulaire
  const initialInfoRepas = {
    actif: false,
    populaire: false,
    nomRepas: "",
    categorieRepas: "",
    prixRepas: "",
    descriptionRepas: "",
  };

  //Tableau des accompagnement et la fonction d'ajout d'accompagnment

  const handleChangeAccomp = (cle, prop, value) => {

    setFormulaireAccompagnements((prevFormData) => {
      const lesAccomp = [...formulaireAccompagnements];
      lesAccomp[cle][prop] = value;
      return lesAccomp;
    });
  };

  const [infoRepas, setInfoRepas] = useState(initialInfoRepas);


  const handleChangeRepasData = (prop, value) => {

    setInfoRepas({ ...infoRepas, [prop]: value });
  };

  const [verifyM, setVerifyM] = useState();

  const verify = (etape)=>{

if(etape == 'etape1'){

  const cntrl = infoRepas.nomRepas

   if (cntrl != "" && img !="") {
        onNextRepas()
        setVerifyM("")
   } else {
    setVerifyM("Un ou pluisieurs champs sont vides")
   }

}
    
if(etape == 'etape2'){

  const cntrl1 = infoRepas.categorieRepas
  const cntrl2 = infoRepas.prixRepas
  const cntrl3 = infoRepas.descriptionRepas

   if (cntrl1 != "" && cntrl2 !="" && cntrl3 !="") {
        onNextRepas()
        setVerifyM("")
   } else {
    setVerifyM("Un ou pluisieurs champs sont vides")
   }

}  

  }

  const deleteItem = (index)=>{
    
      if (index === 0) {
        const newAccompagnements = [...formulaireAccompagnements];
        newAccompagnements.shift();

        setFormulaireAccompagnements(newAccompagnements);
        
      } else  {
        const newAccompagnements = [...formulaireAccompagnements];
        newAccompagnements.splice(index, 1);
        setFormulaireAccompagnements(newAccompagnements);
      }
 
       
  }

  //Ajout de repas

  const ajouterRepasResto = async () => {
    const formData = new FormData();

    formData.append("image", img);
    formData.append("infoPlat", JSON.stringify(infoRepas));
    formData.append(
      "accompagnement",
      JSON.stringify(formulaireAccompagnements)
    );

    for (const [clé, valeur] of formData) {
      console.log(`Clé : ${clé}, Valeur : ${valeur}`);
    }
    await axios

      .post("http://localhost:5000/okraeat//api/repas", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })

      .then((res) => {
        console.log("mon retour",res)
        onNextRepas()
        setImg(null);
        setFileInfo(null);
        setInfoRepas(initialInfoRepas);
        setFormulaireAccompagnements(initialAccState);

      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Recuperation de plat
  const [repas, setRepas] = useState([]);
  const getRepas = async () => {
    return new Promise((resolve, reject) => {
      axios
        .get("http://localhost:5000/okraeat//recuperationPlatsResto/" + id)

        .then((res) => {
          resolve(res.data.data);
        })
        .catch((error) => reject(error));
    });
  };

  // Recuperation de plat
  const [accompagmt, setAccompagmt] = useState([]);

  const getAccompgnement = async () => {

    return new Promise((resolve, reject) => {
      axios
        .get("http://localhost:5000/okraeat//get_accompagnement")

        .then((res) => {
          resolve(res.data.data);
        })
        .catch((error) => reject(error));
    });
  };

  // Recuperation de categorie
 const [typeRepas, setTypeRepas] = useState([]);

 const getTypeRepas = async () => {

     return new Promise((resolve, reject) => {
         axios
             .get("http://localhost:5000/okraeat//type_repas")

             .then((res) => {
                 resolve(res.data.data);

             })
             .catch((error) => reject(error));

     })
 };

 let cmpt = []
   donneesRp.Categories.map((item)=>(
    cmpt.push({
      id_cat : item.id_cat,
      lib : item.lib
    })
   ))

//  const handleRefresh = () => {
//   handleClose() 
//   window.location.reload();
// };



  useEffect(() => {
    getRepas()
    
      .then((r) => {
        setRepas(r['Categorie'][0].Servirs[0]);
      })
      .catch((e) => console.error(e));

    getAccompgnement()
      .then((r) => {
     
        setAccompagmt(r);
      })
      .catch((e) => console.error(e));

    getTypeRepas()
      .then((r) => {
        
        setTypeRepas(r);
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <>
      <CustumModal
        headColor={"#00972F"}
        title="AJOUTER UN REPAS"
        show={show}
        handleClose={handleClose}
      >
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
                        checked={infoRepas.actif}
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
                        console.log(response);
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
                      </PreviewImage>
                    </UploaderCustum>
                  </div>

                  <div className="input-group">
                    <p className="label">Nom du Repas</p>
                    <Input
                      placeholder="Nom du repas"
                      width="100%"
                      height="48px"
                      value={infoRepas.nomRepas}
                      onChange={(e) =>
                        handleChangeRepasData("nomRepas", e.target.value)
                      }
                    />
                  </div>

                  <div className="input-group">
                    <SimpleButton
                      primarybutton
                      width="100%"
                      onClick={()=>{verify('etape1')}}
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
                        handleChangeRepasData("categorieRepas", e.target.value)
                      }
                      >
                      <StyledOption value="">Choisir catégorie</StyledOption>
                        { cmpt.map((item)=>(
                          
                    <StyledOption value={item.id_cat}>{item.lib}</StyledOption>

                   
                    ))
                        
                        }
                      
                  
                        
                    </StyledSelect>
                  </div>

                  <div className="input-group">
                    <p className="label">Prix du repas</p>
                    <Input
                    type="number"
                      placeholder="1500 fcfa"
                      width="100%"
                      height="48px"
                      value={infoRepas.prixRepas}
                      onChange={(e) =>
                        handleChangeRepasData("prixRepas", e.target.value)
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
                        value={infoRepas.descriptionRepas}
                        onChange={(e) =>
                          handleChangeRepasData(
                            "descriptionRepas",
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
                      onClick={()=>{verify('etape2')}}
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
                <div className="step-container">
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="step-title">Accompagnement du repas</h5>
                  </div>

                  <div className="accompagnement-container">
                    {formulaireAccompagnements.map((item, index) => {
                      return (
                        <div key={index} className="double-input-group">
                          <div className="double-input-group-item">
                            <p className="label">Nom de l'accompagnement</p>
                            <StyledSelect  
                             onChange={(e) =>
                              handleChangeAccomp(
                                index,
                                "idAccomp",
                                e.target.value
                              )
                            }
                            >
                       <StyledOption value="">Sélectionner</StyledOption>
                              {accompagmt.map((item)=>(

                                 <StyledOption value={item.id_acc}>{item.nom}</StyledOption>
                                 ))}
                             
                         </StyledSelect>
                          </div>

                          <div className="double-input-group-item">
                            <p className="label">Prix de l'accompagnement</p>
                            <Input
                              placeholder="prix"
                              width="100%"
                              height="52px"
                              value={item.prix}
                              onChange={(e) =>
                                handleChangeAccomp(
                                  index,
                                  "prix",
                                  e.target.value
                                )
                              }
                            />
                          </div>
                          <div className="double-input-group-item">
                            <p className="label" ></p>
                            <p className="label" ></p>
                            <p className="label" ></p>
                            <p className="label" ></p>
                            <p className="label" ></p>
                            <MdDelete style={{ height: "26px", width: "26px", cursor : "pointer" }} onClick={()=>{deleteItem(index)}}/>
                          </div>
                        </div>
                      );
                    })}

                    <div>
                      <p className="ajouter-accomp" onClick={onPlus}>
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
                         ajouterRepasResto();
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
                  <h1>Enregistrement réussi</h1>
                  <img className="img-success" src={imgSuccess} alt="" />
                  <div className="buttons-container">
                    <SimpleButton
                      secondarybutton
                      width="25%"
                      onClick={()=>{handleClose();handleRefresh()}}
                      disabled={stepRepas === 0}
                    >
                      Fermer 
                    </SimpleButton>

                    <SimpleButton
                      primarybutton
                      width="75%"
                      onClick={() => setStepRepas(0)}
                    >
                      Nouveau Repas
                    </SimpleButton>
                  </div>
                </div>
              </ModalBodyContainer>
            </>
          )}
        </div>
      </CustumModal>
    </>
  );
}
