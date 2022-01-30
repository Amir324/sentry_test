
const URL = "https://zapari.any.do/birds"

export async function getBirds(records){
    const res = await fetch(`${URL}/${records}`)
    return res.json()
}