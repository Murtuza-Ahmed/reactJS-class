import React from "react";
import { useState, useEffect } from "react";
import Pet from "./Pet";
import useBreedList from "./useBreedList";
import Results from "./Results";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [location, updateLocation] = useState("");
  // let locationArr = useState("");
  // let location = locationArr[0];
  // let setLocation = locationArr[1];

  const [animal, updateAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const [breeds] = useBreedList(animal);

  useEffect(() => {
    requestPets();
  }, []);

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();

    setPets(json.pets);
  }

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        {/* LOCATION */}
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => updateLocation(e.target.value)}
          />
        </label>
        {/* ANIMALS */}
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              updateAnimal(e.target.value);
              setBreed("");
            }}
            onBlur={(e) => {
              updateAnimal(e.target.value);
              setBreed("");
            }}
          >
            {/* <option /> */}
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        {/* BREEDS */}
        <label htmlFor="breed">
          Breed
          <select
            disabled={!breeds.length}
            id="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            onBlur={(e) => setBreed(e.target.value)}
          >
            <option />
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
      <Results pets={pets} />
      {/* {pets.map((pet, i) => (
        <Pet
          key={i}
          name={pet.name}
          animal={pet.animal}
          breeds={pet.breed}
          id={pet.id}
        />
      ))} */}
    </div>
  );
};

export default SearchParams;

/**
 * HELP USE QUERY
 */

// import { useQuery } from "@tanstack/react-query";
// import fetchSearch from "./fetchSearch";
// // import Pet from "./Pet";
// import useBreedList from "./useBreedList";
// import Results from "./Results";
// import { useState } from "react";
// const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

// const SearchParams = () => {
//   const [animal, setAnimal] = useState("");

//   // const [pets, setPets] = useState([]);
//   const [breeds] = useBreedList(animal);
//   const [requestParams, setRequestParams] = useState({
//     location: "",
//     animal: "",
//     breeds: "",
//   });
//   console.log("REAQUESTPARAMS", requestParams);
//   const result = useQuery(["search", requestParams], fetchSearch);
//   console.log("RESULT", result);
//   const pet = result?.data?.pets ?? [];
//   console.log("PET", pet);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     const obj = {
//       location: formData.get("location") ?? "",
//       animal: formData.get("animal") ?? "",
//       breeds: formData.get("breed") ?? "",
//     };
//     setRequestParams(obj);
//   };

//   return (
//     <div className="search-params">
//       <form onSubmit={handleSubmit}>
//         {/* LOCATION */}
//         <label htmlFor="location">
//           Location
//           <input id="location" placeholder="Location" name="location" />
//         </label>
//         {/* ANIMALS */}
//         <label htmlFor="animal">
//           Animal
//           <select
//             id="animal"
//             value={animal}
//             name="animal"
//             onChange={(e) => {
//               setAnimal(e.target.value);
//             }}
//             onBlur={(e) => {
//               setAnimal(e.target.value);
//             }}
//           >
//             {/* <option /> */}
//             {ANIMALS.map((animal) => (
//               <option key={animal} value={animal}>
//                 {animal}
//               </option>
//             ))}
//           </select>
//         </label>
//         {/* BREEDS */}
//         <label htmlFor="breed">
//           Breed
//           <select disabled={!breeds.length} id="breed" name="breed">
//             <option />
//             {breeds.map((breed) => (
//               <option key={breed} value={breed}>
//                 {breed}
//               </option>
//             ))}
//           </select>
//         </label>
//         <button>Submit</button>
//       </form>
//       <Results pets={pet} />
//     </div>
//   );
// };

// export default SearchParams;
