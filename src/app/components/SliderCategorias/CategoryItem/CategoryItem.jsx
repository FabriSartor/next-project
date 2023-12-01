import Link from "next/link";

export default function CategoryItem({titulo, icon, link}){
    
    return (
        <Link href={link}>
            <div className="flex flex-col items-center text-meli-azul border-[1px] h-[9.55rem] bg-white border-bgmeli hover:bg-meli-azul hover:text-white w-[170.5px]">
                <span className=" mt-7 font-thin w-[2.7rem] h-6">{icon}</span>
                <span className=" pt-8 text-sm text-center ">{titulo}</span>
            </div>
        </Link>
    )
}