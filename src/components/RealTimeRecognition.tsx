import { useRef, useCallback } from 'react';
import Webcam from 'react-webcam';
import { Camera } from 'lucide-react';
import { useRecognitionContext } from '../contexts/RecognitionContext';
import { Card } from './ui/Card';

export const RealTimeRecognition = () => {
  const webcamRef = useRef<Webcam>(null);
  const { processFrame, recognitionResult } = useRecognitionContext();
  
  const handleCapture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      processFrame(imageSrc);
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
            facingMode: 'user',
            width: { ideal: 1280 },
            height: { ideal: 720 }
          }}
        />
        {recognitionResult && (
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/70 text-white text-lg">
            {recognitionResult}
          </div>
        )}
      </div>
      <button 
        onClick={handleCapture}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 px-6 py-3 bg-purple-700 text-white rounded-full font-medium hover:bg-purple-800 transition-colors"
      >
        <Camera className="w-5 h-5" />
        Capture Sign
      </button>
    </Card>
  );
};