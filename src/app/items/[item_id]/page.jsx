export default function ItemDescriptionPage({params}) {
    console.log(params)
    return (
        <div>
            <h1>{params.item_id}</h1>
        </div>
    )
}