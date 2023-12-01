const subniv6 = require('/ingenieria de sofware 2/next-project/src/app/mocks/SuscripcionNivel6.json')
import Beneficios from './Beneficios/Beneficios'
import Suscripcion from './Suscripcion/Suscripion'
import SuscripcionBoton from './SuscripcionBoton/SuscripcionBoton'

export default function Nivel6() {
    return (
        <>
            <Suscripcion {... subniv6}/>
            <Beneficios {... subniv6} />
            <SuscripcionBoton {... subniv6}/>
        </>
    )
}