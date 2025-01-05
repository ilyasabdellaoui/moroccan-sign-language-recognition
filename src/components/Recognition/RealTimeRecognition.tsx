import { useRef, useCallback } from 'react';
import Webcam from 'react-webcam';
import { Camera } from 'lucide-react';
import { useRecognitionContext } from '../../contexts/RecognitionContext';
import { Card } from '../ui/Card';

export const RealTimeRecognition = () => {
  const webcamRef = useRef<Webcam>(null);
  const { processFrame, recognitionResult } = useRecognitionContext();
  
  const handleCapture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      // Convert the imageSrc (data URL) to a Blob
      const byteString = atob(imageSrc.split(',')[1]);  // Get the binary data
      const arrayBuffer = new ArrayBuffer(byteString.length);
      const uint8Array = new Uint8Array(arrayBuffer);
      
      for (let i = 0; i < byteString.length; i++) {
        uint8Array[i] = byteString.charCodeAt(i);
      }
      
      // Create a Blob from the binary data (image)
      const blob = new Blob([uint8Array], { type: 'image/png' }); 
      const file = new File([blob], 'capture.png', { type: 'image/png' });

      processFrame(file);
    }
  }, [processFrame]);

  return (
    <Card className="relative w-full">
      <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-50">
        <Webcam
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          className="w-full h-full object-cover"
          videoConstraints={{
            facingMode: { ideal: 'environment' },
            width: { ideal: 1280 },
            height: { ideal: 720 }
          }}
        />
        {recognitionResult && (
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/70 text-white text-base sm:text-lg">
            {recognitionResult}
          </div>
        )}
      </div>
      <button 
        onClick={handleCapture}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 btn-primary"
      >
        <Camera className="w-5 h-5 mr-2" />
        Capture Sign
      </button>
    </Card>
  );
};