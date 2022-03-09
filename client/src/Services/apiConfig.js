import axios from "axios"

const baseUrl = "https://athletic-performance-index.herokuapp.com/"

export const api = axios.create({
  baseURL: baseUrl,
})
