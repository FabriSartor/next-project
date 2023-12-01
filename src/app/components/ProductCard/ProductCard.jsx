"use client"
import Link from "next/link";



function ProductCard  ({productos}) {

  return (
    <div className="flex gap-[0.6rem]">       
        {
          productos.map(item =>{
            return(
              <div className="bg-white rounded-md overflow-hidden w-[18rem] hover:shadow-slate-500 hover:shadow-md duration-300 my-[0.5rem]">
                <div className="flex justify-center h-[13rem] overflow-hidden">
                  <img 
                    className="m-auto"
                    src={item.imagen}  />
                </div>
                <div className="flex flex-col border-t mx-3 border-gray-200 h-[13rem] space-y-[9px]">
                  <Link href={item.link} className=" text-sm  text-gray-500 mt-[0.85rem]">{item.titulo}</Link>
                  <span className="text-3xl">{item.precio}</span>
                  <span className="text-base">{item.cuotas}</span>
                  <span className="text-green-400">{item.envio}</span>
                </div>
              </div>
            )
          })
        }
    </div>
    
  )
}

export default ProductCard;