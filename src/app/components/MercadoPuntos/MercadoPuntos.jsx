import BeneficiosPuntos from "./BeneficiosPuntos/BeneficiosPuntos"
const beneficiosPuntos = require('/ingenieria de sofware 2/next-project/src/app/mocks/mercado-puntos.json') 
export default function MercadoPuntos () {
    return (
        <BeneficiosPuntos {... beneficiosPuntos}/>
    )
}