export default function Beneficios({beneficios, titulo}) {

    return (
        <div className="bg-white h-[25vh] flex flex-col justify-between">
            <h2 className=" ml-5 pt-5 text-lg font-medium">{titulo.titulo}</h2>
            <div className="flex flex-1">
                {
                    beneficios.map(item =>{
                        return(
                            <div className=" col-span-1 flex gap-4 items-center mx-auto">
                                <img src={item.icono} alt={item.link_texto} className="border border-gray-200 rounded-full" width={80} height={80}/>
                                <span className=" max-w-[11.5rem]">{item.titulo}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}