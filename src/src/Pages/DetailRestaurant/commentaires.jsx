import React, { useState, useEffect } from "react";
import { Rate } from "rsuite";
import { MdDelete } from "react-icons/md";
import { BsStarFill } from "react-icons/bs";
import styled, { css } from "styled-components";
import { devices } from "../../Theme/Devices";
import ImageResto from "../../../assets/imgDetailRestaurant/img_restaurant.jpg";

import axios from "axios";

function Commentaires({ item, src1, destroyCommentaires }) {

  return (
    <ContainerCommentaire>

      
      
     
      
        <div className="entete_commentaire">
          <span className="nom">{item.nom}l</span>
          <div className="suppression" onClick={()=>{destroyCommentaires(item.id_nt)}} style={{cursor:"pointer"}}>
            <MdDelete style={{ height: "26px", width: "26px" }} />
            <span className="texte_suppression">Supprimer</span>
          </div>
        </div>
        
        <p className="date_et_rate">
          <BsStarFill
            style={{
              color: "#F05801",
              height: "15px",
              width: "15px",
              marginRight: "6px",
            }}
          />
          <BsStarFill
            style={{
              color: "#F05801",
              height: "15px",
              width: "15px",
              marginRight: "6px",
            }}
          />
          <BsStarFill
            style={{
              color: "#F05801",
              height: "15px",
              width: "15px",
              marginRight: "6px",
            }}
          />
          <BsStarFill
            style={{
              color: "#F05801",
              height: "15px",
              width: "15px",
              marginRight: "6px",
            }}
          />
          <BsStarFill
            style={{
              color: "#F05801",
              height: "15px",
              width: "15px",
              marginRight: "6px",
            }}
          />
          <span className="points">•</span>
          <span className="dates">{item.dat_cm}</span>
        </p>
        <p className="commentaire">
          {item.commentaires}
        </p>

        {src1 && (
          <p className="liste_img">
            <div className="image">
              <img
                src={src1}
                alt="Image restaurant"
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: "4px",
                }}
              />
            </div>
            <div className="image">
              <img
                src={src1}
                alt="Image restaurant"
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: "4px",
                }}
              />
            </div>
            <div className="image">
              <img
                src={src1}
                alt="Image restaurant"
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: "4px",
                }}
              />
            </div>
          </p>
        )}

    </ContainerCommentaire>
  );
}

const ContainerCommentaire = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin-top: 20px;
  margin-bottom: 20px;

  @media ${devices.mobile} {
    
    padding:0px 8px 0px 8px !important; 
  }

  @media screen and (max-width: 390px) {
    

    .commentaire {
      line-height: 20px !important;
    }
    .liste_img {
    display: flex;
    flex-direction: row;
    justify-content: start;
    flex-wrap:wrap;
  }
    .image {
      display: flex;
      width: 118.5px !important;
      height: 100px !important;
    }
  }
.entete_commentaire{
  width:100%;
  display:flex;
  flex-direction:row;
  justify-content:space-between
}
  .sous_bloc_commentaire {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: start;
  }
  .nom {
    font-size: 16px;
    font-weight: 600;
    color: #020101;
    font-family:'Roboto','sans-serif';
  }
  .date_et_rate {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: start;
  }
  .points {
    font-size: 14px;
    font-weight: 400;
    margin-right: 8px;
    color: #ff0f49;
  }
  .dates {
    font-size: 12px;
    font-weight: 400;
    color: #000000;
    font-family:'Roboto','sans-serif';
  }
  .commentaire {
    font-size: 14px;
    font-weight: 400;
    color: #000000;
    line-height: 2px;
    font-family:'Roboto','sans-serif';
  }
  .liste_img {
    display: flex;
    flex-direction: row;
    justify-content: start;
  }
  .image {
    display: flex;
    width: 207px;
    height: 138px;
    padding: 8px 8px 8px 0;
  }
  .suppression {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .texte_suppression {
    font-size: 13px;
    font-weight: 600;
    color: #000000;
    font-family:'Roboto','sans-serif';
  }
`;
export default Commentaires;
