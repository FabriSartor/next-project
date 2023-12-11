import MercadoPlayCard from "./MercadoPlayCArd/MercadoPlayCard";
const mercadoPlay = require('../../../mocks/mercadoplay.json')

export default function MercadoPlay () {
    return (
        <>
            <MercadoPlayCard {... mercadoPlay}/>
        </>
    )
}