
import React from 'react';
import { Star } from 'lucide-react';

type Testimonial = {
  id: number;
  company: string;
  logo: string;
  quote: string;
  author: string;
  position: string;
  stats: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    company: "Domino's Pizza",
    logo: "🍕",
    quote: "Voice Agents have revolutionized our phone order process. We've automated 75% of phone orders with near-zero errors, and the AI's ability to upsell has increased our average order value significantly.",
    author: "Michael Thompson",
    position: "Regional Manager",
    stats: "75% of phone orders automated with near-zero errors"
  },
  {
    id: 2,
    company: "Wingstop",
    logo: "🍗",
    quote: "Since implementing Voice Agents, we've seen a remarkable improvement in our phone order operations. 90% of orders are now handled by the AI, with significantly improved accuracy and speed.",
    author: "Jennifer Rodriguez",
    position: "Operations Director",
    stats: "90% phone orders automated with improved accuracy"
  },
  {
    id: 3,
    company: "Denny's",
    logo: "🍳",
    quote: "Voice Agents have transformed our reservation system. No-shows have decreased by 30% thanks to automated reminders, and customer feedback has been overwhelmingly positive about the ease of booking.",
    author: "Robert Chen",
    position: "Customer Experience Manager",
    stats: "30% reduction in no-shows with improved insights"
  }
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  return (
    <div className="testimonial-card">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-3xl">{testimonial.logo}</span>
          <h4 className="font-bold text-lg">{testimonial.company}</h4>
        </div>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
      </div>
      
      <p className="text-gray-700 italic mb-6">{testimonial.quote}</p>
      
      <div className="flex flex-col space-y-2">
        <div className="flex flex-col">
          <span className="font-medium text-gray-900">{testimonial.author}</span>
          <span className="text-sm text-gray-500">{testimonial.position}</span>
        </div>
        <div className="mt-4 bg-primary/10 px-3 py-2 rounded-md">
          <p className="text-sm font-semibold text-primary">{testimonial.stats}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">Success Stories</h2>
        <p className="section-subtitle">
          See how AI Voice Agents have helped restaurants transform their operations and improve customer experience.
        </p>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
