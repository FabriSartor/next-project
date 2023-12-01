export default function Suscripcion({suscripcion}) {
    return (
        <div className="bg-gradient-to-r from-suscripcion1 to-suscripcion2  p-[1rem] rounded-t-md ">
            <div className=" flex justify-between items-center text-white">
                <span className="flex text-2xl ">{suscripcion.titulo}</span>
                <div className=" flex flex-col border-l-2 leading-3 w-35">
                    <span className=" line-through pl-[21px] mt-2">{suscripcion.precio_anterior}</span>   
                    <span className=" pl-5 text-2xl">{suscripcion.precio}</span>
                </div>
            </div>
        </div>
    )
}