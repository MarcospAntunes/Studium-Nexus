"use client"

import { Card } from "..";
import { useRouter } from "next/navigation";
import UlStyled from "./List.style";
import { useSearch } from "../../hooks"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

function List(): JSX.Element {
    const router: AppRouterInstance = useRouter();
    const { filtredItens } = useSearch();

    return (
        <UlStyled role="navigation">
            {filtredItens.length > 0 ? filtredItens.map((item: any) => (
                <Card
                    key={item.id}
                    img={item.img}
                    title={item.title}
                    link={item.link}
                />

            )) : <li aria-live="assertive">Nenhum item encontrado!</li>}
            { }
        </UlStyled>
    )
}

export default List;