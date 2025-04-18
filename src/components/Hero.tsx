
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/5 z-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">AI Voice Agents</span> for Restaurants
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Vocacity handles phone orders, reservations, and customer inquiries
              with human-like voice interactions 24/7, so you can focus on what matters most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Started
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Features
              </Button>
            </div>
          </div>
          <div className="mt-12 md:mt-0 md:w-1/2 md:pl-12 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-primary to-secondary rounded-full opacity-10 animate-pulse-slow absolute top-0 left-0" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto bg-white rounded-full shadow-xl border border-gray-200 flex items-center justify-center p-4">
                <div className="flex flex-col items-center justify-center space-y-3">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-primary rounded-full animate-pulse" />
                  </div>
                  <div className="bg-gradient-to-r from-primary to-secondary h-2 w-32 rounded-full" />
                  <div className="bg-gradient-to-r from-primary to-secondary h-2 w-24 rounded-full opacity-75" />
                  <div className="bg-gradient-to-r from-primary to-secondary h-2 w-16 rounded-full opacity-50" />
                  <p className="text-sm text-center text-gray-600 font-medium mt-4">
                    "I'd like to place an order for pickup, please."
                  </p>
                  <div className="w-full h-px bg-gray-200" />
                  <p className="text-xs text-center text-primary font-medium">
                    Vocacity AI is responding...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
