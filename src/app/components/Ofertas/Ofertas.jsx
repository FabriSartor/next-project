import OfertasItem from "./OfertasItem/OfertasItem"
const ofertasInformation = require('/ingenieria de sofware 2/next-project/src/app/mocks/ofertas.json')

export default function Ofertas () {
  return (
    <>
        <OfertasItem {... ofertasInformation}/>
    </>
  )
}
