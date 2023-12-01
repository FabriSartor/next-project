"use client"

export default function PaymentMethods ({metodos, accion}) {

    return (
        <>
            <div className=" m-auto bg-white p-4 rounded-sm shadow-sm">
                <div className="flex flex-1 justify-around">
                    {
                        metodos.map(item =>{
                            return(
                                <div className=" col-span-1 flex gap-2">
                                    <img src={item.icono} alt={item.link_texto} />
                                    <div className="flex flex-col">
                                        <span>{item.titulo}</span>
                                        <a className=" text-sm text-meli-azul" href={item.link}>{item.link_texto}</a>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div className="w-24 flex justify-end border-l border-gray-900">
                        <a href={accion.link}>
                            <img src={accion.icono} alt="icono" />
                        </a>
                    </div>
                </div>
                
            </div>
        </>
    )
}