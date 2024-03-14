type renderBhaskaraExplanationProps = {
    a: number | string
    b: number | string
    delta: number | undefined
}

function RenderBhaskaraExplanation({ a, b, delta }: renderBhaskaraExplanationProps): JSX.Element | undefined {
    if(typeof a === 'number' && typeof b === 'number' && delta !== undefined) {
        const deltaRoot: number = Math.sqrt(delta)
        if(delta === 0 ) {
            return (
                <>
                    <li>
                        Neste caso, terá apenas uma raíz que devemos calcular da seguinte forma:
                        <div className="formulaContent">
                            <span className="container">
                                x = 
                                <p className="fraction">
                                    <span className="denominator"> -({b})</span><span className="divider">2.{a}</span>
                                </p>
                            </span>
                        </div>
                    </li>
                    <li>
                        Com isso, obtemos o valor da raíz única que é: 
                        <p className="formulaContent">x = {-b /(2*a)}</p>
                    </li>
                </>
            )
        }

        if(delta > 0) {
            const x1 = (-b + deltaRoot) / (2 * a);
            const x2 = (-b - deltaRoot) / (2 * a);
            return (
                <>
                    <li>
                        Neste caso, terá <strong>duas raízes</strong> que devemos calcular da seguinte forma: 
                        <div className="formulaContent">
                            <p className="fraction">
                                <br />
                                <span>Calcular a primeira raíz</span> <br />
                                <span className="denominator">
                                    <span>x<sub>1</sub></span> = -({b}) + {deltaRoot}
                                </span>
                                <span className="divider">2.{a}</span>
                            </p>
                        </div>
                        <br />
                        <p className="formulaContent">
                            <span>x<sub>1</sub> = {x1}</span>
                        </p>
                        <div className="formulaContent">
                            <p className="fraction">
                                <br />
                                <span>Agora calculamos a segunda</span> <br />
                                <span className="denominator">
                                    <span>x<sub>2</sub></span> = -({b}) - {deltaRoot}
                                </span>
                                <span className="divider">2.{a}</span>
                            </p>
                        </div>
                        <br />
                        <p className="formulaContent">
                            <span>x<sub>2</sub> = {x2}</span>
                        </p>
                    </li>
                    <li>
                        Com isso concluimos que o resultado da equação possui duas raízes que são:
                        <p className="formulaContent">
                            <span>x<sub>1</sub> = {x1}</span> &nbsp; e &nbsp;
                            <span>x<sub>2</sub> = {x2}</span>
                        </p>
                    </li>
                </>
            )
        }
    }
}

export default RenderBhaskaraExplanation;