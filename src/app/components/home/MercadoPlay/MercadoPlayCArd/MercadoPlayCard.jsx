"use client"

import Link from "next/link"

export default function MercadoPlayCard ({video, icon}) {

    return(
        <div className=" h-[350px] ">
            {
                video.map(item => {
                    return (
                        <Link href={item.link}>
                            <div className=" h-[100%] flex  rounded-lg overflow-hidden"
                                style={{
                                    backgroundImage: `url(${item.fondo})`,
                                    backgroundSize: '100% 100%'
                                }}>
                                <div className=" h-[100%] w-[100%] flex items-end">
                                    <img src={item.icono} className=" w-20 h-20 rounded-lg ml-6 mb-6" alt="" srcset="" />
                                    <div className="flex flex-col mb-7 ml-5">
                                        <span className=" text-xl font-bold text-white w-[10rem]">{item.titulo}</span>
                                        <span className=" text-white mb-1">{item.tipo}</span>
                                        <span className=" text-xs font-medium text-white bg-green-600 w-[4.7rem] text-center flex justify-between items-center rounded-xl p-[0.35rem]">{icon}{item.gratis}</span>
                                    </div>
                                </div>
                                <div className="w-[600px] h-[100%] flex justify-end items-center ">
                                    <iframe className=" w-[540px] h-[300px] mr-6" src={item.video} title={item.title} frameborder={item.frameborder} allow={item.allow}></iframe>
                                </div>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}