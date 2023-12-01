"use client"

import Link from "next/link"

export default function MoulinexBody ({moulinex})  {
  return (
    <div className="h-[240px]">
        {
            moulinex.map(item =>{
                return (
                        <Link href={item.link}>
                            <div className=" flex flex-row rounded-md overflow-hidden">
                                <div className=" flex h-[240px] w-[60%] items-center" 
                                    style={{
                                        backgroundImage: `url(${item.fondo})`,
                                        backgroundSize: '100% 100%',
                                    }}>
                                    <img src={item.icono} className=" h-24 w-24 rounded-lg ml-20" alt="" />
                                </div>
                                <div className=" flex flex-col justify-center h-[240px] bg-bgmoulinex w-[40%] space-y-3 text-white pl-20">
                                    <span className=" font-light tracking-widest  ">{item.descuento}</span>
                                    <span className=" font-bold text-3xl  w-48">{item.titulo}</span>
                                    <span className="">{item.boton}</span>
                                </div>
                            </div>
                        </Link>
                )
            })
        }
    </div>
  )
}

