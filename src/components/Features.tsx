import { RealTimeRecognition } from './Recognition/RealTimeRecognition';
import { VideoUpload } from './Recognition/VideoUpload';
import { TextToSign } from './Recognition/TextToSign';

export const Features = () => {
  return (
    <div className="space-y-16">
      <section id="real-time">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Real-time Recognition
        </h2>
        <RealTimeRecognition />
      </section>

      <section id="video-upload">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Video Upload
        </h2>
        <VideoUpload />
      </section>

      <section id="text-to-sign">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Text to Sign
        </h2>
        <TextToSign />
      </section>
    </div>
  );
};