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
            {detailResto.TypeRestaurant.lib}
            </BoutonRestaurant>
          <GrLocation className="icon_localisation" />{" "}
          <span className="texte_localisation">
            {detailResto.description}
          </span>
        </div>


        <div className="heure_ouverture_fermeture">
          <AiOutlineClockCircle className="icon_montre" />
      
          <span className="heure_ouverture">
             {ouvertureOuFermeture[0].heure_ouverture} 

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