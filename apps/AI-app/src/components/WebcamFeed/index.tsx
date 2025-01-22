import { useRef, useEffect } from "react";
import Webcam from "react-webcam";

type WebcamFeedProps = {
  onFrame: (image:string | null) => void;
}

function WebcamFeed({ onFrame }: WebcamFeedProps): JSX.Element {
  const webcamRef = useRef<Webcam>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if(webcamRef.current) {
        const imageSrc = webcamRef.current.getScreenshot();
        onFrame(imageSrc);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onFrame]);

  return (
    <Webcam 
      ref={webcamRef}
      screenshotFormat="image/jpeg"
      style={{width: "500px", height: "auto"}}
    />
  )
} 

export default WebcamFeed;
