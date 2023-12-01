"use client";
import React, { useEffect, useState } from "react";
import ListItem from "../../list-item/ListItem"; 
import MaxWidth from "../Shader componen/MaxWidth/MaxWidth";

export default function ItemsPage ({searchParams}) {
    //empieza la carga del componente
    const [resultado, setResultado] = useState([]);

    useEffect( () => {
        fetch (`https://api.mercadolibre.com/sites/MLA/search?q=${searchParams.q}&limit=25`)
        .then (res => res.json())
        //termina el pedido de la API
        .then (data => {
            setResultado(data.results);
        })

    } , [] );

    console.log(resultado);
    return (
        <MaxWidth>
            <div className=' pt-10 mx-auto'>
                <ul className="bg-white">
                    { resultado.map( (item) => <ListItem key={item.id} {... item}/>) }
                </ul>
            </div>
        </MaxWidth>
    )
}