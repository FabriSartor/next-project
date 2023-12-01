import Link from "next/link"

export default function HeaderComponent() {
    return (
        <div>
          <header className='w-full bg-meli'>
            <div className="max-w-screen-xl mx-auto p-[1.20rem] flex items-center">
              <Link href='/' className='px-5'>
                <img className="object-contain" src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/6.4.1/mercadolibre/logo__large_plus.png" width={134} height={34} alt="logo"/>
              </Link>
              <form className='w-full flex ' action='/items'>
                <input className='flex-1 p-3 px-6 shadow-md outline-none rounded-l-3xl' autoComplete='off' name='q' type="text" placeholder="Busca Productos, Marcas y Más..." />
                <button className=' bg-white  shadow-md  border-l-slate-100 rounded-r-3xl hover:bg-gray-300 w-14 px-5'>
                  <svg viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                  </svg>
                </button>
              </form>
            </div>
        </header>
      </div>
    )
}