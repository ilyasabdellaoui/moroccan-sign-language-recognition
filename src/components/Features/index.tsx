import { FeatureCard } from './FeatureCard';
import { RealTimeRecognition } from '../Recognition/RealTimeRecognition';
import { VideoUpload } from '../Recognition/VideoUpload';
import { TextToSign } from '../Recognition/TextToSign';

export const Features = () => {
  return (
    <div className="space-y-6">
      <FeatureCard title="Real-time Recognition">
        <RealTimeRecognition />
      </FeatureCard>

      <FeatureCard title="Video Upload">
        <VideoUpload />
      </FeatureCard>

      <FeatureCard title="Text to Sign">
        <TextToSign />
      </FeatureCard>
    </div>
  );
};