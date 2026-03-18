import { GloblaStyles } from "./src/Theme/GobalStyle";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./src/Pages/Home/Home";
import Hero from "./src/Pages/Connexion/Hero";
import Login from "./src/Pages/Connexion/Login";
import DetailRestaurant from "./src/Pages/DetailRestaurant/DetailRestaurant";
import { useState, useEffect } from "react";
import axios from "axios";
import { Cookies } from "react-cookie";

function App() {
  const [user, setUser] = useState(null);

  // Définir un cookie avec une durée de validité de 24 heures
  const cookies = new Cookies();
  const expirationDate = new Date();

  // Effectue une requête GET vers la route /auth/login/success
  const reperationGoogle = () => {
    axios
      .get("http://localhost:5000/okraeat/auth/login/success", {
        withCredentials: true,
      })
      .then((response) => {
        setUser(response.data._json); // Met à jour les informations utilisateur
        ajouterRepasResto(response.data._json);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des informations utilisateur",
          error
        );
      });
  };

  const reperationFace = () => {
    axios
      .get("http://localhost:5000/okraeat/face/login/success", {
        withCredentials: true,
      })
      .then((response) => {
        setUser(response.data._json); // Met à jour les informations utilisateur
        ajouterRepasResto(response.data._json);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des informations utilisateur",
          error
        );
      });
  };

  useEffect(()=>{
    reperationGoogle();
    reperationFace();
  },[])
  
  // Ajout de repas

  const ajouterRepasResto = async (monUser) => {
    await axios

      .post("http://localhost:5000/okraeat//user", {
        nom: monUser.name,
        isEmail: monUser.email ? monUser.email : " ",
      })
      .then((res) => {
        // Définir un cookie avec une durée de validité de 24 heures
        const cookies = new Cookies();
        const expirationDate = new Date();
        // 24 heures en millisecondes
        expirationDate.setTime(expirationDate.getTime() + 24 * 60 * 60 * 1000);
        cookies.set("userInfo", res.data.data, {
          expires: expirationDate,
          path: "/",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  // Récupérer la valeur du cookie
  return (
    <BrowserRouter>
      <GloblaStyles />
      <Routes>
        <Route path="/home" Component={user ? Home : Login} />
        <Route
          path="/detailRestaurant/:id"
          Component={user ? DetailRestaurant : Login}
        />
        <Route path="/" Component={Hero} />
        <Route path="/login" Component={!user ? Login : Home} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
