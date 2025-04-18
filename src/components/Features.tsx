import React from 'react';
import { Clock, Code, LineChart, MessageCircle, Phone, Settings } from 'lucide-react';

const features = [
  {
    id: 1,
    icon: <Phone className="h-10 w-10 text-primary" />,
    title: "24/7 Call Handling",
    description: "Never miss a call. Vocacity handles customer inquiries around the clock, regardless of staff availability.",
  },
  {
    id: 2,
    icon: <MessageCircle className="h-10 w-10 text-primary" />,
    title: "Human-like Voice",
    description: "Natural conversations with emotional intelligence that make customers feel heard and understood.",
  },
  {
    id: 3,
    icon: <LineChart className="h-10 w-10 text-primary" />,
    title: "Advanced Analytics",
    description: "Track customer preferences, peak calling times, and gain insights to optimize your operations.",
  },
  {
    id: 4,
    icon: <Code className="h-10 w-10 text-primary" />,
    title: "Upselling and Cross-selling",
    description: "Suggest premium menu options based on customer preferences and promote seasonal specials or chef's recommendations during confirmation calls.",
  },
  {
    id: 5,
    icon: <Settings className="h-10 w-10 text-primary" />,
    title: "Pre-order Functionality",
    description: "Adding pre-order functionality to your reservation system is an excellent way to reduce no-shows while increasing operational efficiency.",
  },
  {
    id: 6,
    icon: <Clock className="h-10 w-10 text-primary" />,
    title: "Simultaneous Calls",
    description: "Handle multiple customer calls at once, eliminating hold times and lost business.",
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="bg-gray-50 py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">Key Features</h2>
        <p className="section-subtitle">
          Vocacity brings cutting-edge AI voice technology to your restaurant, revolutionizing customer service and operational efficiency.
        </p>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="feature-card group"
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
