import axios from "axios";
import { API_COMUNI, API_METEO} from "../../API/API";

export namespace NameSpaceMeteo{
    export function fetchDatiMeteo(nomeCitta:string, setDatiMeteo:React.Dispatch<React.SetStateAction<any>>){
        axios.get(API_METEO+nomeCitta+"&lang=it")
                 .then(r => setDatiMeteo(r.data))
                 .catch(err => console.log(err))
    }

    export function fetchNomiComuni(setComuni:React.Dispatch<React.SetStateAction<any>>){
            axios.get(API_COMUNI)
                 .then(r => setComuni(r.data.geonames))
                 .catch(err => console.log(err))
    }
}