"use client"

import { Card } from "..";
import UlStyled from "./List.style";
import { useSearch } from "../../hooks"

function List(): JSX.Element {
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
        </UlStyled>
    )
}

export default List;