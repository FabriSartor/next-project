export default function TitulosHome({titulosHome, link, tituloLink}) {

    return (
        <div className="flex items-end text-left mb-5">
            <h1 className=" text-xl">{titulosHome}</h1>
            <a className=" text-base ml-3 text-meli-azul" href={link}>{tituloLink}</a>
        </div>
    )
}