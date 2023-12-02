import Link from "next/link"
import Image from "next/image"

export default function HeaderComponent() {
    return (
        <div className=" sticky top-0 z-50">
          <header className='w-full bg-meli'>
            <div className="max-w-[1200px] mx-auto py-2 flex items-center">
              <Link href='/' className=" mr-8">
                <Image className="object-contain" src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/6.4.1/mercadolibre/logo__large_plus.png" width={134} height={34} alt="logo"/>
              </Link>
              <div className="w-full flex justify-between">
                <form className='w-[600px] flex ' action='/items'>
                  <input className='flex-1 p-3 px-6 shadow-md outline-none rounded-l-3xl' autoComplete='off' name='q' type="text" placeholder="Busca Productos, Marcas y Más..." />
                  <button className=' bg-white  shadow-md  border-l-slate-100 rounded-r-3xl hover:bg-gray-300 w-14 px-5'>
                    <svg viewBox="0 0 16 16">
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                  </button>
                </form>
                <a href="https://www.mercadolibre.com.ar/suscripciones/nivel-6#origin=banner-menu&me.position=0&me.bu_line=36&me.flow=-1&me.bu=9&me.audience=all&me.content_id=bannermenu_n6_generico_999&me.component_id=banner_menu_web_ml&me.logic=campaigns">
                  <img src="https://http2.mlstatic.com/D_NQ_957153-MLA69318147677_052023-OO.webp" className=" w-[350px]" alt="" />
                </a>
              </div>
            </div>
          </header>
        </div>
    )
}