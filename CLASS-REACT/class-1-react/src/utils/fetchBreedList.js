const fetchBreedList = async ({ queryKey }) => {
  // console.log("ANIMAL BREED", queryKey)

  const animal = queryKey[1];
  if (!animal) return [];
  const apiRes = await fetch(
    `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
  );

  if (!apiRes.ok) {
    throw Error(`Breed ${animal} fetch not ok`);
  }
  return apiRes.json();
};

export default fetchBreedList;
