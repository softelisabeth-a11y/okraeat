import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BsChevronLeft } from "react-icons/bs";
import { IoMdAddCircleOutline } from "react-icons/io";
import { FaRegEyeSlash } from "react-icons/fa";
import { PiPencilSimpleLineFill } from "react-icons/pi";
import { GrLocation } from "react-icons/gr";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsStarFill, BsFillTelephoneFill } from "react-icons/bs";
import UpdateModal from "../../Components/Home/RestaurantModal/UpdateModal";
import axios from "axios";
import { SpinnerCircular } from 'spinners-react';

import { Button } from "rsuite";

import { BoutonAjouter } from "../../Components/DetailRestaurant/Bouton/BoutonAjouterStyle";
import { BoutonModifier } from "../../Components/DetailRestaurant/Bouton/BoutonModifier";
import ImgRestaurant from "../../../assets/imgDetailRestaurant/img_restaurant.jpg";
import Slide from "./Slide/Slide";
import PlatRestaurant from "./PlatsRestaurant";
import Commentaires from "./commentaires";
// import Footer from "../../Components/DetailRestaurant/Footer/Footer";
import SelectListe from "../../Components/DetailRestaurant/SelectList/Select";

import {
  ContainerDetailRestaurant,
  Header,
  ContainerDetail,
  SousContainerDetail,
  ContainerImageBg,
  StyledToggle,
  ContainerInfoRestaurant,
  ContainerNomPosition,
  ContainerContactRestaurantLivreur,
  ContainerContactRestaurant,
  ContainerContactLivreur,
  ContainerPlatRestaurant,
  ContainerCommentaire,
  BoutonRestaurant,
} from "./DetailRestaurantStyle";

//Compoments
import RepasModal from "../../Components/DetailRestaurant/RepasModal/RepasModal";

function DetailRestaurant() {

  const navigate = useNavigate();

  const { id } = useParams();

  console.log("mon id", id)

  const data = ["Ouvert", "Fermé"].map((item) => ({
    label: item,
    value: item,
  }));

  const [idConnect, setIdConnect] = useState();
  
  // console.log("mon id", idConnect)

  // Fonction pour récupérer depuis le local storage
  const getFromLocalStorage = () => {

    const savedData = localStorage.getItem("id_user");
    if (savedData) {
      setIdConnect(JSON.parse(savedData));
    }
  };

  
  // acces update 
  const [acces, setAcces] = useState();


  const [repas, setRepas] = useState([]);
  const repasPopulaire = repas.filter((item) => item.populaire === true);
  // states modifiaction 
  const [id_resto, setId_resto] = useState();
  const [statut, setStatut] = useState();
  const [nom, setNom] = useState();
  const [imgUrl, setImgUrl] = useState();
  const [prix_min, setPrix_min] = useState();
  const [repasTwo, setRepasTwo] = useState([]);
  const [telephone, setTelephone] = useState();
  const [quart, setQuart] = useState();
  const [adresse, setAdresse] = useState();
  const [description, setDescription] = useState([]);
  const [typeResto, setTypeResto] = useState();
  const [options, setOptions] = useState([]);
  const [ouverture, setOuverture] = useState([]);


  const activeState = (item) => {

    setId_resto(item.id)
    setStatut(item.statut)
    setNom(item.nom)
    setImgUrl(item.img_url)
    setPrix_min(item.prix_min)
    setRepasTwo(item.Categories)
    setTelephone(item.telephone)
    setQuart(item.Quartier)
    setAdresse(item.adresse)
    setDescription(item.description)
    setTypeResto(item.TypeRestaurant)
    setOptions(item.Options)
    setOuverture(item.Ouvertures)
    setAcces(item.id_admin)
  }

  const changeData = (lib, data) => {

    if (lib == "ck") {
      setStatut(data)
    }

    if (lib == "photo") {
      setImgUrl(data)
    }

    if (lib == "nom") {
      setNom(data)
    }

    if (lib == "categorie") {
      setTypeResto(data)
    }

    if (lib == "numero") {
      setTelephone(data)
    }
    if (lib == "quartier") {
      setQuart(data)
    }
    if (lib == "adresse") {
      setAdresse(data)
    }

    if (lib == "description") {
      setDescription(data)
    }

    if (lib == "opt") {
      setOptions(data)
    }
    if (lib == "prix") {
      setPrix_min(data)
    }

  }
  //modal restaurant
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);



  //repas modal
  const [showRepasModal, setShowRepasModal] = useState(false);
  const handleCloseRepas = () => setShowRepasModal(false);
  const handleShowRepas = () => setShowRepasModal(true);

  //state detail restaurant
  const [detailResto, setDetailResto] = useState([]);

  // console.log("mon resto", detailResto)
  
  // //recuperation id et detail restaurant

  // const jsonString = localStorage.getItem("info");

  // // Convertissez la chaîne JSON en tableau JavaScript
  // const donneesRp = JSON.parse(jsonString);

  // console.log("mon local recup", donneesRp)

  let image = `http://localhost:5000/okraeat/file/${detailResto.img_url}`;



  const [loaderResto, setLoaderResto] = useState(false);

  const getDetailRestaurant = async () => {
    return new Promise((resolve, reject) => {
      setLoaderResto(true)
      axios
        .get("http://localhost:5000/okraeat//find_one_resto/"+id)
        .then((res) => {
          resolve(res.data.data);
        })
        .catch((error) => reject(error));
    });
  };


  // -------------------------commentaires-----------------------------------

  const [comt, setComt] = useState([]);
      
  const getCommentaire = async () => {
    return new Promise((resolve, reject) => {
      axios
        .get("http://localhost:5000/okraeat//get_commentaires")

        .then((res) => {
          resolve(res.data.data);

        })
        .catch((error) => reject(error));

    })
  };

  const destroyCommentaires = async (id_nt) => {


    axios
      .delete("http://localhost:5000/okraeat//delete_commentaires/" + id_nt)

      .then((res) => {
        console.log(res)
        handleRefresh()

      })
      .catch((error) => console.log(error));

  };
  // --------------------------------------------------------------------------

  const handleRefresh = () => {

    window.location.reload();
  };

  

  useEffect(() => {

    getDetailRestaurant()
      .then((r) => {
        setDetailResto(r);
        activeState(r)

        console.log("mon r", r)

        setLoaderResto(false)
         
      })
      .catch((e) => {
        console.error(e)
        setLoaderResto(false)
      });



      // console.log("mon r", r)
      // const donnees = JSON.stringify(r);

      // // Stockez la chaîne JSON dans le localStorage avec une clé appropriée
      // localStorage.setItem("info", donnees);

    getCommentaire()
      .then((r) => {
        setComt(r)
      })
      .catch((e) => console.error(e));

    getFromLocalStorage()
  }, []);

  const currentDate = new Date();
  const aujourdHui = currentDate.getDay();
  const jourDeSemaine = [
    "dimanche",
    "lundi",
    "mardi",
    "mercredi",
    "jeudi",
    "vendredi",
    "samedi",
  ];

  var ouvertureOuFermeture = [];

  for (const key in detailResto.Ouvertures) {
    if (detailResto.Ouvertures[key].Jour.lib === jourDeSemaine[aujourdHui]) {
      ouvertureOuFermeture.push(detailResto.Ouvertures[key]);
    }
  }
  // console.log("ouvertureOuFermeture",ouvertureOuFermeture)

  return (
     loaderResto  ?

      <SpinnerCircular size={57} thickness={131} speed={100} color="rgba(240, 88, 1, 1)" secondaryColor="rgba(172, 57, 57, 0.44)" style={{margin:"150px"}}/>
  
      :

    <ContainerDetailRestaurant>
      <Header>
        <div className="container_left" onClick={() => navigate("/home")}>
          <BsChevronLeft style={{ height: "20px", width: "20px" }} />
          <span className="texte_left">Retour</span>
        </div>

        <BoutonAjouter onClick={handleShowRepas}>
          <IoMdAddCircleOutline className="icon_ajout" />
          <span className="ajouter">Ajoutez un met</span>
        </BoutonAjouter>
      </Header>

      <ContainerDetail>
        {/* <div className='creacteur_marge'/> */}
        <SousContainerDetail>
          <ContainerImageBg imgurl={image}>
            <div className="bloc_bouton_inactive">
              <div className="symbole_inactivite">
                {detailResto.statut === true && (
                  <>
                    <FaRegEyeSlash className="icon_inactive" />

                    <span className="texte_inactive">Inactif</span>
                  </>
                )}
              </div>

              <div className="container_bouton">
                {
                
                // acces && acces 
                
                 idConnect == 3 ?

                  <BoutonModifier>
                    <PiPencilSimpleLineFill className="icon_modifier" />
                    <span className="texte_modifier" onClick={() => { handleShowModal() }}>Modifier</span>
                  </BoutonModifier>
                  :

                  ""}

                <div>
                  <span className="texte_active">Restaurant inactif</span>
                  <StyledToggle size="sm" />
                </div>
              </div>
            </div>
          </ContainerImageBg>

          <ContainerInfoRestaurant>
            <ContainerNomPosition>
              <span className="nom_vendeuse">{detailResto.nom}</span>
              <div className="container_info">
                <div className="localisation">
              
                  <BoutonRestaurant>  
                    {/* {detailResto.TypeRestaurant.lib} */}
                    </BoutonRestaurant>
                  <GrLocation className="icon_localisation" />{" "}
                  <span className="texte_localisation">
                    {/* {detailResto.description} */}
                  </span>
                </div>


                <div className="heure_ouverture_fermeture">
                  <AiOutlineClockCircle className="icon_montre" />
              
                  <span className="heure_ouverture">
                     {/* {ouvertureOuFermeture[0].heure_ouverture}  */}

                     </span>
                  
                  <span className="heure_ouverture">
                    {/* {ouvertureOuFermeture[0].heure_fermeture} */}
                    </span>
                  <SelectListe data={data} />
                </div>
              </div>
              <div className="nbre_met_commentaire">
                <span className="nbre">21 </span>
                <span className="met">mets</span>
                <span className="point">•</span>
                <BsStarFill
                  style={{
                    color: "#F05801",
                    height: "18px",
                    width: "18px",
                    marginRight: "8px",
                  }}
                />
                <span className="nbre_cmtaire">4.5</span>
                <span className="commentaire">(235 Commentaires)</span>
              </div>
            </ContainerNomPosition>

            <ContainerContactRestaurantLivreur>
              <ContainerContactRestaurant>
                <div className="container_tel_nbre">
                  <BsFillTelephoneFill className="icon_tel" />
                  <span className="tel_number">66-99-73-33</span>
                </div>
                <span className="distance">20 km</span>
                <span className="texte_livraison">Allez chercher</span>
              </ContainerContactRestaurant>

              <ContainerContactLivreur>
                <div className="container_tel_nbre1">
                  <BsFillTelephoneFill className="icon_tel1" />
                  <span className="tel_number1">{detailResto.telephone}</span>
                </div>
                <span className="temps_livraison">
                  50 - 60 minutes livraisons
                </span>
                <span className="texte_livraison1">Etre livrer</span>
              </ContainerContactLivreur>
            </ContainerContactRestaurantLivreur>
          </ContainerInfoRestaurant>

          <ContainerPlatRestaurant>
            <Slide populaire={repasPopulaire} />
            <div className="texte_menu_et_bouton">
              <p className="menu_complet">Menu Complets</p>
              <p className="bouton_disparait_apparait">
                <BoutonAjouter>
                  <IoMdAddCircleOutline className="icon_ajout" />
                  <span className="ajouter">Ajoutez un met</span>
                </BoutonAjouter>
              </p>
            </div>
            <PlatRestaurant id={id} />
          </ContainerPlatRestaurant>
          <ContainerCommentaire>
            <span className="ce_que_gens">Qu’endisent les genses</span>
            <p className="etoil_com">
              <BsStarFill
                style={{
                  color: "#F05801",
                  height: "15px",
                  width: "15px",
                  marginRight: "8px",
                }}
              />
              <span className="nbre_commentaire">4.5(235 Commentaires)</span>
            </p>

            {comt.length > 0 ?


              comt.map((item) => (
                     
               item.resto_id == id_resto ? 
                  <Commentaires item={item} src1={ImgRestaurant}
                  destroyCommentaires={destroyCommentaires}
                />
                    :

                    "Pas de commentaires"

               

              ))

              :

              <p>Pas de commentaires</p>
            }
          </ContainerCommentaire>
        </SousContainerDetail>
      </ContainerDetail>

      {/* repas modal */}
      <RepasModal show={showRepasModal} handleClose={handleCloseRepas} id={id} />



      <UpdateModal show={showModal} handleClose={handleCloseModal}

        id_resto={id_resto}
        statutup={statut}
        nomup={nom}
        imgUrlup={imgUrl}
        prix_minup={prix_min}
        repasup={repasTwo}
        telephoneup={telephone}
        quartierup={quart}
        adresseup={adresse}
        descriptionup={description}
        typeRestoup={typeResto}
        optionsup={options}
        ouvertureup={ouverture}
        changeData={changeData}
      />
    </ContainerDetailRestaurant>

  
  );


}

export default DetailRestaurant;
