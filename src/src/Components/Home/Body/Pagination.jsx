import React, { useState } from "react";
import styled from "styled-components";
import { devices } from "../../../Theme/Devices";
import {Buttons} from"../Button/ButtonStyle"
import { AiOutlineLeft,AiOutlineRight } from 'react-icons/ai'


const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

 
  @media ${devices.tablet} { 
      padding: 12px 16px;
      font-size: 12px;
   }

    @media ${devices.laptop} { 
      padding: 12px 16px;
      font-size: 12px;
      gap: 8px;
      
   }
`;


const PaginationText = styled.span`
  font-family: Roboto;
font-size: 16px;
font-weight: 400;
color: #F05801;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;


 
  @media ${devices.tablet} { 
      padding: 12px 16px;
      font-size: 12px;
   }

    @media ${devices.laptop} { 
      padding: 12px 16px;
      font-size: 12px;
      gap: 8px;
      
   }
`;

const Pagination = ({ currentPage, totalPages, onPrevPage, onNextPage }) => {
  return (
    <PaginationContainer>
      {currentPage > 1 && (
        <Buttons vertical='12px' horizontal='16px' color='#FFFFFF' onClick={onPrevPage}><AiOutlineLeft size={20}/><span>Précédent</span> </Buttons>
      )}
      <PaginationText>Page 

        <span
        style={{border : '1px solid #F05801', padding : '12px', borderRadius: '4px'}}
        >{currentPage}</span> 

          sur {totalPages}
      </PaginationText>
      
      {currentPage < totalPages && (
         <Buttons vertical='12px' horizontal='16px' color='#FFFFFF' onClick={onNextPage}> <span>Suivant</span>  <AiOutlineRight size={20}/></Buttons>
        
      )}
    </PaginationContainer>
  );
};

const Page = ({ data }) => { // Passer les données en tant que propriété
  const itemsPerPage = 5; // Nombre d'éléments par page
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Obtenir les données à afficher sur la page courante
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageData = data.slice(startIndex, endIndex);

  return (
    <div>
      {/* Afficher les données paginées */}
      {currentPageData.map(item => (
        // Afficher les données de chaque élément, remplacez cela par votre propre affichage
        <div key={item.id}>{/* Votre affichage ici */}</div>
      ))}

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPrevPage={handlePrevPage}
        onNextPage={handleNextPage}
      />
    </div>
  );
};

export default Page;
