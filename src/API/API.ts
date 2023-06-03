// API COMUNI E PAESI ITALIANI
const keyComuni:string= process.env.REACT_APP_KEY_COMUNI!
export const API_COMUNI:string = `http://api.geonames.org/searchJSON?country=it&lang=it&maxRows=1000&username=${keyComuni}`

// API METEO
const keyMeteo:string = process.env.REACT_APP_KEY_METEO!
export const API_METEO:string = `http://api.openweathermap.org/data/2.5/weather?APPID=${keyMeteo}&q=`
