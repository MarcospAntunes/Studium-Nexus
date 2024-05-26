"use client";

import { Card } from "..";
import UlStyled from "./List.style";
import { useChangeLayoutContext, useSearch } from "../../hooks";
import { StyleSheetManager } from "styled-components";

function List(): JSX.Element {
  const { filtredItens } = useSearch();

  const { layout } = useChangeLayoutContext();

  return (
    <StyleSheetManager shouldForwardProp={(prop) => prop !== "layout"}>
      <UlStyled role="navigation" layout={layout?.toString()}>
        {filtredItens.length > 0 ? (
          filtredItens.map((item: any) => (
            <Card
              key={item.id}
              img={item.img}
              title={item.title}
              link={item.link}
            />
          ))
        ) : (
          <li aria-live="assertive">Nenhum item encontrado!</li>
        )}
      </UlStyled>
    </StyleSheetManager>
  );
}

export default List;
