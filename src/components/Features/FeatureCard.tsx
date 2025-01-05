import { ReactNode, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Card } from '../ui/Card';

interface FeatureCardProps {
  title: string;
  children: ReactNode;
}

export const FeatureCard = ({ title, children }: FeatureCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left"
      >
        <Card className="p-6 hover:bg-purple-50/50 transition-colors cursor-pointer">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
            <ChevronDown
              className={`w-6 h-6 text-gray-500 transition-transform ${
                isExpanded ? 'transform rotate-180' : ''
              }`}
            />
          </div>
        </Card>
      </button>
      
      {isExpanded && (
        <div className="mt-4 transition-all">
          {children}
        </div>
      )}
    </div>
  );
};