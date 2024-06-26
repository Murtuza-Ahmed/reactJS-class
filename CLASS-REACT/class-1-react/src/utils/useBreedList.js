// import { useState, useEffect } from "react";

// const localCache = {};

// export default function useBreedList(animal) {
//     const [breedList, setBreedList] = useState([]);
//     const [status, setStatus] = useState("unloaded");

//     useEffect(() => {
//         if (!animal) {
//             setBreedList([]);
//         } else if (localCache[animal]) {
//             setBreedList(localCache[animal]);
//         } else {
//             requestBreedList();
//         }

//         async function requestBreedList() {
//             setBreedList([]);
//             setStatus("loading");
//             const res = await fetch(
//                 `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
//             );
//             const json = await res.json();
//             localCache[animal] = json.breeds || [];
//             setBreedList(localCache[animal]);
//             setStatus("loaded");
//         }
//     }, [animal]);

//     return [breedList, status];
// }

/**
 * HELP REACT QUERY
 */

import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "./fetchBreedList";

const useBreedList = (animal) => {
  const result = useQuery(["breeds", animal], fetchBreedList);

  // console.log("BREED_RESULT", result)
  return [result?.data?.breeds ?? [], result.status];
};

export default useBreedList;
