import MeliDisney from "./navbar/MeliDisney"
import MeliForm from "./navbar/MeliForm"
import MeliIconNav from "./navbar/MeliIconNav"

export default function HeaderComponent() {
    return (
        <div className=" sticky top-0 z-50">
          <header className='w-full bg-meli'>
            <div className="max-w-[1200px] mx-auto py-2 flex items-center">
              <MeliIconNav/>
              <div className="w-full flex justify-between">
                <MeliForm/>
                <MeliDisney/>
              </div>
            </div>
          </header>
        </div>
    )
}