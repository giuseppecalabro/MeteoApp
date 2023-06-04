// API COMUNI E PAESI ITALIANI
export const API_COMUNI:string = `/data/LISTA_COMUNI.json`


// API METEO
const keyMeteo:string = process.env.REACT_APP_KEY_METEO!

export const API_METEO:string = `https://api.openweathermap.org/data/2.5/weather?APPID=${keyMeteo}&q=`
