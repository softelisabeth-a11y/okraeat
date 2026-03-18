import React, { useState, useEffect } from 'react';
import { Panel } from 'rsuite';

import axios from "axios";

import './CustomTabs.css'

// components 
import Select from '../../SelectListe/Select';
import Restautant from './Restautant';
import Page from './Pagination';
import Search from '../Seach/Search';
import { SpinnerCircular } from 'spinners-react';

// styles 
import { ContainerBodyHome } from "./BodyHomeStyle"
import { GreenSelect } from '../../SelectListe/GreenSelect';


function BodyHome() {

  const [loaderAff, setLoaderAff] = useState(false);
  const [loaderType, setLoaderType] = useState(false);
  

  const [typeResto, setTypeResto] = useState([]);

  const [activeTab, setActiveTab] = useState('tab0'); // Onglet actif par défaut

  const handleTabClick = (tabKey) => {

    setActiveTab(tabKey);
    if (tabKey == 'tab0') {

    } else { setPag(false) }
  };

  // données select liste 

  const resactif = [{ lab: 'Restaurant inactif', val: 'false' }, { lab: 'Restaurant actif', val: 'true' }].map(
    item => ({ label: item.lab, value: item.val })
  );


  const repas = ["Petit de jeûner", "Dejeûner", "Goûter", "Dîner"].map(
    item => ({ label: item, value: item })
  );


  const supinfo = ['Aller chercher', 'Service livraison', 'Salle à manger'].map(
    item => ({ label: item, value: item })
  );

  // stockage id 

  const [idConnect, setIdConnect] = useState(1);

  // Fonction pour stocker dans le local storage
  const saveToLocalStorage = () => {

    localStorage.setItem("userAdmin", JSON.stringify(idConnect));
  };



  // gestion backend 
  // crud

  const [listeResto, setListeResto] = useState([]);
  const [liste, setListe] = useState([]);

  const lg = liste.length

  // console.log('la liste', listeResto)

  const [tous, setTous] = useState([]);
  const [message, setMessage] = useState();

  

  // get liste resto 
  const getResto = async () => {
    return new Promise((resolve, reject) => {
      setLoaderAff(true)
      axios
        .get("http://localhost:5000/okraeat/listes_restaurants")
        .then((res) => {
          
          resolve(res.data.data)
        
        })
        .catch((error) => reject(error));
        
    })
  };


  const handleActifFilter = (x, y) => {


    if (x == 1) {

      if (y == "false") {

        const resul = liste.filter(item => item.statut === true)

        if (resul.length > 0) {
          setTous(resul)
          setMessage("")
        }
        else {
          setMessage("Aucun restaurant trouvé")
          setTous(resul)
        }



      }
      if (y == "true") {

        const resul = liste.filter(item => item.statut === false)

        if (resul.length > 0) {
          setTous(resul)
          setMessage("")
        }
        else {
          setMessage("Aucun restaurant trouvé")
          setTous(resul)
        }

      }
      if (y == null) {

        setTous(liste)
        setMessage("")

      }
    }

    if (x == 2) {

      if (y == "Petit de jeûner") {

        const resul = liste.filter(item =>
          item.Categories.some(cat => cat.lib === "Petit de jeûner")
        );

        if (resul.length > 0) {

          setTous(resul)
          setMessage("")
        }
        else {
          setMessage("Aucun restaurant trouvé")
          setTous(resul)
        }


      }
      if (y == "Dejeûner") {

        const resul = liste.filter(item =>
          item.Categories.some(cat => cat.lib === "Dejeûner")
        );
        if (resul.length > 0) {
          setTous(resul)
          setMessage("")
        }
        else {
          setMessage("Aucun restaurant trouvé")
          setTous(resul)
        }

      }
      if (y == "Goûter") {

        const resul = liste.filter(item =>
          item.Categories.some(cat => cat.lib === "Goûter")
        );

        if (resul.length > 0) {
          setTous(resul)
          setMessage("")
        }
        else {
          setMessage("Aucun restaurant trouvé")
          setTous(resul)
        }

      }
      if (y == "Dîner") {

        const resul = liste.filter(item =>
          item.Categories.some(cat => cat.lib === "Dîner")
        );

        if (resul.length > 0) {
          setTous(resul)
          setMessage("")
        }
        else {
          setMessage("Aucun restaurant trouvé")
          setTous(resul)
        }

      }
      if (y == null) {

        setTous(liste)
        setMessage("")

      }
    }



    if (x == 3) {

      if (y == "Aller chercher") {

        const resul = liste.filter(item =>
          item.Options.some(opt => opt.Proposer.statut === true && opt.lib == "Aller chercher")
        );

        if (resul.length > 0) {

          setTous(resul)
          setMessage("")
        }
        else {
          setMessage("Aucun restaurant trouvé")
          setTous(resul)
        }


      }
      if (y == "Service livraison") {

        const resul = liste.filter(item =>
          item.Options.some(opt => opt.Proposer.statut === true && opt.lib == "Service livraison")
        );
        if (resul.length > 0) {
          setTous(resul)
          setMessage("")
        }
        else {
          setMessage("Aucun restaurant trouvé")
          setTous(resul)
        }

      }
      if (y == "Salle à manger") {

        const resul = liste.filter(item =>
          item.Options.some(opt => opt.Proposer.statut === true && opt.lib == "Salle à manger")
        );

        if (resul.length > 0) {
          setTous(resul)
          setMessage("")
        }
        else {
          setMessage("Aucun restaurant trouvé")
          setTous(resul)
        }

      }

      if (y == null) {

        setTous(liste)
        setMessage("")

      }
    }

    if (x == 4) {

      if (y == "o") {

        const now = new Date();
        const currentDayIndex = now.getDay(); // Renvoie un chiffre de 0 (dimanche) à 6 (samedi)

        const index = currentDayIndex - 1

        let inter

        if (index >= 0) {
          inter = index
        } else {
          inter = Math.abs(index)
        }


        const resul = liste.filter(item => item.Ouvertures
          .some(ouv => ouv.Jour.id === inter && ouv.statut == false)
        );

        if (resul.length > 0) {

          setTous(resul)
          setMessage("")
        }
        else {
          setMessage("Aucun restaurant trouvé")
          setTous(resul)
        }


      }
      if (y == "f") {

        const now = new Date();
        const currentDayIndex = now.getDay(); // Renvoie un chiffre de 0 (dimanche) à 6 (samedi)

        const index = currentDayIndex - 1

        let inter

        if (index >= 0) {
          inter = index
        } else {
          inter = Math.abs(index)
        }

        const resul = liste.filter(item => item.Ouvertures
          .some(ouv => ouv.Jour.id === inter && ouv.statut == true)
        );

        if (resul.length > 0) {

          setTous(resul)
          setMessage("")
        }
        else {
          setMessage("Aucun restaurant trouvé")
          setTous(resul)
        }

      }

      if (y == "") {

        setTous(liste)

      }
    }

    if (x == 5) {

      const resul = listeResto.filter(item => item.id_qrt == y);



      setTous(resul)


    }

  }

  const [keyWord, setKeyWord] = useState('')

  const handleSearchResto = (value) => {

    setKeyWord(value)
    const objetsFiltres = listeResto.filter(objet => {
      return objet.nom.toLowerCase().includes(value.toLowerCase());
    });
    setTous(objetsFiltres)
  }

  const getTypeResto = async () => {
    
    return new Promise((resolve, reject) => {
      setLoaderType(true)

      axios
        .get("http://localhost:5000/okraeat/Types_restaurants")
        .then((res) => {
         
          resolve(res.data.data)
          
        })
        .catch((error) => reject(error));
       
    })
  };

  const tabListe = () => {

    return new Promise((resolve, reject) => {

      getResto()
        .then((rest) => {
          setListeResto(rest);
                   
          getTypeResto()
            .then((typ) => {

              let tabInter = []
              let cpt = 0
              typ.forEach(t => {

                const restos = rest.filter(item => item.type_id === t.id)

                const datas = { ...t, resto: restos, taille: restos.length }

                tabInter.push(datas)
                // console.log(datas.resto.length)

                cpt++
                if (typ.length === cpt) {
                  resolve(tabInter)
                }

              });

            })


        })
        .catch((e) => console.error(e));
    })
  }


  useEffect(() => {

    getTypeResto()
      .then((r) => {
       
        setTypeResto(r);
        setLoaderType(false)
      })
      .catch((e) =>{
        console.log(e)
        setLoaderType(false)
      });

    getResto()

      .then((res) => {
      
        setTous(res)
        setListe(res);
        setLoaderAff(false)
      })
      .catch((e) => {
        console.error(e)
        setLoaderAff(false)
      });

    tabListe()
      .then((l) => {

      })
      .catch((e) => console.error(e));
    saveToLocalStorage()
  }, []);


  return (
    <>
      <Search value={keyWord} onChangeOne={e => { handleSearchResto(e.target.value) }} handleActifFilter={handleActifFilter} />

      <ContainerBodyHome>

        <div className="container_filtre">
          <div className='tabs'>

            <div
              className={`custom-tab-res ${activeTab === 'tab0' ? 'active' : ''}`}
              onClick={() => handleTabClick('tab0')}
            >
              Tous({lg})
            </div>
            {
             loaderType  ?
               
               typeResto.map((item) => (

                <div
                  className={`custom-tab-res ${activeTab === `${item.id_typ + ''}` ? 'active' : ''}`}
                  onClick={() => handleTabClick(`${item.id_typ + ''}`)}
                  key={item.id_typ}
                >
                  {item.lib}({item.Restaurants.length})
                </div>
              ))

              :

              <SpinnerCircular size={30} thickness={131} speed={100} color="rgba(240, 88, 1, 1)" secondaryColor="rgba(172, 57, 57, 0.44)" style={{margin:"150px"}}/>

            }

            
          </div>

          <div className='container_select_liste'>

            <Select placeholder='Restaurant actif' width={130} data={resactif}
              onChange={(v) => handleActifFilter(1, v)} />

            <Select placeholder='Déjeuner' width={120} data={repas} onChange={(v) => handleActifFilter(2, v)} />

            <Select placeholder='Livraison incluse' width={140} data={supinfo} onChange={(v) => handleActifFilter(3, v)} />

            <GreenSelect onChange={(v) => handleActifFilter(4, v.target.value)}>

              <option value=" " >Filtrer</option>
              <option value="o" style={{color:"green"}}>Ouvert</option>
              <option value="f" style={{color:"red"}}>Fermé</option>

            </GreenSelect>

          </div>
        </div>

        {
          loaderAff ? 

          <SpinnerCircular size={57} thickness={131} speed={100} color="rgba(240, 88, 1, 1)" secondaryColor="rgba(172, 57, 57, 0.44)" style={{margin:"150px"}}/>

          :
<div className='container_food'>

{activeTab === 'tab0' &&


  <div className='filter_food_container'>

    {message}
    {

      tous.length > 0 && tous.map(item => (


        <Restautant key={item.id}
          item={item}
        />

      ))

    }
  </div>

}

{


  activeTab === "1" &&

  <div className='filter_food_container'>
    {message}
    {
      typeResto.map((item) => {

        // console.log(item)

        if (item.id_typ + '' == "1") {

          return tous.map((res) => {

            if (res.id_typ == item.id_typ) {

              return <Restautant key={res.id}
                item={res}
              />
            }


          })

        }
        return null;
      })
    }
  </div>
}


{

  activeTab === "2" &&

  <div className='filter_food_container'>

    {message}

    {
      typeResto.map((item) => {

        if (item.id_typ + '' == "2") {

          return tous.map((res) => {

            if (res.id_typ == item.id_typ) {

              return <Restautant key={res.id}
                item={res}
              />
            }


          })

        }
        return null;
      })
    }

  </div>

}
{

  activeTab === "3" &&
  typeResto.map((item) => {

    // console.log(item)

    if (item.id_typ + '' == "3") {

      return tous.map((res) => {

        if (res.id_typ == item.id_typ) {

          return <Restautant key={res.id}
            item={res}
          />
        }


      })

    }
    return null;
  })
}



</div>
        }

        



        <div className='footer_body'>
          <Page data={tous} />
        </div>



      </ContainerBodyHome>
    </>
  )
}

export default BodyHome
