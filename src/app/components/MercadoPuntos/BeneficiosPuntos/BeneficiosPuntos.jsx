"use client"

import Link from "next/link"

export default function BeneficiosPuntos ({beneficios}) {
    return (
        <div className="flex justify-between gap-3">
            {
                beneficios.map(item => {
                    return (
                        <Link href={item.link} className="flex items-end h-[250px] w-full rounded-md"
                        style={{
                            backgroundImage: `url(${item.fondo})`,
                            backgroundSize: '100% 100%',
                        }}>
                            <div className=" flex ml-7 mb-6 items-center">
                                <img src={item.logo} className=" w-[75px] h-[65px] rounded-md" alt="" srcset="" />
                                <div className=" flex flex-col ml-5">
                                    <span className=" text-xs text-white">{item.limit}</span>
                                    <span className=" text-xl font-bold text-white">{item.titulo}</span>
                                    <span className=" text-md text-white">{item.empresa}</span>                                    
                                </div>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}