import styled, { css } from "styled-components";
import { Toggle } from "rsuite";
import { devices } from "../../Theme/Devices";

export const ContainerDetailRestaurant = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: var(--primary-arrirePlan); */
`;

export const Header = styled.div`
  width: 84%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media ${devices.mobile} {
    width: 100%;
    padding: 8px;
  }

  @media ${devices.tablet} {
    /* width: 100% !important; */
  }


  @media screen and (max-width: 390px) {
    .container_left {
      width: 20%;
    }
  }

  @media screen and (min-width: 400px) and (min-width: 1280px) {
    .container_left {
      width: 20%;
    }
  }

  .container_left {
    width: 55%;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    cursor: pointer;
  }
  .texte_left {
    font-size: 12px;
    font-weight: 500;
    color: "#000000";
    margin-left: 8px;
    font-family:'Roboto','sans-serif';
  }
`;

export const ContainerDetail = styled.div`
  width: 84%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;


  @media ${devices.mobile} {
    width: 100%;
  }

 
`;
export const SousContainerDetail = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;

  @media ${devices.mobile} {
    margin-top: 10px;
  }

  /* @media screen and (max-width: 390px) {
    .creacteur_marge,.autre_creacteur_marge {
     display:none;
  }
  } */
`;
export const ContainerImageBg = styled.div`
  width: 100%;
  height: 231px;
  display: flex;
  flex-direction: row;
  justify-content: end;
  background: url(${(props) => props.imgurl});
  background-size: 100% 100%;
  background-repeat:no-repeat;
  border-radius: 12px;
   object-fit : cover;
  /* Debut media query */
  @media ${devices.mobile} {
    height: 150px;
    border-radius: 0;
    /* background-color: red; */
  }
  
  @media screen and (max-width: 390px) {
    .bloc_bouton_inactive {
      width: 66% !important;
      display: flex;
      flex-direction: row;
      justify-content: center;
    }

    .symbole_inactivite {
      width: 40% !important;
      display: flex;
      flex-direction: row;
      justify-content: start;
      align-items: center;
    }
    .icon_inactive {
      width: 18.27px !important;
      height: 18.31px !important;
      color: white;
      margin-right: 4.83px !important;
    }
    .texte_inactive {
      font-size: 14px !important;
      font-weight: 400 !important;
      color: white;
    }

    .container_bouton {
      width: 40%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: end;
      padding: 12px !important;
    }
    .texte_active {
      font-size: 12px !important;
      font-weight: 400 !important;
      margin-right: 8px !important;
      color: var(--primary-white);
    }
  }

  /* Fin media query */

  .bloc_bouton_inactive {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .symbole_inactivite {
    width: 20%;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
  }
  .icon_inactive {
    width: 24px;
    height: 24px;
    color: white;
    margin-right: 10px;
  }
  .texte_inactive {
    font-size: 16px;
    font-weight: 400;
    color: white;
    font-family:'Roboto','sans-serif';
  }
  .container_bouton {
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
    padding: 14px;
  }
  .texte_active {
    font-size: 16px;
    font-weight: 400;
    margin-right: 8px;
    color: var(--primary-white);
    font-family:'Roboto','sans-serif';
  }

  .rs-toggle-checked .rs-toggle-presentation {
    background-color: var(--primary-color);
  }
`;
export const StyledToggle = styled(Toggle)`
  cursor: pointer;
`;

export const BoutonRestaurant = styled.button`
  color: white;
  display: flex;
  padding: 4px;
  align-items: flex-start;
  border-radius: 4px;
  background: ${(props) => props.clr} ;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  font-family:'Roboto','sans-serif';
`;

export const ContainerInfoRestaurant = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
`;
export const ContainerNomPosition = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* Debut media query */
  @media ${devices.mobile} {
    width: 100%;
  }

  @media screen and (max-width: 390px) {
    .nom_vendeuse {
      font-size: 16px !important;
      margin-top: 8px !important;
      padding: 8px !important;
    }
    .container_info {
      display: flex;
      flex-direction: column !important;
      justify-content: start !important;
      align-items: center !important;
      padding-left: 8px !important;
     
    }
    .heure_ouverture_fermeture {
      width: 100% !important;
      display: flex !important;
      flex-direction: row !important;
      justify-content: start !important;
      margin-top: 8px !important;
    }
    .localisation {
      width: 100%;
      display: flex;
      flex-direction: row !important;
      justify-content: start !important;
      align-items: center !important;
      cursor: pointer;
    }
    .nbre_met_commentaire {
      padding-left: 8px !important;
      margin-top: 4px !important;
    }
  }

  /* Fin media query */

  .nom_vendeuse {
    font-size: 48px;
    font-weight: 700;
    margin-top: 18px;
    width: 100%;
    text-align: left;
    color: var(--primary-body);
    font-family:'Roboto','sans-serif';
  }

  .container_info {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
  }
  .localisation {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    margin-right: 8px;
    cursor: pointer;
  }
  .icon_localisation {
    width: 18px;
    height: 18px;
    margin-left: 8px;
    margin-right: 8px;
    color: var(--primary-body);
  }
  .texte_localisation {
    font-size: 16px;
    font-weight: 400;
    color: var(--primary-body);
    text-decoration: underline;
  }

  .heure_ouverture_fermeture {
    width: 35%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
  .icon_montre {
    width: 18px;
    height: 18px;
    color: var(--primary-body);
  }
  .heure_ouverture {
    font-size: 16px;
    font-weight: 400;
    margin-left: 8px;
    color: var(--primary-body);
    font-family:'Roboto','sans-serif';
  }
  .heure_fermeture {
    font-size: 16px;
    font-weight: 400;
    color: var(--primary-body);
    font-family:'Roboto','sans-serif';
  }
  .option_ouverture {
    font-size: 16px;
    font-weight: 400;
    margin-left: 8px;
    color: var(--primary-verte);
    font-family:'Roboto','sans-serif';
  }
  .nbre_met_commentaire {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: start;
    margin-top: 8px;
  }
  .nbre {
    font-size: 16px;
    font-weight: 400;
    margin-right: 8px;
    color: var(--primary-body);
    font-family:'Roboto','sans-serif';
  }
  .nbre_cmtaire {
    font-size: 16px;
    font-weight: 400;
    color: var(--primary-body);
    font-family:'Roboto','sans-serif';
  }
  .met {
    font-size: 16px;
    font-weight: 400;
    color: var(--primary-body);
    font-family:'Roboto','sans-serif';
  }
  .point {
    font-size: 18px;
    font-weight: 400;
    margin-left: 8px;
    margin-right: 8px;
    color: #ff0f49;
  }
  .commentaire {
    font-size: 16px;
    font-weight: 400;
    margin-left: 8px;
    margin-right: 8px;
    text-decoration: underline;
    color: var(--primary-body);
    font-family:'Roboto','sans-serif';
  }
`;
export const ContainerContactRestaurantLivreur = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* background-color: var(--primary-white); */
  margin-top: 30px;
  border-radius: 8px;
  border: 1px #f0f0f0 solid;

  /* Debut media query */
  @media ${devices.mobile} {
    width: 90% !important;
    margin-top: 10px !important;
    margin-left: 8px !important;
  }

  /* Fin media query */
`;
export const ContainerContactRestaurant = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px 8px;

  /* Debut media query */
  @media ${devices.mobile} {
    height: 100px !important;
  }

  @media screen and (max-width: 390px) {
    .icon_tel {
      width: 15.84px;
      height: 15.84px;
      margin-right: 8px;
    }
    .tel_number {
      font-size: 12px !important;
    }
    .distance {
      font-size: 10px !important;
    }
    .texte_livraison {
      font-size: 10px !important;
    }
  }

  /* Fin media query */
  .container_tel_nbre {
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: start;
  }
  .icon_tel {
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }
  .tel_number {
    font-size: 20px;
    font-weight: 600;
    color: var(--primary-body);
    font-family:'Roboto','sans-serif';
  }
  .distance {
    font-size: 18px;
    font-weight: 400;
    color: var(--primary-body);
    font-family:'Roboto','sans-serif';
  }
  .texte_livraison {
    font-size: 20px;
    font-weight: 500;
    color: #797979;
    font-family:'Roboto','sans-serif';
  }
`;
export const ContainerContactLivreur = styled.div`
  width: 48%;
  height: 99%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--primary-color);
  padding: 16px 8px;
  border-radius: 8px;

  /* Debut media query */
  @media ${devices.mobile} {
    height: 100px !important;
  }

  @media screen and (max-width: 390px) {
    .icon_tel1 {
      width: 15.84px !important;
      height: 15.84px !important;
    }
    .tel_number1 {
      font-size: 12px !important;
    }
    .temps_livraison {
      font-size: 10px !important;
    }
    .texte_livraison1 {
      font-size: 10px !important;
    }
  }

  /* Fin media query */
  .container_tel_nbre1 {
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: start;
  }

  .icon_tel1 {
    width: 20px;
    height: 20px;
    color: var(--primary-white);
    margin-right: 8px;
  }
  .tel_number1 {
    font-size: 20px;
    font-weight: 600;
    color: var(--primary-white);
    font-family:'Roboto','sans-serif';
  }
  .temps_livraison {
    font-size: 18px;
    font-weight: 400;
    color: var(--primary-white);
    font-family:'Roboto','sans-serif';
  }
  .texte_livraison1 {
    font-size: 20px;
    font-weight: 500;
    color: var(--primary-white);
    font-family:'Roboto','sans-serif';
  }
`;

export const ContainerPlatRestaurant = styled.div`
  border-bottom: 2px #f0f0f0 solid;
  width: 100%;
  margin-top: 30px;
  padding-bottom: 30px;

  .texte_menu_et_bouton {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: start;
  }
  .bouton_disparait_apparait {
    display: none !important;
  }
  .menu_complet {
    font-size: 22px;
    font-weight: 600;
    color: black;
    font-family:'Roboto','sans-serif';
  }
  /* Debut media query */
  @media ${devices.mobile} {
    margin-top: 11px !important;
    padding-left: 8px !important;
  }

  @media screen and (max-width: 390px) {
    .texte_menu_et_bouton {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between !important;
      align-items: center;
    }
    .bouton_disparait_apparait {
      display: flex !important;
      flex-direction: row !important;
      justify-content: flex-end !important;
      align-items: center !important;
    }
    .menu_complet {
      font-size: 14px !important;
    }
    .nom_vendeuse {
      font-size: 16px !important;
      margin-top: 8px !important;
      padding: 8px !important;
    }
  }

  /* Fin media query */
`;
export const ContainerCommentaire = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding-top: 10px;

  @media screen and (max-width: 390px) {
    .ce_que_gens {
    font-size: 16px !important;
    padding-left: 8px !important;
  }
  .etoil_com {
    padding-left: 8px !important;
  }
    
  }

  .ce_que_gens {
    font-size: 22px;
    font-weight: 600;
    color: black;
    font-family:'Roboto','sans-serif';
  }
  
  .nbre_commentaire {
    font-size: 14px;
    font-weight: 400;
    color: black;
    font-family:'Roboto','sans-serif';
  }
`;
