import React, { useState, useEffect } from "react";
//Compoments
import CustumModal from "../../modal/Modal"
import { Toggle, Steps, Loader } from 'rsuite';
import { SimpleButton } from "../../Buttons/ButtonStyle";
import { Input, SmallInput } from "../../Input/InputStyle";
import { CustomCheckbox } from "../../selectlist/SelectList";
import { StyledSelect, StyledOption } from "../../SelectListe/SelectList";
import { useNavigate } from 'react-router-dom';


import axios from "axios";

//Styles
import './CustomSteps.css'
import { ModalBodyContainer, UploaderCustum, PreviewImage, SelectListMultiple, TimeInput } from "./RestaurantModalStyle";

//Assets
import imgSuccess from '../../../../assets/success.png'
import { UploadIcon } from "../../../../assets/icons/modal/Svg";


export default function UpdateModal({ show, handleClose, changeData,
    id_resto,
    statutup,
    nomup,
    imgUrlup,
    prix_minup,
    repasup,
    telephoneup,
    quartierup,
    adresseup,
    descriptionup,
    typeRestoup,
    optionsup,
    ouvertureup, 

}) {


    const repasValue = []

    repasup.map((item)=>{
        repasValue.push(item.lib)
    })

    // console.log("mon value", repasValue)



    


    
//  console.log("mes props", quartierup )
//  console.log("mes propssuitr", typeRestoup )

// ouvertureup.map((item)=>{

//     console.log("mes props",item.Jour.id )
//  })

const navigate = useNavigate()

const [ouvertures, setOuvertures] = useState([]);

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

//  find quartier restaurants 
const [quartier, setQuartier] = useState([]);
const [quart, setQuart] = useState();



const getQuartierResto = async () => {

    return new Promise((resolve, reject)=>{
  axios
        .get("http://localhost:5000/okraeat//quartiers_restaurants")

        .then((res) => {
            resolve(res.data.data);
   
        })
        .catch((error) => reject(error));
    })
};

    //find jours
    const [days, setDays] = useState([]);

    const [ouverture, setOuverture] = useState([]);

    const getDays = async () => {
        return new Promise((resolve, reject) => {
            axios
                .get("http://localhost:5000/okraeat//jours")

                .then((res) => {
                    resolve(res.data.data);

                })
                .catch((error) => reject(error));

        })
    };


    //  find types restaurants 
    const [typeR, setTypeR] = useState();
    const [typeResto, setTypeResto] = useState([]);


    const getTypeResto = async () => {

        return new Promise((resolve, reject) => {
            axios
                .get("http://localhost:5000/okraeat//Types_restaurants")

                .then((res) => {
                    resolve(res.data.data);

                })
                .catch((error) => reject(error));
        })
    };


    //  find types repas
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

   
    const types_resto = typeResto.map(
        item => ({ label: item.lib, value: item.id })
    );
    
    const types = typeRepas.map(
        item => ({ label: item.lib, value: item.lib })
    );

    
    const typesUp = repasup.map(
        item => ({ label: item.lib, value: item.id_cat })
    );

    // lecture des options 
    const [options, setOptions] = useState([])

    const getOptions = async () => {
        return new Promise((resolve, reject) => {

            axios
                .get("http://localhost:5000/okraeat//Options")

                .then((res) => {

                    resolve(res.data.data);

                })
                .catch((error) => reject(error));

        })
    };


   const handleChange = (event, lib)=>{

    if(lib == "ck"){
        changeData(lib, event)
    }
    
    if(lib == "photo"){
        changeData(lib, event)
       }

    if(lib == "nom"){
     changeData(lib, event)
    }

    if(lib == "categorie"){
     setTypeR(event)
    }

    if(lib == "numero"){
     changeData(lib, event)
    }
    if(lib == "quartier"){
     setQuart(event)
    } 
    if(lib == "adresse"){
     changeData(lib, event)
    }
    if(lib == "description"){
     changeData(lib, event)
    }

    if(lib == "opt"){
     changeData(lib, event)
    }

    if(lib == "prix"){
     changeData(lib, event)
    }

    if(lib == "ouv"){
     changeData(lib, event)
     setOuvertures(event)
   
    }

    

  

    

    
} 
 let OuvTav ;
    // modification restaurants 

 


let multi = []



  const [multiInter, setMultiInter] = useState([]);

  
    const handleSelectChange = (selectedValues) => {
        setMultiInter(selectedValues);
    };

// ajout restaurants 


const handlecheck = (id, value)=>{
   
    if (id == 3) {

            const rsul = optionsup.map((item)=>{

                    if (item.id_opt == id ) {

                        
            return { ...item, Proposer: { ...item.Proposer, statut: value } };


                    }


                   return item

                 })
                

            const rest = rsul.map((item)=>{

                    if (item.id_opt == 1 ) {

                        return { ...item, Proposer: { ...item.Proposer, statut: value } };
                    }

                   return item

                 })

                 handleChange(rest, "opt")
               
    }else{
        const rsul = optionsup.map((item)=>{

            if (item.id_opt == id ) {

             return { ...item, Proposer: { ...item.Proposer, statut: value } };
            }


           return item

         })

         handleChange(rsul, "opt")

        
    }
    
            
}



    const handleChangeTime = (value, id, param) => {

         if (ouvertures.length > 0) {

            if (param === "ouverture") {
                
                const rsul = ouvertures.map((item)=>{
                     
                    if (item.Jour.id == id ) {
                      return {...item, heure_ouverture:value}
                    }
                    return item
                })
    
                  OuvTav= rsul
                  handleChange(rsul,'ouv')
                  
            }
            if (param === "fermeture") {
                const rsul = ouvertures.map((item)=>{
                     
                    if (item.Jour.id == id ) {
                      return {...item, heure_fermeture:value}
                    }
                    return item
                })
    
                  OuvTav= rsul
                  handleChange(rsul,'ouv')
            }
            if (param === "statut") {

              

                const rsul = ouvertures.map((item)=>{
                     
                    if (item.Jour.id == id ) {
                      return {...item, statut:value}
                    }
                    return item
                })
    
                  OuvTav= rsul
                  handleChange(rsul,'ouv')
            }
            
         } else {

        
            
            if (param === "ouverture") {
                
                const rsul = ouvertureup.map((item)=>{
                     
                    if (item.Jour.id == id ) {
                      return {...item, heure_ouverture:value}
                    }
                    return item
                })
    
                  OuvTav= rsul
                  handleChange(rsul,'ouv')
               
            }
            if (param === "fermeture") {

                const rsul = ouvertureup.map((item)=>{
                     
                    if (item.Jour.id == id ) {
                      return {...item, heure_fermeture:value}
                    }
                    return item
                })
    
                  OuvTav= rsul
                  handleChange(rsul,'ouv')
                
            }
            if (param === "statut") {
             
                const rsul = ouvertureup.map((item)=>{
                     
                    if (item.Jour.id == id ) {
                      return {...item, statut:value}
                    }
                    return item
                })
    
                  OuvTav= rsul
                  handleChange(rsul,'ouv')
             
            }
         }

    }


    // console.log('type ouverture hooo', typeof ouverture);
    const modifierResto = async (id_res) => {

  

        // const heures = { ouverture }

        const formData = new FormData();

       

        formData.append("statut", statutup);
        formData.append("nom", nomup);

        if(quart){
            formData.append("quartier", quart);
   
        }else{
            formData.append("quartier", quartierup.id_qrt);
   
        }

        if(typeR){
            formData.append("quartier", typeR);
        }else{
            formData.append("type", typeRestoup.id_typ);
        }

        formData.append("numero", telephoneup);
        formData.append("adresse", adresseup);
        formData.append("description", descriptionup);
        formData.append("option", JSON.stringify(optionsup));
        formData.append("prix", prix_minup);

        if(multiInter.length > 0){

        
            const enrg = []

            const sup =[]

            repasup.map((item)=>{
                sup.push(item.Servir.id_ser)
            })

            multiInter.map((item)=>{

                typeRepas.map((inter)=>{
                    if(inter.lib == item){
                        enrg.push(inter.id_cat)
                    }
                })
                
            })
              
               multi = [enrg, sup]

            formData.append("multi", JSON.stringify(multi));
        

        }else{
      
        const table = []
         formData.append("multi", JSON.stringify(table));
     
        }

       

        if (img) {
            formData.append("image", img);
        } else {
            formData.append("image", imgUrlup);
        }
       

        if(ouvertures.length>0){
            formData.append("ouverture", JSON.stringify(ouvertures));
        }else{
            formData.append("ouverture", JSON.stringify(ouvertureup));
        }
        


        // for (const [clé, valeur] of formData) {
        //     console.log(`Clé : ${clé}, Valeur : ${valeur}`);
        // }

        

       
        await axios

    .put("http://localhost:5000/okraeat//update_restaurant/"+id_res, formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                })

            .then((res) => {

                console.log("mon retour", res);
                onNext()


            })
            .catch((error) => {
                console.log(error);
            });
    };

    // Fonction pour rafraichir après modofication 

    const handleRefresh = () => {
        window.location.reload();
      };

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

        getQuartierResto()
        .then((r) => {
          setQuartier(r)
         
        })
        .catch((e) => console.error(e));

        getTypeResto()
            .then((r) => {
                setTypeResto(r);

            })
            .catch((e) => console.error(e));

        getTypeRepas()
            .then((r) => {

                setTypeRepas(r)

            })
            .catch((e) => console.error(e));

        getOptions()
            .then((r) => {
                setOptions(r);

                const interOpt = r.map((item) => {
                    return {
                        id: item.id_opt,
                        lib: item.lib,
                        status: false
                    }
                })


                // setInter(interOpt)
            })
            .catch((e) => console.error(e));

            // getOneRestaurant()
            // .then((res) => {
            //     setOneResto(res);
            //     console.log('mon one resto',res);
            // })
            // .catch((e) => console.error(e));

    }, []);
// 
    return (
        <CustumModal headColor={"#F05801"} title="MODIFIER UN RESTAURANT" show={show} handleClose={handleClose}>
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
                                <div className="actif-switch-container">
                                    <p className="switch-label">Restaurant inactif</p>

                                    <input type="checkbox" name="" id="" checked={statutup} onChange={(e) => handleChange(e.target.checked, "ck")}/>
                                    
                                </div>
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

                                     
                                        {
                                        
                             fileInfo ? (<img src={fileInfo} width="100%" height="100%" />
                                        ) 
                                        
                                        :
                                
                                        <>
                                        
                                   {
                                // imgUrlup ? (<img src={`http://localhost:5000/okraeat/file/${imgUrlup}`} width="100%" height="100%"  onChange={(e) => handleChange(e.target.value, "photo")}/>

                                imgUrlup ? (<img src={`http://localhost:5000/okraeat/file/${imgUrlup}`} width="100%" height="100%"  onChange={(e) => handleChange(e.target.value, "photo")}/>
                                        ) 

                                        :
                                    <div className="icon-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <span><UploadIcon /></span>
                                    </div>
                            
                                        
                                    }
                                        </>
                                    }
                                    </PreviewImage>
                                </UploaderCustum>
                            </div>

                            <div className="input-group">
                                <p className="label">Nom du restaurant</p>
                                <Input placeholder="Paul Gontran" width="100%" height="48px"

                                    value={nomup}
                                    onChange={(e) => handleChange(e.target.value, "nom")}
                                />
                            </div>

                            <div className="input-group">
                                <SimpleButton primarybutton width="100%" onClick={onNext} disabled={step === 3}>
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
                                       
                                        onChange={(e) => handleChange(e.target.value, "categorie")}
                                    >

                                 <StyledOption value={typeRestoup.id_typ} >{typeRestoup.lib}</StyledOption>
                                          
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
                                        value={telephoneup}
                                        onChange={e => handleChange(e.target.value, "numero")}
                                    />
                                </div>

                                <div className="input-group">
                                    <p className="label">Quartier</p>
                                    <StyledSelect
                                    onChange={(e) => handleChange(e.target.value, "quartier")}
                                        required
                                    >
                                         <StyledOption value={quartierup.id_qrt}>{quartierup.lib} </StyledOption>

                                         <StyledOption value="">Veuillez choisir le quartier </StyledOption>

                                        {
                                            quartier.map((item) => (

                                                <StyledOption value={item.id_qrt} >{item.lib}</StyledOption>
                                            ))
                                        }
                                    </StyledSelect>
                                </div>

                                <div className="input-group">
                                    <p className="label">Adresse du restaurant</p>
                                    <Input placeholder="Etoile Rouge" width="100%" height="52px"
                                        value={adresseup} 
                                        
                                        onChange={(e) => handleChange(e.target.value, "adresse")}
                                    />
                                </div>
                                <div className="input-group">
                                    <p className="label">Description de localisation</p>
                                    <Input as="textarea" rows={3} placeholder="Ajouter plus d'indicatio ici" 
                                    value={descriptionup}
                                    onChange={(e) => handleChange(e.target.value, "description")}
                                    />
                                </div>

                                <div className="buttons-container">
                                    <SimpleButton secondarybutton width="25%" onClick={onPrevious} disabled={step === 3}>
                                        Retour
                                    </SimpleButton>

                                    <SimpleButton primarybutton width="75%" onClick={onNext} disabled={step === 3}>
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
                                            optionsup.map((item) => (

                                                <div className="option-container">

                                                    <span className="option-cmd-label">
                                                        {item.lib}</span>


                                                      <input type="checkbox"
                                                         checked={item.Proposer.statut}

                                                        onChange={(v) => handlecheck(item.id_opt, v.target.checked)} />


                                                </div>


                                            ))
                                        }

                                    </div>
                                </div>

                                <div className="min-price-container">
                                    <p className="label">Mangez à partir de</p>
                                    <div className="price-input-row">
                                        <div className="input-container">
                                            <SmallInput placeholder="500" width="100%" height="100%"
                                                value={prix_minup}
                                            onChange={(e) => handleChange(e.target.value, "prix")}
                                            />
                                        </div>
                                        <div className="devise-container">
                                            <p className="devise-text">Franc CFA</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="input-group">
                                    <p className="label">Type de repas</p>

                                    <SelectListMultiple

                                        searchable={false}
                                         data={types}
                                       style={{ width: "100%" }}  
                                        // placeholder="Sélectionnez les types"
                                        defaultValue={repasValue} 
                                        onChange={handleSelectChange}
                                    />
                                </div>

                                <div className="buttons-container">
                                    <SimpleButton secondarybutton width="25%" onClick={onPrevious} disabled={step === 3}>
                                        Retour
                                    </SimpleButton>

                                    <SimpleButton primarybutton width="75%" onClick={onNext} disabled={step === 3}>
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

                                {
                                 ouvertures.length > 0 && ouvertures  ? 

                                 <div className="ouverture-container">
                                    {
                                        ouvertures.map((item, index) => {

                                        const parts = item.heure_ouverture.split(":"); // Séparer les parties heure, minute, seconde
                                     const formattedTime = `${parts[0]}:${parts[1]}`
                                         const partsTwo = item.heure_fermeture.split(":"); // Séparer les parties heure, minute, seconde
                                     const formattedTimetTwo = `${partsTwo[0]}:${partsTwo[1]}`
                                            return (
                                                <div key={index} className="ouverture-row">
                                                    <p className="ouverture-label">{item.Jour.lib}</p>
                                                    <div className="ouverture-row-actions">

                                                        {
                                                        item.statut == true ?

                                                        ""
                                                        :
                                                        <div className="time-inputs-container">
                                                        <div className="time-input-container">
                                                            <TimeInput 
                                                            
                                value={formattedTime}
                                                            

                                onChange={(e) => handleChangeTime(e.target.value, item.Jour.id, "ouverture")} />

                                            </div>
                                            <div className="time-input-container">

                                            <TimeInput
                                            value={formattedTimetTwo}
onChange={(e) => handleChangeTime(e.target.value, item.Jour.id, "fermeture")} />
                                                        </div>
                                                    </div>
                                                        }
                                                        
                                                        <div className="switch-container">
                                                            <p className="switch-label">Fermé</p>
                                                            <Toggle size={'sm'}

                                                        checked={item.statut}

                                            onChange={(checked, e) => handleChangeTime(checked, item.Jour.id, "statut")} />

                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                 : 
                                 <div className="ouverture-container">
                                    {
                                        ouvertureup.map((item, index) => {

                                        const parts = item.heure_ouverture.split(":"); // Séparer les parties heure, minute, seconde
                                     const formattedTime = `${parts[0]}:${parts[1]}`
                                         const partsTwo = item.heure_fermeture.split(":"); // Séparer les parties heure, minute, seconde
                                     const formattedTimetTwo = `${partsTwo[0]}:${partsTwo[1]}`
                                            return (
                                                <div key={index} className="ouverture-row">
                                                    <p className="ouverture-label">{item.Jour.lib}</p>
                                                    <div className="ouverture-row-actions">
                                                        {
                                                          item.statut == true ? 
                                                          ""
                                                          :

                                                          <div className="time-inputs-container">
                                                            <div className="time-input-container">
                                                                <TimeInput 
                                                                
                                    value={formattedTime}
                                                                

                                    onChange={(e) => handleChangeTime(e.target.value, item.Jour.id, "ouverture")} />

                                                </div>
                                                <div className="time-input-container">

                                                <TimeInput
                                                value={formattedTimetTwo}
 onChange={(e) => handleChangeTime(e.target.value, item.Jour.id, "fermeture")} />
                                                            </div>
                                                        </div>
                                                        }
                                                        

                                                        <div className="switch-container">
                                                            <p className="switch-label">Fermé</p>
                                                            <Toggle size={'sm'}

                                                        checked={item.statut}

                                            onChange={(checked, e) => handleChangeTime(checked, item.Jour.id, "statut")} />

                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                }

                                

                                <div className="buttons-container">
                                    <SimpleButton secondarybutton width="25%" onClick={onPrevious} disabled={step === 0}>
                                        Retour
                                    </SimpleButton>

                                    <SimpleButton primarybutton width="75%"
                                 onClick={() => { modifierResto(id_resto) }}
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
                                <h1>Modification réussi</h1>
                                <img className="img-success" src={imgSuccess} alt="" />
                                <div className="buttons-container">
                                    {/* <SimpleButton secondarybutton width="25%" onClick={handleClose}>
                                        Fermer
                                    </SimpleButton> */}

                                    <SimpleButton primarybutton width="75%"
                    // onClick={() => navigate(`/detailRestaurant/${id_resto}`)}
                             onClick={()=>{handleClose(); handleRefresh()}}>
                                        Fermer
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


