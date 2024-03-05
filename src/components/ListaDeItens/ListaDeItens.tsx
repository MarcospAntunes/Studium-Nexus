import { Card } from "..";
import { useRouter } from "next/navigation";
import UlStyled from "./ListaDeItens.style";
import { useSearch } from "@/hooks";

function ListaDeItens(): JSX.Element {
    const router = useRouter();
    const { filtredItens } = useSearch();
    
    const handleClick = (title: string) => {
        router.push(`/conversores/${title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")}`)
    }

    return(
        <UlStyled role="navigation">
            {filtredItens.length > 0 ? filtredItens.map((item: any) => (
                <Card
                    key={item.id} 
                    img={item.img} 
                    title={item.title}
                    onClick={() => handleClick(item.title)}
                />

            )) : <li aria-live="assertive">Nenhum item encontrado!</li>}
            {}
        </UlStyled>
    )
}

export default ListaDeItens;