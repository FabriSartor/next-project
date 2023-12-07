"use client"

import Link from "next/link";

function ProductCard  ({productos}) {
  return (
    <div className="flex gap-[0.8rem] px-[45px]">       
      {
        productos.map(item =>{
          return(
            <Link href={item.link} className="w-full bg-white rounded-md overflow-hidden  hover:shadow-slate-350 hover:shadow-lg duration-300 my-[0.5rem]">
              <div className="flex justify-center h-[13rem] border-b border-gray-200 overflow-hidden">
                <img 
                  className="m-auto"
                  src={item.imagen}  />
              </div>
              <div className="flex flex-col h-[13rem] space-y-[9px] px-4">
                <span className=" text-sm  text-gray-500 mt-[0.85rem]">{item.titulo}</span>
                <div className="flex flex-col">
                  <span className="text-3xl">{item.precio}</span>
                  <span className="text-base">{item.cuotas}</span>
                </div>
                <span className="text-green-400">{item.envio}</span>
              </div>
            </Link>
          )
        })
      }
    </div>
  )
}

export default ProductCard;