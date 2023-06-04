// API COMUNI E PAESI ITALIANI
const keyComuni:string= process.env.REACT_APP_KEY_COMUNI!
export const API_COMUNI:string = `https://api.geonames.org/searchJSON?country=it&lang=it&maxRows=100&username=${keyComuni}`

// API METEO
const keyMeteo:string = process.env.REACT_APP_KEY_METEO!
export const API_METEO:string = `https://api.openweathermap.org/data/2.5/weather?APPID=${keyMeteo}&q=`
