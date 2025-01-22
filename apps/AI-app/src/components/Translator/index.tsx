import * as handpose from "@tensorflow-models/handpose";
import * as tf from "@tensorflow/tfjs";
import { useEffect, useState } from "react";
import LibrasTranslatorProps from "./LibrasTranslator.type";

function LibrasTranslator({ image }:LibrasTranslatorProps): JSX.Element {
  const [model, setModel] = useState<handpose.HandPose | null>(null);
  const [gesture, setGesture] = useState<string>("Carregando");

  useEffect(() => {
    const loadModel = async () => {
      try {
        await tf.setBackend("webgl");
        await tf.ready();
      } catch (error) {
        console.error(error);
      }

      const handposeModel = await handpose.load();
      setModel(handposeModel);
    };
    loadModel();
  }, []);

  useEffect(() => {
    const detectGesture = async () => {
      if(model && image) {
        const img = new Image();
        img.src = image;
        img.onload = async () => {
          const predictions = await model.estimateHands(img);
          
          if(predictions.length > 0) {
            setGesture("Gestos detectados")
          } else {
            setGesture("Nenhum gesto detectado");
          }
        }
      }
    }

    detectGesture();
  }, [image, model]);
  return (
    <p>
      Tradução: {gesture};
    </p>
  )
}
export default LibrasTranslator;
