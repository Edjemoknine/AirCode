import axios from "axios"
const options = {

	headers: {
		'X-RapidAPI-Key': '6c2a704035mshed3f3f412f5f9aap1c236bjsnbaf789e00c56',
		'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
	}
}
// eslint-disable-next-line no-unused-vars
export const getAllData =async(page=1)=>{
    const response=await axios.get(`https://anime-db.p.rapidapi.com/anime?page=${page}&size=8`,options)
    const data=await response.data
   return data

}
export const getDetail =async(animId)=>{
    const response=await axios.get(`https://anime-db.p.rapidapi.com/anime/by-id/${animId}`,options)
    const data=await response.data
   return data

}

