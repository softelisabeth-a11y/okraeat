// styled comonents
import { ContainerHeader } from "./HeaderStyle";
import { useNavigate } from "react-router-dom";

// components
import { Image } from "../Images/ImageStyle";
import { Buttons } from "../Button/ButtonStyle";
import Add from "../../../../assets/Home/svg/Add";

// images

import Img from "../../../../assets/Home/png/logo.png";

// --------------Importation modal------
import RestaurantModal from "../RestaurantModal/RestaurantModal";
import React, { useState, useLayoutEffect } from "react";
import { Cookies } from "react-cookie";

function Header() {
  
  const cookies = new Cookies();
  const valeurDuCookie = cookies.get("userInfo");

  useLayoutEffect(() => {
    valeurDuCookie;
  }, [valeurDuCookie]);

  //modal restaurant
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const logout = () => {
    cookies.remove("userInfo");
    window.open("http://localhost:5000/okraeat/face/logout", "_self");
  };
  const navigation = useNavigate();
  return (
    <ContainerHeader>
      <Image src={Img} width={89} height={46} />

      <div className="container_button">
        <Buttons onClick={handleShowModal}>
          <Add />
          <span>Ajoutez un restaurant</span>
        </Buttons>

        {/* <div className="profil" onClick={logout}>
          <span>
            {valeurDuCookie
              ? valeurDuCookie.nom.slice(0, 2).toUpperCase()
              : navigation("/")}
          </span>
        </div> */}
      </div>

      <RestaurantModal show={showModal} handleClose={handleCloseModal} />
    </ContainerHeader>
  );
}

export default Header;
