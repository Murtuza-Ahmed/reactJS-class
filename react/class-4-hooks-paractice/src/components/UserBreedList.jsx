// import { useEffect, useState } from "react";
// const localCache = {};
// export default function UserBreedList() {
//   const [breedsList, setBreedList] = useState([]);
//   const [status, setStatus] = useState();

//   useEffect =
//     (() => {
//       requestBreedList();
//     },
//     []);

//   async function requestBreedList() {
//     const BreedListData = await fetch(
//       "https://pets-v2.dev-apis.com/pets?animal=dog&location=us"
//     );
//     let jsonListData = await BreedListData.json();
//     console.log(jsonListData);
//   }
// }
