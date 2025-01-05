import { RecognitionProvider } from './contexts/RecognitionContext';
import { Header } from './components/Layout/Header';
import { Hero } from './components/Landing/Hero';
import { Features } from './components/Features';

function App() {
  return (
    <RecognitionProvider>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Hero />
        
        <div id="features" className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <Features />
          </div>
        </div>
      </div>
    </RecognitionProvider>
  );
}

export default App;