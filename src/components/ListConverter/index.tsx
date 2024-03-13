import { Card } from "..";
import { useRouter } from "next/navigation";
import UlStyled from "./ListConverter.style";
import { useSearch } from "@/hooks";

function ListConverter(): JSX.Element {
    const router = useRouter();
    const { filtredItens } = useSearch();
    
    const handleClick = (title: string, type: string) => {
        router.push(`/${type}/${title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")}`)
    }

    return(
        <UlStyled role="navigation">
            {filtredItens.length > 0 ? filtredItens.map((item: any) => (
                <Card
                    key={item.id} 
                    img={item.img} 
                    title={item.title}
                    onClick={() => handleClick(item.title, item.type)}
                />

            )) : <li aria-live="assertive">Nenhum item encontrado!</li>}
            {}
        </UlStyled>
    )
}

export default ListConverter;