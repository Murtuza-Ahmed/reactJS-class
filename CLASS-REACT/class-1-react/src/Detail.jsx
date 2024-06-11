import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import ftechPet from "./fetchPet";

const Detail = () => {
  const { id } = useParams();
  const result = useQuery(["details", id], ftechPet); //  (useQuery 2 chiz input leta he) 1- ARRAY me (API) ki information leta he 2- ye wo function leta he jis me ham phele array ki information pass karte hn

  if (result.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🌀</h2>
      </div>
    );
  }
  const pet = result.data.pets[0];

  return (
    <>
      <div className="details">
        <div>
          <h1>{pet.name}</h1>
          <h2>{`${pet.animal} — ${pet.breed} — ${pet.city}, ${pet.state}`}</h2>
          <button>Adopt {pet.name}</button>
          <p>{pet.description}</p>
        </div>
      </div>
    </>
  );
};

export default Detail;
