import { useState, useEffect } from "react";
const Animals = ["bird", "cat", "dog", "rabbit", "reptile"];
const Breeds = [];
// console.log(Breeds);
function SearchParams() {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  // CONSOLE.LOG
  console.log(location);
  console.log(animal);
  console.log(breed);
  console.log(pets);
  // USE EFFECT (API CALL)
  useEffect(() => {
    requestPets();
  }, []);
  async function requestPets() {
    const response = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const data = await response.json();
    let actualData = data.pets;
    setPets(actualData);
    // console.log("Data", data.pets);
  }
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter Location"
          />
        </label>
        <label htmlFor="animal">
          <select
            name="animal"
            id="animal"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
          >
            {/* <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="rabbit">Rabbit</option> */}
            {Animals.map((item) => (
              <option value={item}>{item}</option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          <select
            name="breed"
            id="breed"
            disabled={!Breeds.length}
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          >
            {Breeds.map((item) => {
              return <option value={item}>{item}</option>;
            })}
          </select>
        </label>
        <h1>{location}</h1>
        <button>Submit</button>
      </form>
      <div>
        {pets.map((item) => {
          console.log("Pets! Item", item);
          return (
            <div>
              <h1>{item.name}</h1>
              <h2>{item.animal}</h2>
              <h3>{item.state}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SearchParams;
