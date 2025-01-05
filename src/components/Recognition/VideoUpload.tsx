import { Upload } from 'lucide-react';
import { useRecognitionContext } from '../../contexts/RecognitionContext';
import { Card } from '../ui/Card';

export const VideoUpload = () => {
  const { processVideo, isProcessing } = useRecognitionContext();

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      await processVideo(file);
    }
  };

  return (
    <Card className="w-full min-h-[300px] flex items-center justify-center">
      <input
        type="file"
        accept="video/*"
        onChange={handleUpload}
        className="hidden"
        id="video-upload"
      />
      <label 
        htmlFor="video-upload" 
        className="w-full h-full min-h-[200px] flex flex-col items-center justify-center gap-4 p-8 border-2 border-dashed border-purple-700/30 rounded-lg cursor-pointer hover:border-purple-700 hover:bg-purple-50/50 transition-all"
      >
        <Upload className="w-8 h-8 text-purple-700" />
        <span className="text-gray-600">
          {isProcessing ? 'Processing...' : 'Drop video here or click to upload'}
        </span>
      </label>
    </Card>
  );
};