const fetchSearch = async ({ queryKey }) => {
    console.log("FETCHSEARCH", queryKey)

    const { location, animal, breed } = queryKey[1]

    const apiRes = await fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`)

    if (!apiRes.ok) {
        throw Error(`pets search not ok ${location} ${animal} ${breed}`)
    } else {
        return apiRes.json();
    }


}

export default fetchSearch