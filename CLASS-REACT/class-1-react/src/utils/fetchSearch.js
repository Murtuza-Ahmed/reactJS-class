const fetchSearch = async ({ queryKey }) => {
  // console.log("FETCHSEARCH", queryKey)

  const { animal, location, breed } = queryKey[1];

  const apiRes = await fetch(
    `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  );
  // console.log("APIRES", apiRes)

  if (!apiRes.ok) {
    throw Error(`pets search not ok ${location} ${animal} ${breed}`);
  } else {
    return apiRes.json();
  }
};

export default fetchSearch;
