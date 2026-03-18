import React, { useState, useEffect } from "react";

function Home() {
  const [location, setLocation] = useState(null);
  const [permissionGranted, setPermissionGranted] = useState(false);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          if (result.state === "granted") {
            setPermissionGranted(true);
            navigator.geolocation.getCurrentPosition(function (position) {
              setLocation({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
              });
            });
          } else if (result.state === "prompt") {
            setPermissionGranted(false);
          } else {
            setPermissionGranted(false);
            console.log("La géolocalisation n'est pas autorisée.");
          }
        });
    } else {
      console.log("La géolocalisation n'est pas prise en charge par votre navigateur.");
    }
  }, []);

  const requestLocationPermission = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
      setPermissionGranted(true);
    });
  };

  return (
    <div>
      <h1>Géolocalisation</h1>
      <p>
        Statut de la géolocalisation :{" "}
        {permissionGranted ? "Autorisé" : "Non autorisé"}
      </p>
      {permissionGranted && location && (
        <p>
          Latitude : {location.latitude}, Longitude : {location.longitude}
        </p>
      )}
      {!permissionGranted && (
        <button onClick={requestLocationPermission}>Demander la permission</button>
      )}
    </div>
  );
}

export default Home;
