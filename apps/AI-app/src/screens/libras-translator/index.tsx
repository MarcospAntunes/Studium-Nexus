import { useState } from "react"
import { LibrasTranslator, WebcamFeed } from "../../components";

function LibrasTranslatorScreen(): JSX.Element {
  const [currentFrame, setCurrentFrame] = useState<string | null>(null);

  return (
    <>
      <h1>Tradutor de Libras</h1>
      <WebcamFeed onFrame={(frame) => setCurrentFrame(frame)} />
      <LibrasTranslator image={currentFrame} />
    </>
  )
}

export default LibrasTranslatorScreen;
