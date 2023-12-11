"use client"

import Link from "next/link"

export default function MercadoPlayCard ({video, icon}) {

    return(
        <div className=" h-[350px]">
            {
                video.map(item => {
                    return (
                        <Link href={item.link} className=" h-[100%] flex  rounded-lg overflow-hidden"
                        style={{
                            backgroundImage: `url(${item.fondo})`,
                            backgroundSize: '100% 100%'
                        }}>
                            <div className=" h-[100%] w-[100%] flex flex-col ml-10 justify-center">
                                <span className=" text-3xl font-semibold leading-10 text-white">{item.titulo}</span>
                                <span className=" text-3xl leading-10 font-semibold text-white">{item.titulo_secundario}</span>
                                <span className=" text-xs font-medium text-white bg-green-600 w-[55px] text-center flex justify-center items-center rounded-xl p-[0.3rem] mt-3">{item.gratis}</span>
                                <span className=" text-sm text-white p-2 flex items-center justify-center w-[150px] rounded-md bg-white bg-opacity-20 h-8 mt-5 font-semibold">{item.button}</span>
                            </div>
                            <div className="w-[100%] h-[100%] flex justify-end items-center ">
                                <iframe className=" w-[500px] h-[300px] mr-6 rounded-lg" src={item.video} title={item.title} frameborder={item.frameborder} allow={item.allow}></iframe>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}