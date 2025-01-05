import { Languages, Camera, FileVideo, Type } from 'lucide-react';

interface HeroProps {
  onFeatureClick: (feature: string) => void;
}

const features = [
  {
    id: 'real-time',
    icon: Camera,
    title: 'Real-time Recognition',
    description: 'Instantly translate sign language using your camera'
  },
  {
    id: 'video-upload',
    icon: FileVideo,
    title: 'Video Processing',
    description: 'Upload and analyze pre-recorded sign language videos'
  },
  {
    id: 'text-to-sign',
    icon: Type,
    title: 'Text to Sign',
    description: 'Convert written text into sign language demonstrations'
  }
];

export const Hero = ({ onFeatureClick }: HeroProps) => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-4xl mx-auto px-4 pt-16 pb-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <Languages className="h-16 w-16 mx-auto text-purple-600 mb-6" />
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Moroccan Sign Language
          </h1>
          <p className="mt-3 max-w-md mx-auto text-xl text-gray-500 sm:text-2xl md:mt-5 md:max-w-3xl">
            Breaking communication barriers with advanced recognition technology
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.id}
              onClick={() => onFeatureClick(feature.id)}
              className="relative group cursor-pointer"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-200" />
              <div className="relative p-6 bg-white rounded-lg ring-1 ring-gray-900/5">
                <feature.icon className="h-8 w-8 text-purple-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};