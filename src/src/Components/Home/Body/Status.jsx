import { useState } from 'react';
import { ContainerStatusResto } from './BodyHomeStyle'


// react icones 

import { MdRemove } from 'react-icons/md';

function Fermer({ etat, ouvertures, prix }) {

  // console.log("mon ouverture", ouvertures)

  // console.log("ouverture dans fermer", ouvertures)



  const now = new Date();
  const currentDayIndex = now.getDay(); // Renvoie un chiffre de 0 (dimanche) à 6 (samedi)
 
  const index = currentDayIndex - 1 

  let inter 

  if (index >= 0) {
           inter = index
  } else {
    inter = Math.abs(index)
  }

  let currentDay = ouvertures[inter];

  let jour;
  let heure;

   if (currentDay) {
    if ( !currentDay.statut) {
      // Le restaurant est ouvert aujourd'hui
      // console.log(`Le restaurant est ouvert aujourd'hui (${currentDay.Jour.lib}) jusqu'à ${currentDay.heure_fermeture}`);
      jour = currentDay.Jour.lib;
  
      heure = currentDay.heure_fermeture
  
    } else {
      // Le restaurant est fermé aujourd'hui, chercher le prochain jour d'ouverture
      let nextOpenDay = null;
      let nextOpenTime = null;
      let i = currentDayIndex;
  
      while (nextOpenDay === null) {
        if (i >= ouvertures.length) {
          i = 0;
        }
  
        if (!ouvertures[i].statut) {
          nextOpenDay = ouvertures[i].Jour.lib;
          nextOpenTime = ouvertures[i].heure_ouverture;
  
          jour =    ouvertures[i].Jour.lib.slice(0, 3).toUpperCase() ;
          // jour = ouvertures[i].Jour.lib;
  
          heure = ouvertures[i].heure_ouverture;
        }
  
        i++;
      }
  
      // console.log(`Le restaurant sera ouvert le prochain jour (${nextOpenDay}) à ${nextOpenTime}`);
    }
   }
  




  return (
    <ContainerStatusResto>



      {etat == 1 ?

        <>

          <span className="status">fermé</span>
          <MdRemove size={10} color="black" />
          <span className="status duree">indéfiniment</span>
          <span className="red_point"></span>
          <span className="status prix_mini">à partir de {prix} francs</span>




        </>
        :

        <>
{currentDay.statut  === false ?

            <>

              <span className="status" style={{ color: '#00972F' }}>Ouvert</span>
              <MdRemove size={10} color="black" />
              <span className="status duree">Jusqu'à {heure}</span>
              <span className="red_point"></span>
              <span className="status prix_mini">à partir de {prix} francs</span>



            </>
            :

            <>

              <span className="status">fermé</span>
              <MdRemove size={10} color="black" />
              <span className="status duree">Ouvre à {heure} {jour}</span>
              <span className="red_point"></span>
              <span className="status prix_mini">à partir de {prix} francs</span>
            </>

          }


        </>
      }
    </ContainerStatusResto>
  )
}

export default Fermer
