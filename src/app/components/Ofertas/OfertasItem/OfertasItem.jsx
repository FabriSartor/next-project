"use client"

import Link from "next/link"

export default function OfertasItem ({ofertas}) {
    return (
        <div className="flex h-[240px] justify-between ">
            {
                ofertas.map(item =>{ 
                    return (
                        <Link href={item.link} className=" flex flex-row bg-white rounded-md overflow-hidden h-[100%] w-[580px] hover:shadow-lg hover:shadow-gray-400 duration-200">
                            <div className="flex flex-col my-auto ml-6 space-y-3">
                                <span className=" text-sm tracking-wider text-gray-500">{item.titulo}</span>
                                <span className=" text-2xl font-extrabold leading-6 my-1 w-[14rem] mr-6">{item.texto}</span>
                                <span className=" bg-meli-azul py-2 w-28 text-center rounded-md hover:bg-blue-700 duration-300 text-white">{item.boton}</span>
                            </div>
                            <div className="w-[70%]">
                                <img  src={item.imagen} className=" w-[100%] h-[100%]" alt="" />
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}