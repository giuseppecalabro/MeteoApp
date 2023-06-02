// API COMUNI E PAESI ITALIANI

export const API_COMUNI:string = `http://api.geonames.org/searchJSON?country=it&lang=it&maxRows=1000&username=${process.env.KEY_COMUNI}`

// API METEO

export const API_METEO:string = `http://api.openweathermap.org/data/2.5/weather?APPID=${process.env.KEY_METEO}&q=`
