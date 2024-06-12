export default async function ftechPet({ queryKey }) {

    console.log("QUERY-KEY", queryKey)
    // return
    const id = queryKey[1];
    const apiRes = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`)

    if (!apiRes.ok) {
        throw Error(`details/${id} fetch not ok`)
    } else {
        return apiRes.json();
    }
};