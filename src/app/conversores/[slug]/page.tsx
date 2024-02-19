"use client"

import Header from "@/components/Header";
import InputConversor from "@/components/InputConversor";
import SelectUnidade from "@/components/SelectUnidade";
import ConversorContainer from "@/containers/ConversorContainer";
import useConversorReducer from "@/hooks/useConversorReducer";
import { useState } from "react";

function Conversor({ params }: { params: { slug: string } }) {

  const { nomesDasUnidades, abreviacaoDasUnidades } = useConversorReducer(params.slug)
  const [valor, setValor] = useState<string>()

  return (
    <>
      <Header convertion={true} />
      <main style={{ 
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: "10px" 
      }}>
        <h2>Converter {params.slug}</h2>
        <ConversorContainer>
          <div>
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
          <SelectUnidade
            name="origem"
            id="origem"
            arrayDeUnidades={nomesDasUnidades}
          />
          <SelectUnidade
            name="destino"
            id="destino"
            arrayDeUnidades={nomesDasUnidades}
          />
        </ConversorContainer>
      </main>
    </>
  );
}

export default Conversor;
