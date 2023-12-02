import '../app/components/itemHearth/ItemHEarth.css'
import ImagenItem from "../app/components/ImagenItem/ImagenItem";
import ProductDescription from "../app/components/ItemInformation/ItemInformation";
import ItemHearth from "../app/components/itemHearth/ItemHearth";

export default function ListItem({permalink, thumbnail, title, price, currency_id, shipping, installments, condition, attributes }){
	return(
		<li>
			<div className="item flex p-4 border-t border-gray-200">
                <ImagenItem thumbnail={thumbnail} title={title}/>
                <ProductDescription permalink={permalink} attributes={attributes} thumbnail={thumbnail} title={title} price={price} currency_id={currency_id} shipping={shipping} installments={installments} condition={condition}/>
                <ItemHearth/>
			</div>
		</li>
	)
}