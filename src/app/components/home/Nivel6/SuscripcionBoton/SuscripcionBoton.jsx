function SuscripcionBoton ({boton})  {

  return (
    <div className=" rounded-b-md flex items-center justify-end bg-white border-t border-gray-300 py-[1rem]">
      <a className=" bg-meli-azul hover:bg-blue-800 duration-300 text-white rounded-md py-[0.8rem] px-[1.3rem] mr-5" href={boton.link}>{boton.boton}</a>
    </div>
  )
}

export default SuscripcionBoton;