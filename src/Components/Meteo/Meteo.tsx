import axios from "axios";
import React, { useState, useEffect} from "react";
import { API_COMUNI} from "../../API/API";
import { NameSpaceMeteo } from "../BL/BL";
import { Autocomplete, Button, Divider, TextField } from "@mui/material";
import VistaDati from "../VistaDati/VistaDati";


const Meteo = (): JSX.Element => {
    const [nomeCitta, setNomeCitta] = useState<string>("")
    const [comuni, setComuni] = useState<any[]>([])


    // useEffect(() => {
    //     axios.get(API_COMUNI)
    //          .then(r => setComuni(r.data.geonames))
    //          .catch(err => console.log(err))
    // }, []);

    useEffect(()=>{

        NameSpaceMeteo.fetchNomiComuni(setComuni)
    },[])

    const [datiMeteo, setDatiMeteo] = useState<any>()
    function gestisciClick(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        NameSpaceMeteo.fetchDatiMeteo(nomeCitta, setDatiMeteo);
    }
        
    const temperatura:number = datiMeteo && Math.round(datiMeteo.main.temp - 273.15)
    

    // Funzione per syncare il value del componente MateriaUI "Autocomplete" con il value del componente "TextField"
    const [selectedOption, setSelectedOption] = useState(null);
    function handleOptionSelect(event:any, value:any){
        if(value){
            setNomeCitta(value)
            setSelectedOption(value);
        }
    }
    console.log(nomeCitta)
    return (
        <>
        <div className="w-96 container mx-auto p-10 rounded-md glassed flex flex-col justify-center relative top-20">
           <label className="my-5 text-xl inline-block ">Scegli la città per vedere il meteo</label>
            <Autocomplete
                disablePortal
                // freeSolo={true}
                id="combo-box-demo"
                options={comuni && comuni.map((comune)=>comune.name)}
                value={selectedOption}
                onChange={handleOptionSelect}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField value={nomeCitta} onChange={(e)=>setNomeCitta(e.currentTarget.value)} {...params} label="Città" />}
            />
            <Divider/>
            <div className="my-3 text-center">
                {datiMeteo?
                <Button onClick={gestisciClick} variant="contained">Vedi altra città</Button> 

                :
                <Button onClick={gestisciClick} variant="contained">Scopri meteo</Button> 
                }
            </div>

            <aside className="text-xs">DISCLAIMER: Per il momento ci sono 100 città disponibili nella ricerca, puoi scrivere comunque la città anche se non c'è nelle opzioni </aside>
        
                
            {datiMeteo ?
            <VistaDati datiMeteo = {datiMeteo} temperatura={temperatura} />
            :
            <></>
            }
        </div>
        </>
    )
}

export default Meteo

