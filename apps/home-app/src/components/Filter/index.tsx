/* eslint-disable @next/next/no-img-element */

"use client";

import FilterButtonStyled from "./FilterButton.style";
import SelectStyled from "./Select.style";
import { darkTheme, lightTheme } from "@studium-nexus/utils-commons";
import db from "@studium-nexus/components-commons/Menu/json/itens.json";
import { useSearch, useTheme } from "../../hooks";
import { useRef, useState } from "react";
import { StyleSheetManager } from "styled-components";

function Filter(): JSX.Element {
  const { theme } = useTheme();
  const { setFilter } = useSearch();
  const [isActive, setIsActive] = useState(false);
  const selectRef = useRef<HTMLSelectElement | null>(null);

  const options = db
    .map(({ type }) => {
      return type;
    })
    .reduce((acc: string[], current) => {
      if (!acc.includes(current)) {
        acc.push(current);
      }

      return acc;
    }, []);

  const openSelect = () => {
    setIsActive(!isActive);
    if (selectRef.current) {
      selectRef.current.focus();
      selectRef.current.size = selectRef.current.options.length;
    }
  };

  return (
    <>
      <FilterButtonStyled
        theme={theme === "dark" ? darkTheme : lightTheme}
        onClick={() => openSelect()}
      >
        <img src="/icons/filter-icon.png" alt="Filter" />
      </FilterButtonStyled>
      <StyleSheetManager shouldForwardProp={(prop) => prop !== "isActive"}>
        <SelectStyled
          name="filter options"
          id="filter"
          title="Filter options"
          ref={selectRef}
          theme={theme === "dark" ? darkTheme : lightTheme}
          isActive={isActive.toString()}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="" defaultChecked>
            Todos
          </option>
          {options.map((value: string, index) => (
            <option key={index} value={value}>
              {value}
            </option>
          ))}
        </SelectStyled>
      </StyleSheetManager>
    </>
  );
}

export default Filter;
