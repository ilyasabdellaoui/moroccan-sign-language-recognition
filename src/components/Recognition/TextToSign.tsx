import { useState } from 'react';
import { Type } from 'lucide-react';
import { useRecognitionContext } from '../../contexts/RecognitionContext';
import { Card } from '../ui/Card';

export const TextToSign = () => {
  const [text, setText] = useState('');
  const { convertTextToSign, signResult } = useRecognitionContext();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await convertTextToSign(text);
  };

  return (
    <Card>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full min-h-[150px] p-4 border border-purple-700/30 rounded-lg resize-y text-base transition-all focus:outline-none focus:border-purple-700 focus:ring-2 focus:ring-purple-700/10"
          placeholder="Enter text to convert to sign language..."
        />
        <button type="submit" className="btn-primary">
          <Type className="w-5 h-5 mr-2" />
          Convert to Sign
        </button>
      </form>
      {signResult && (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg text-gray-800">
          {signResult}
        </div>
      )}
    </Card>
  );
};