import { useCurrencyConverter } from "@/app/utils/useCurrencyConverter"
import Link from "next/link";
import { useAttributes } from "@/app/utils/useGetAttribute";

export default function ProductDescription({permalink ,title, price, currency_id, shipping, installments, id, thumbnail, attributes}) {
	
	const { toCurrency } = useCurrencyConverter();
	const { free_shipping } = shipping;
	const { getAttributeValue }=  useAttributes(attributes);
	
	return(
		<div className="flex-1 ml-10">
			<div className='flex flex-col'>
				<span className="text-md font-bold">{getAttributeValue('BRAND')}</span>
				<Link href={permalink}>
					<h2 className="text-xl font-light mb-3 cursor-pointer max-w-3xl mt-2">{title}</h2>
				</Link>
				<span className="text-2xl">{ toCurrency(price, currency_id) }</span>					
				{
					installments && <span className=" tracking-wide mb-3">{ `En ${installments?.quantity} cuotas de: ${toCurrency(installments.amount,currency_id)}` }</span>
				}
				{
					free_shipping && <span className="text-green-500">Envío gratis</span>
				}
			</div>
		</div>
	)
}