import { Divider } from "@mui/material";

interface Props {
    datiMeteo: any;
    temperatura: number;
}

const VistaDati = (props: Props): JSX.Element => {

    return (
        <>
        <span className="my-5 bg-slate-400">
            <Divider/>
        </span>
        <div className="flex flex-col justify-center text-center">
            <p className="text-8xl">{props.datiMeteo && props.temperatura }°C </p> 
            <img src={props.datiMeteo && `https://openweathermap.org/img/wn/${props.datiMeteo.weather[0].icon}@4x.png`} alt="" />
            <p className="text-xl text-bold">Meteo: {props.datiMeteo && props.datiMeteo.weather[0].description}</p>
        </div>
        <span className="my-5 bg-slate-400">
            <Divider/>
        </span>
        </> 
    )
}

export default VistaDati

