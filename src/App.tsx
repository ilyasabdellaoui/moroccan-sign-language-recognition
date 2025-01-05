import { useState } from 'react';
import { RecognitionProvider } from './contexts/RecognitionContext';
import { Header } from './components/Layout/Header';
import { Hero } from './components/Landing/Hero';
import { RealTimeRecognition } from './components/Recognition/RealTimeRecognition';
import { VideoUpload } from './components/Recognition/VideoUpload';
import { TextToSign } from './components/Recognition/TextToSign';
import { Footer } from './components/Layout/Footer'; // Import the Footer

function App() {
  const [activeFeature, setActiveFeature] = useState<string | null>(null);

  const handleFeatureClick = (feature: string) => {
    setActiveFeature(feature);
  };

  const renderFeature = () => {
    switch (activeFeature) {
      case 'real-time':
        return <RealTimeRecognition />;
      case 'video-upload':
        return <VideoUpload />;
      case 'text-to-sign':
        return <TextToSign />;
      default:
        return null;
    }
  };

  return (
    <RecognitionProvider>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <Hero onFeatureClick={handleFeatureClick} />
        
        {/* Render the active feature */}
        {activeFeature && (
          <div id="features" className="py-12 px-4 sm:px-6 lg:px-8 flex-1 bg-white"> {/* Added bg-white */}
            <div className="max-w-4xl mx-auto space-y-8">
              {renderFeature()}
            </div>
          </div>
        )}

        {/* Add the Footer */}
        <Footer />
      </div>
    </RecognitionProvider>
  );
}

export default App;