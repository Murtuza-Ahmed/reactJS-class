import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query"; //  useQuery jis ki madad se API call hoga
import ftechPet from "../utils/fetchPet"; //  yaha se API call hoga
import Carousel from "../components/Carousel";
import ErrorBoundry from "../components/ErrorBoundry";
import Modal from "../components/Modal";

const Detail = () => {
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const result = useQuery(["details", id], ftechPet); //  (useQuery 2 chiz input leta he) 1- ARRAY me (API) ki information leta he 2- ye wo function leta he jis me ham phele array ki information pass karte hn
  // console.log("Response API Result", result);

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
        <Carousel images={pet.images} />
        <div>
          <h1>{pet.name}</h1>
          <h2>{`${pet.animal} — ${pet.breed} — ${pet.city}, ${pet.state}`}</h2>
          {/* <button>Adopt {pet.name}</button> */}
          <button onClick={() => setShowModal(true)}>Adopt {pet.name}</button>;
          <p>{pet.description}</p>
          {
            showModal ? (
              <Modal>
                <div>
                  <h1>Would you like to adopt {pet.name}?</h1>
                  <div className="buttons">
                    <button>Yes</button>
                    <button onClick={() => setShowModal(false)}>No</button>
                  </div>
                </div>
              </Modal>
            ) : null // you have to remove this semi-colon, my auto-formatter adds it back if I delete it
          }
        </div>
      </div>
    </>
  );
};

export default function DetailsErrorBoundry(props) {
  return (
    <ErrorBoundry>
      <Detail {...props} />
    </ErrorBoundry>
  );
}
