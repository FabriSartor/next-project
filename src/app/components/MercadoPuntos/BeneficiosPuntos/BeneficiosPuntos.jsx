"use client"

import Link from "next/link"

export default function BeneficiosPuntos ({beneficios}) {
    return (
        <div className="flex justify-between">
            {
                beneficios.map(item => {
                    return (
                        <Link href={item.link}>
                            <div className="flex items-end h-[280px] w-[24rem] rounded-md"
                                style={{
                                    backgroundImage: `url(${item.fondo})`,
                                    backgroundSize: '100% 100%',
                                }}>
                                <div className=" flex ml-7 mb-6">
                                    <img src={item.logo} className=" w-[75px] h-[65px] rounded-md" alt="" srcset="" />
                                    <div className=" flex flex-col ml-5">
                                        {
                                            item.limit && <span className=" text-gray-500 text-xs">{item.limit}</span> || <div className="leading-4"><br/></div>
                                        }
                                        <span className=" text-xl font-bold text-white">{item.titulo}</span>
                                        <span className=" text-md text-white">{item.empresa}</span>                                    
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}