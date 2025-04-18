
import React from 'react';
import { Check } from 'lucide-react';

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">Why Choose Vocacity?</h2>
        <p className="section-subtitle">
          Discover how our AI voice agents can transform your restaurant operations and enhance customer satisfaction.
        </p>
        
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Operational Benefits</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <span className="ml-3 text-gray-700">
                  <strong className="font-medium">Optimized Table Management</strong> — Fill cancellations quickly by automatically contacting waitlist customers & maximize table turnover by offering alternative time slots during peak hours
                </span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <span className="ml-3 text-gray-700">
                  <strong className="font-medium">Staff Preparation Notes</strong> — Create briefings for servers about incoming guests & alerts kitchen to prepare needs or timing requirements
                </span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <span className="ml-3 text-gray-700">
                  <strong className="font-medium">Customer Experience Advantages:</strong> — Faster service upon arrival along with guaranteed availability of favorite dishes
                </span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <span className="ml-3 text-gray-700">
                  <strong className="font-medium">Follow-up Opportunities</strong> — Identify opportunities for personalized marketing and note customers who expressed interest in future events
                </span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <span className="ml-3 text-gray-700">
                  <strong className="font-medium">Reduced errors</strong> — Eliminate human error in order taking and reservations
                </span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Competitive Advantages</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center mt-1">
                  <Check className="h-4 w-4 text-accent" />
                </div>
                <span className="ml-3 text-gray-700">
                  <strong className="font-medium">Enhanced customer experience</strong> — Personalized AI interactions that remember preferences
                </span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center mt-1">
                  <Check className="h-4 w-4 text-accent" />
                </div>
                <span className="ml-3 text-gray-700">
                  <strong className="font-medium">Upselling capabilities</strong> — Increase average order value with AI-powered recommendations
                </span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center mt-1">
                  <Check className="h-4 w-4 text-accent" />
                </div>
                <span className="ml-3 text-gray-700">
                  <strong className="font-medium">Data-driven insights</strong> — Leverage customer data for improved business decisions
                </span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center mt-1">
                  <Check className="h-4 w-4 text-accent" />
                </div>
                <span className="ml-3 text-gray-700">
                  <strong className="font-medium">Emotional intelligence</strong> — AI that understands and responds to customer emotions
                </span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center mt-1">
                  <Check className="h-4 w-4 text-accent" />
                </div>
                <span className="ml-3 text-gray-700">
                  <strong className="font-medium">Modern brand image</strong> — Position your restaurant as innovative and customer-focused
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
