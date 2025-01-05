import { createContext, useContext, useState, ReactNode } from 'react';
import { recognitionService } from '../services/recognitionService';

interface RecognitionContextType {
  isProcessing: boolean;
  recognitionResult: string;
  signResult: string;
  error: string;
  processFrame: (frame: string) => Promise<void>;
  processVideo: (video: File) => Promise<void>;
  convertTextToSign: (text: string) => Promise<void>;
}

const RecognitionContext = createContext<RecognitionContextType>({} as RecognitionContextType);

export const RecognitionProvider = ({ children }: { children: ReactNode }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [recognitionResult, setRecognitionResult] = useState('');
  const [signResult, setSignResult] = useState('');
  const [error, setError] = useState('');

  const processFrame = async (frame: string) => {
    try {
      setIsProcessing(true);
      const result = await recognitionService.processFrame(frame);
      setRecognitionResult(result);
    } catch (err) {
      setError('Error processing frame');
    } finally {
      setIsProcessing(false);
    }
  };

  const processVideo = async (video: File) => {
    try {
      setIsProcessing(true);
      const result = await recognitionService.processVideo(video);
      setRecognitionResult(result);
    } catch (err) {
      setError('Error processing video');
    } finally {
      setIsProcessing(false);
    }
  };

  const convertTextToSign = async (text: string) => {
    try {
      setIsProcessing(true);
      const result = await recognitionService.convertTextToSign(text);
      setSignResult(result);
    } catch (err) {
      setError('Error converting text');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <RecognitionContext.Provider
      value={{
        isProcessing,
        recognitionResult,
        signResult,
        error,
        processFrame,
        processVideo,
        convertTextToSign,
      }}
    >
      {children}
    </RecognitionContext.Provider>
  );
};

export const useRecognitionContext = () => useContext(RecognitionContext);