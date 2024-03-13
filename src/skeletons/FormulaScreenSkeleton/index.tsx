import FormulaScreenSkeletonSection from "./FormulaSkeleton.style";

function FormulaScreenSkeleton() {
    return(
        <>
            <FormulaScreenSkeletonSection>
                <h2/>
                <div className="inputsArea">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <p className="formulaArea" />
                <div className="buttonArea">
                    <div />
                    <div />
                </div>
            </FormulaScreenSkeletonSection>
            <FormulaScreenSkeletonSection>
                <br />
                <h2 />
                <div className="bigTextArea">
                    <p />
                    <p />
                    <p />
                    <p />
                    <p />
                    <p />
                    <div className="imgArea">
                        <div/>
                    </div>
                    <p />
                    <p />
                </div>
                
                <h2 />
                <div className="bigTextArea">
                    <p />
                    <p />
                    <div className="imgArea">
                        <div/>
                    </div>
                    <p />
                    <p />
                    <p />
                </div>
            </FormulaScreenSkeletonSection>  
        </>
    )
}

export default FormulaScreenSkeleton;