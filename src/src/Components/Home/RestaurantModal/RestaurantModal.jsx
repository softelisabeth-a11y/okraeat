import React, { useState, useEffect } from "react";
//Compoments
import CustumModal from "../../modal/Modal"
import { Toggle, Steps, Loader } from 'rsuite';
import { SimpleButton } from "../../../Components/Buttons/ButtonStyle";
import { Input, SmallInput } from "../../../Components/Input/InputStyle";
import { CustomCheckbox } from "../../../Components/selectlist/SelectList";
import { StyledSelect, StyledOption } from "../../SelectListe/SelectList";


import axios from "axios";

//Styles
import './CustomSteps.css'
import { ModalBodyContainer, UploaderCustum, PreviewImage, SelectListMultiple, TimeInput } from "./RestaurantModalStyle";

//Assets
import imgSuccess from '../../../../assets/success.png'
import { UploadIcon } from "../../../../assets/icons/modal/Svg";


export default function RestaurantModal({ show, handleClose }) {

 //modal restaurant
 const [showModal, setShowModal] = useState(false);
 const handleCloseModal = () => setShowModal(false);
 const handleShowModal = () => setShowModal(true);

// localisation
//  const [location, setLocation] = useState(null);
//   const [permissionGranted, setPermissionGranted] = useState(false);

    //restaurant stepper
    const [step, setStep] = React.useState(0);
    const onChange = nextStep => {
        setStep(nextStep < 0 ? 0 : nextStep > 4 ? 4 : nextStep);
    };
    const onNext = () => onChange(step + 1);
    const onPrevious = () => onChange(step - 1);


    const [allerChercher, setAllerChercher] = useState(true)
    const handleChangeAllerChercher = () => {
        setAllerChercher(!allerChercher)
    }
    const [salleAManger, setSalleAManger] = useState(true)
    const handleChangeSalleAManger = () => {
        setSalleAManger(!salleAManger)
    }
    const [livraison, setLivraison] = useState(false)
    const handleChangeLivraison = () => {
        setLivraison(!livraison)
    }

    const handleChangeActif = () => {
        setRestaurantActif(!restaurantActif)
    }

    const handleChangeRestoData = (prop, value) => {

        setRestaurantData({ ...restaurantData, [prop]: value })
    }
    const handleChangeValue = (value) => {
        
        // setRestaurantData({ ...restaurantData, [prop]: value })
    }

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



    //find jours
    const [days, setDays] = useState([]);

    const [ouverture, setOuverture] = useState([]);

    let tables

    tables = ouverture
   


    const [ck, setCk] = useState(
                         [ {id : 1, val : false},
                           {id : 2, val : false},
                           {id : 3, val : false},
                           {id : 4, val : false},
                           {id : 5, val : false},
                           {id : 6, val : false},
                           {id : 7, val : false} ]
                                  );


    const getDays = async () => {
return new Promise((resolve, reject)=>{
         axios
            .get("http://localhost:5000/okraeat/jours")

            .then((res) => {
                resolve(res.data.data);

            })
            .catch((error) => reject(error));

        })
    };


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

    //  find types restaurants 
    const [typeResto, setTypeResto] = useState([]);

    const getTypeResto = async () => {

        return new Promise((resolve, reject)=>{
      axios
        .get("http://localhost:5000/okraeat/Types_restaurants")

            .then((res) => {
                resolve(res.data.data);
       console.log('typeResto', res.data.data);
            })
            .catch((error) => reject(error));
        })
    };


    //  find types repas
    const [typeRepas, setTypeRepas] = useState([]);

    const getTypeRepas = async () => {

        return new Promise((resolve, reject)=>{
        axios
            .get("http://localhost:5000/okraeat/type_repas")

            .then((res) => {
                resolve(res.data.data);
             
            })
            .catch((error) => reject(error));

        })
    };

    const types = typeRepas.map(
        item => ({ label: item.lib , value:item.id_cat  })
    );



    // lecture des options 
     const [options, setOptions] = useState([])


    const getOptions = async () => {
 return new Promise((resolve, reject) =>{

       axios
            .get("http://localhost:5000/okraeat/Options")
            // http://localhost:5000

            .then((res) => {

                resolve(res.data.data);
            
            })
            .catch((error) => reject(error));

        })
    };

 

    // ajout restaurants 

    const [nom, setNom] = useState("");
    const [quart, setQuart] = useState("");
    const [type, setType] = useState("");
    const [numero, setNumero] = useState("");
    const [adresse, setAdresse] = useState("");
    const [description, setDescription] = useState('');
    const [option, setOption] = useState([]);
    const [prix, setPrix] = useState("");
    const [multi, setMulti] = useState([]);


    const handleSelectChange = (selectedValues) => {
        setMulti(selectedValues);

         
    };


    const [salle, setSalle] = useState(false);
    const [inter, setInter] = useState({});

    // console.log("inter est là",inter)

    const handlecheck = (id, value, lib)=>{

        if (id == 3) {

                const rsul = inter.map((item)=>{

                        if (item.id == id ) {
                            return { ...item, statut: value };
                        }

    
                       return item
    
                     })

                const rest = rsul.map((item)=>{

                        if (item.id == 1 ) {
                            return { ...item, statut: value };
                        }
    
                       return item
    
                     })

                     setInter(rest)
                     setOption(rest)
                     setOptions(rest)
        }else{
            const rsul = inter.map((item)=>{

                if (item.id == id ) {
                    return { ...item, statut: value };
                }
 

               return item

             })


             setInter(rsul)
             setOption(rsul)
             setOptions(rsul)
        }
    

    }


    const handleChangeTime = (value, id, param) => {


        if (param === "ouverture") {

            const objetTrouve = ouverture.find(objet => objet.id == id);
            const currentDay = { ...objetTrouve, ouverture: value }
            const ouvertureFiltred = ouverture.filter(objet => objet.id != id);
            const ouvertureUpdated = [...ouvertureFiltred, currentDay]
            setOuverture(ouvertureUpdated)

            tables = ouvertureUpdated
        }
        if (param === "fermeture") {
            const objetTrouve = ouverture.find(objet => objet.id == id);
            const currentDay = { ...objetTrouve, fermeture: value }
            const ouvertureFiltred = ouverture.filter(objet => objet.id != id);
            const ouvertureUpdated = [...ouvertureFiltred, currentDay]
            setOuverture(ouvertureUpdated)
            tables = ouvertureUpdated
        }
        if (param === "statut") {
     
            const objetTrouve = ouverture.find(objet => objet.id == id);
            const currentDay = { ...objetTrouve, statut: value }
            const ouvertureFiltred = ouverture.filter(objet => objet.id != id);
            const ouvertureUpdated = [...ouvertureFiltred, currentDay]
            setOuverture(ouvertureUpdated)
            tables = ouvertureUpdated
        
        
                // const trv = ck.find(ob=>ob.id == id)
           
                // const rst = {...trv, val : value}

           
                // const sut = ck.filter(ob=>ob.id != id)
            
                // let tt = [...sut, rst]
           
                // tt.map((item)=>{
                //     mouv.push(item)
                  
                //   })
               
            
        }


    }

    const [champ, setChamp] = useState("");
     
const verify = (etape)=>{ 

    if(etape == "etape1"){

        if (img =="" || nom == "") {

            setChamp("Un ou plusieurs champs vides")
            
        } else {
            setChamp("")
            onNext()
        }
        
    }

    if(etape == "etape2"){

        if (type =="" || numero == "" || adresse == "" || description == "" ||
            quart == ""
        ) {

            setChamp("Un ou plusieurs champs vides")
            
        } else {
            setChamp("")
            onNext()
        }
        
    }

    if(etape == "etape3"){

        if (option =="" || prix == "" || multi == "" 
        ) {

            setChamp("Un ou plusieurs champs vides")
            
        } else {
            setChamp("")
            onNext()
        }
        
    }

    if(etape == "etape4"){

const pret = ouverture.every(item => item.fermeture !== "" || item.ouverture !== "" || item.statut == false);

const pretDeux = ouverture.every(item => item.fermeture !== "" || item.ouverture !== "" || item.statut == true);

    if (pret) {
      setChamp("");
      ajouterResto(); // Appel à ajouterResto ici, une seule fois
      onNext();

    } else if(pretDeux){
        
        setChamp("");
        ajouterResto(); // Appel à ajouterResto ici, une seule fois
        onNext();

    } else {
      setChamp("Un ou plusieurs champs vides");
    }
        
    }
  
}

    const ajouterResto = async () => {


        const heures = { ouverture }

        const formData = new FormData();

        formData.append("nom", nom);
        formData.append("quartier", quart);
        formData.append("type", type);
        formData.append("numero", numero);
        formData.append("adresse", adresse);
        formData.append("description", description);
        formData.append("option", JSON.stringify(option));

        // if (location !="") {
        //     formData.append("local", JSON.stringify(location));
        // }
        
        formData.append("prix", prix);
        formData.append("image", img);
        formData.append("multi", multi);
        formData.append("ouverture", JSON.stringify(ouverture));

      


        // for (const [clé, valeur] of formData) {
        //     console.log(`Clé : ${clé}, Valeur : ${valeur}`);
        // }


        await axios

            .post("http://localhost:5000/okraeat/api/restaurant", formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                })

            .then((res) => {

           setNom("")
           setQuart("")
           setType("")
           setNumero("")
           setAdresse("")
           setDescription("")
           setOption([])
           setPrix("")
           setMulti([])
           setOuverture([])
           setFileInfo(null)
           setUploading(false)
           setLocation("")


            })
            .catch((error) => {
                console.log(error);
            });
    };

    const  nouvInser = ()=>{

           setNom("")
           setQuart("")
           setType("")
           setNumero("")
           setAdresse("")
           setDescription("")
           setOption([])
           setPrix("")
           setMulti([])
           setOuverture([])
           setFileInfo(null)
           setUploading(false)
           
        setStep(0)
    } 

    const handleRefresh = () => {
        handleClose()
        window.location.reload();
      };
// focntion de location

// const requestLocationPermission = (value) => {

//     if(value == true){
// navigator.geolocation.getCurrentPosition(function (position) {
//       setLocation({
//         latitude: position.coords.latitude,
//         longitude: position.coords.longitude,
//       });
//       setPermissionGranted(true);
//     });
//   }else{
//     setLocation("")
//   };
//     }
    


    useEffect(() => {
      
        getDays()
        .then((r) => {
          
          setDays(r);

          const ouvertureData = r.map(item => {
            return {
                id: item.id,
                jour: item.lib,
                ouverture: "",
                fermeture: "",
                statut: false
            }
        })
        setOuverture(ouvertureData)
        })
        .catch((e) => console.error(e));
        
        getTypeResto()
        .then((r) => {
            console.log('r', r);
          setTypeResto(r);
          
        })
        .catch((e) => console.error(e));

        getQuartierResto()
        .then((r) => {
          setQuartier(r)
         
        })
        .catch((e) => console.error(e));

        getTypeRepas()
        .then((r) => {
          setTypeRepas(r)
         
        })
        .catch((e) => console.error(e));

        getOptions()
        .then((r) => {
          

          const interOpt = r.map((item)=>{
            return {
                id : item.id_opt,
                lib : item.lib,
                statut : false
            }
          })
          setOptions(interOpt);
          setInter(interOpt)
        })
        .catch((e) => console.error(e));

        // if ("geolocation" in navigator) {
        //     navigator.permissions
        //       .query({ name: "geolocation" })
        //       .then(function (result) {
        //         if (result.state === "granted") {
        //           setPermissionGranted(true);
        //           navigator.geolocation.getCurrentPosition(function (position) {
        //             setLocation({
        //               latitude: position.coords.latitude,
        //               longitude: position.coords.longitude,
        //             });
        //           });
        //         } else if (result.state === "prompt") {
        //           setPermissionGranted(false);
        //         } else {
        //           setPermissionGranted(false);
        //           console.log("La géolocalisation n'est pas autorisée.");
        //         }
        //       });
        //   } else {
        //     console.log("La géolocalisation n'est pas prise en charge par votre navigateur.");
        //   }
  
    }, []);

    return (
        <CustumModal headColor={"#F05801"} title="AJOUTER UN RESTAURANT" show={show} handleClose={handleClose} info={champ} >
            <div>
                {step === 0 && <>
                    <Steps current={step} className="custom-steps">
                        <Steps.Item />
                        <Steps.Item />
                        <Steps.Item />
                        <Steps.Item />
                    </Steps>
                    <ModalBodyContainer>
                        <div className="step-container">
                            <div className="profil-title-row">
                                <h5 className="step-title">Profile du restaurant</h5>
                                
                            </div>

                            <div className="input-group">
                                <p className="label">Banière du restaurant</p>
                                <UploaderCustum
                                    action="//jsonplaceholder.typicode.com/posts/"
                                    draggable
                                    fileListVisible={false}
                                    listType="picture"
                                    onUpload={file => {
                                        setUploading(true);
                                        previewFile(file.blobFile, value => {
                                            setFileInfo(value);
                                        });
                                        setImg(file.blobFile)
                                    }}
                                    onSuccess={(response, file) => {
                                        setUploading(false);
                                    }}
                                    onError={() => {
                                        setUploading(false);
                                    }}
                                >
                                    <PreviewImage>
                                        {uploading && <Loader backdrop center />}
                                        {fileInfo ? (<img src={fileInfo} width="100%" height="100%" />
                                        ) : (
                                            <div className="icon-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <span><UploadIcon /></span>
                                            </div>
                                        )}
                                    </PreviewImage>
                                </UploaderCustum>
                            </div>

                            <div className="input-group">
                                <p className="label">Nom du restaurant</p>
                                <Input placeholder="Libellé du restaurant" width="100%" height="48px"

                                    value={nom}
                                    onChange={(e) => setNom(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="input-group">
                                <SimpleButton primarybutton width="100%" onClick={()=>verify("etape1")} disabled={step === 3}>
                                    Continuer
                                </SimpleButton>
                            </div>
                        </div>
                    </ModalBodyContainer>
                </>}

                {
                    step === 1 && <>
                        <Steps current={step} className="custom-steps">
                            <Steps.Item />
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
                                    <p className="label">Catégorie du restaurant</p>
                                    <StyledSelect
                                    onChange={(e) => setType(e.target.value)}
                                        required
                                    >
                                         <StyledOption value="">Veuillez choisir le type </StyledOption>

                                        {
                                            typeResto.map((item) => (

                                                <StyledOption value={item.id_typ} >{item.lib}</StyledOption>
                                            ))
                                        }
                                    </StyledSelect>
                                </div>

                                <div className="input-group">
                                    <p className="label">Numéro du restaurant</p>
                                    <Input placeholder="+000 | 00 00 00 00" width="100%" height="48px"
                                        type="number"
                                        value={numero}
                                        onChange={e => setNumero(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="input-group">
                                    <p className="label">Quartier</p>
                                    <StyledSelect
                                    onChange={(e) => setQuart(e.target.value)}
                                        required
                                    >
                                         <StyledOption value="">Veuillez choisir le quartier </StyledOption>

                                        {
                                            quartier.map((item) => (

                                                <StyledOption value={item.id_qrt} >{item.lib}</StyledOption>
                                            ))
                                        }
                                    </StyledSelect>
                                </div>

                                {/* <div style={{ display:"flex", flexDirection:"row", justifyContent:"flex-start", alignItems:"center", gap:"18px"}}>
                                    <p className="label">Prendre ma localisation</p>
                                    <Input type="checkbox"  
                                        onChange={(c)=>{requestLocationPermission(c.target.checked)}}
                                        height="30px"
                                        required
                                    />
                                </div> */}
                                <div className="input-group">
                                    <p className="label">Adresse du restaurant</p>
                                    <Input placeholder="Etoile Rouge" width="100%" height="52px"
                                        value={adresse}
                                        onChange={(e) => setAdresse(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="input-group">
                                    <p className="label">Description de localisation</p>
                                    <Input as="textarea" rows={3} placeholder="Ajouter plus d'indication ici" 
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    required
                                    />
                                </div>

                                <div className="buttons-container">
                                    <SimpleButton secondarybutton width="25%" onClick={onPrevious} disabled={step === 3}>
                                        Retour
                                    </SimpleButton>

                                    <SimpleButton primarybutton width="75%" onClick={()=>verify("etape2")} disabled={step === 3}>
                                        Continuer
                                    </SimpleButton>
                                </div>
                            </div>
                        </ModalBodyContainer>
                    </>
                }

                {
                    step === 2 && <>
                        <Steps current={step} className="custom-steps">
                            <Steps.Item />
                            <Steps.Item />
                            <Steps.Item />
                            <Steps.Item />
                        </Steps>
                        <ModalBodyContainer>
                            <div className="step-container">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5 className="step-title">Détails du restaurant</h5>
                                </div>

                                <div className="commande-options-container">
                                    <p className="label">Options de comnande</p>
                                    <div className="commande-options-row">
                                       
                                         {
                                             options.map((item, index)=>(

                                <div className="option-container" key={index}>
                                           
                                            <span className="option-cmd-label">
                                                {item.lib}
                                                </span>
                                                
                                               <input type="checkbox" 
                                                checked={item.statut}

                                               onChange={(v) => handlecheck(item.id, v.target.checked, item.lib)} />
                                               
                                              
                                        </div>
                                        
                                        
                                        ))
                                            } 

                                    </div>
                                </div>

                                <div className="min-price-container">
                                    <p className="label">Mangez à partir de</p>
                                    <div className="price-input-row">
                                        <div className="input-container">
                                            <SmallInput 
                                            type="number"
                                            placeholder="500" width="100%" height="100%"
                                                value={prix}
                                                onChange={(e) => setPrix(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="devise-container">
                                            <p className="devise-text">Franc CFA</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="input-group">
                                    <p className="label">Type de restaurant</p>
                                    <SelectListMultiple
                                        searchable={false}
                                        data={types} style={{ width: "100%" }}
                                        placeholder="Sélectionnez les types"
                                        value={multi}
                                        onChange={handleSelectChange}
                                        required
                                    />
                                </div>

                                <div className="buttons-container">
                                    <SimpleButton secondarybutton width="25%" onClick={onPrevious} disabled={step === 3}>
                                        Retour
                                    </SimpleButton>

                                    <SimpleButton primarybutton width="75%" onClick={()=>verify("etape3")} disabled={step === 3}>
                                        Continuer
                                    </SimpleButton>
                                </div>
                            </div>
                        </ModalBodyContainer>
                    </>
                }

                {
                    step === 3 && <>
                        <Steps current={step} className="custom-steps">
                            <Steps.Item />
                            <Steps.Item />
                            <Steps.Item />
                            <Steps.Item />
                        </Steps>
                        <ModalBodyContainer>
                            <div className="step-container">
                                <div className="d-flex flex-column">
                                    <h5 className="step-title">Heures d'opération</h5>
                                    <p className="subtitle">Définissez son programme d'ouverture et de fermeture</p>
                                </div>

                                <div className="ouverture-container">
                                    {
                                        days.map((item, index) => {

                                    if(index+1 == item.id){

                                            return (
                                                <div className="ouverture-row">
                                                    <p className="ouverture-label">{item.lib}</p>
                                                    <div className="ouverture-row-actions">
                                           
                                            <div className="time-inputs-container">
                                                     
                                            <div className="time-input-container">
                                                <TimeInput onChange={(e) => handleChangeTime(e.target.value, item.id, "ouverture")} 
                                                required
                                                />

                                            </div>
                                            <div className="time-input-container">

                                                <TimeInput
                                                    onChange={(e) => handleChangeTime(e.target.value, item.id, "fermeture")
                                                    } 
                                                    required
                                                    />
                                            </div>
                                        </div> 

                                                        <div className="switch-container">
                                                            <p className="switch-label">Fermé</p>
                                                            <Toggle size={'sm'}
                                                                checked={item.statut}

                                                                onChange={(checked, e) => handleChangeTime(checked, item.id, "statut")} />
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                           }
                                           
                                          
                                        })
                                    }
                                </div>

                                <div className="buttons-container">
                                    <SimpleButton secondarybutton width="25%" onClick={onPrevious} disabled={step === 0}>
                                        Retour
                                    </SimpleButton>

                                    <SimpleButton primarybutton width="75%"
                                    onClick={() => { verify("etape4") }}
                                    >
                                        Valider
                                    </SimpleButton>
                                    {/* onClick={ onNext } */}
                                </div>
                            </div>
                        </ModalBodyContainer>
                    </>
                }

                {
                    step === 4 && <>
                        <ModalBodyContainer>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <h1>Enregistrement réussi</h1>
                                <img className="img-success" src={imgSuccess} alt="" />
                                <div className="buttons-container">
                                    <SimpleButton secondarybutton width="25%" onClick={handleRefresh}>
                                        Fermer
                                    </SimpleButton>

                                    <SimpleButton primarybutton width="75%" onClick={() => nouvInser() }>
                                        Nouveau Restaurant
                                    </SimpleButton>
                                </div>
                            </div>
                        </ModalBodyContainer>
                    </>
                }
            </div>
        </CustumModal>
    )
}


