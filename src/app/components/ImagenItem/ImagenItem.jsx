export default function ImagenItem({ thumbnail, title }){
    return (
        <div>
            <img className=" w-40 h-40 object-contain" src={thumbnail} alt={title} />
        </div>
    )
}