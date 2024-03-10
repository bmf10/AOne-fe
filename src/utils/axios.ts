import OgAxios from "axios"

const BASE_URL = process.env.NEXT_PUBLIC_API_URL

const axios = OgAxios.create({
  baseURL: BASE_URL,
})

export default axios
