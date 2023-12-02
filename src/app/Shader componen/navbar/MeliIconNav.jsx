import Link from "next/link"
import Image from "next/image"

export default function MeliIconNav () {
  return (
    <>
        <Link href='/' className=" mr-8">
            <Image className="object-contain" src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/6.4.1/mercadolibre/logo__large_plus.png" width={134} height={34} alt="logo"/>
        </Link>
    </>
  )
}
