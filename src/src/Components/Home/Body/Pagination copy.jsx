
import React, { useState } from "react";
import styled from "styled-components";
import { devices } from "../../../Theme/Devices";

// components 
import {Buttons} from '../Button/ButtonStyle/'
import { Type } from "../../CardInfo/CardInfo";


// react icones 
import { AiOutlineRight } from 'react-icons/ai';
import { AiOutlineLeft } from 'react-icons/ai';


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

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10; // Mettez ici le nombre total de pages

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

  return (
    <div>
      {/* Votre contenu de page ici */}

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
