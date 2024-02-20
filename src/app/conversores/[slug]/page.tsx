"use client"

import Arrow from "@/components/Arrow";
import Header from "@/components/Header";
import InputConversor from "@/components/InputConversor";
import Resultado from "@/components/Resultado";
import SelectUnidade from "@/components/SelectUnidade";
import AppContainer from "@/containers/AppContainer";
import ConversorContainer from "@/containers/ConversorContainer";
import { FlexContainerCenter } from "@/containers/FlexContainer";
import useConversorReducer from "@/hooks/useConversorReducer";
import { useState } from "react";

function Conversor({ params }: { params: { slug: string } }) {

  const { nomesDasUnidades, abreviacaoDasUnidades } = useConversorReducer(params.slug)
  const [valor, setValor] = useState<string>()

  return (
    <AppContainer>
      <Header convertion={true} />
      <FlexContainerCenter>
        
        <h2>Converter {params.slug}</h2>

        <ConversorContainer>
          <div className="container">
            <label htmlFor="valor">Valor</label>
            <InputConversor 
              type="number" 
              name="valor" 
              id="valor"
              value={valor} 
              required={true}
              onChange={(e) => setValor(e.target.value)} 
              placeholder="Digite o valor a ser convertido"
            />
          </div>
            <div className="container">
              <label htmlFor="origem">Origem</label>
              <SelectUnidade
                name="origem"
                id="origem"
                arrayDeUnidades={nomesDasUnidades}
              />
            </div>
            <Arrow src="../../images/icons/light-theme/arrow.png" alt="arrow" />
            <div className="container">
            <label htmlFor="origem">Destino</label>
              <SelectUnidade
                name="destino"
                id="destino"
                arrayDeUnidades={nomesDasUnidades}
              />
            </div>
        </ConversorContainer>

        <ConversorContainer>
          <div className="container">
            <p>Resultado</p>
            <div>
              <Resultado>0</Resultado>
              <Resultado>metros</Resultado>
            </div>
          </div>
        </ConversorContainer>
      </FlexContainerCenter>
    </AppContainer>
  );
}

export default Conversor;
