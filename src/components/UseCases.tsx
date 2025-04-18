
import React from 'react';
import { Calendar, MessageSquare, Phone, ShoppingCart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const UseCases: React.FC = () => {
  return (
    <section id="use-cases" className="py-16 md:py-24 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">Use Cases in Restaurants</h2>
        <p className="section-subtitle">
          See how Vocacity can be implemented across different restaurant operations to improve efficiency and customer experience.
        </p>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-l-4 border-l-primary">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Phone Order Taking</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Vocacity efficiently handles takeout orders, guiding customers through menu options, confirming details, processing payments, and providing pickup instructions — all while upselling relevant add-ons.
              </CardDescription>
              <div className="mt-6 text-sm text-gray-600">
                <p className="font-medium text-gray-700 mb-2">Customer example:</p>
                <p className="italic border-l-2 border-gray-300 pl-3">
                  "I'd like to order a large pizza with pepperoni and mushrooms."
                </p>
                <p className="mt-2 font-medium text-gray-700 mb-2">Vocacity response:</p>
                <p className="italic border-l-2 border-primary pl-3">
                  "Great choice! Would you like to add our special garlic knots for just $3.99? They pair perfectly with your pizza."
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-l-4 border-l-primary">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Reservation Management</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Vocacity handles table reservations seamlessly, checking availability, collecting customer information, and sending confirmation details. It can also manage changes and cancellations without staff intervention.
              </CardDescription>
              <div className="mt-6 text-sm text-gray-600">
                <p className="font-medium text-gray-700 mb-2">Customer example:</p>
                <p className="italic border-l-2 border-gray-300 pl-3">
                  "I'd like to reserve a table for four people this Friday at 7 PM."
                </p>
                <p className="mt-2 font-medium text-gray-700 mb-2">Vocacity response:</p>
                <p className="italic border-l-2 border-primary pl-3">
                  "I can help with that. We have availability at 7 PM. Would you prefer a standard table or a booth by the window? Also, would you like to know about our Friday special tasting menu?"
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-l-4 border-l-primary">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Customer Relationship Building</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Remembering customer preferences and past orders,recognizing birthdays and anniversaries,informing regulars about menu items they might enjoy,providing personalized recommendations based on dining history & maintaining communication with VIP customers.
              </CardDescription>
              <div className="mt-6 text-sm text-gray-600">
                <p className="font-medium text-gray-700 mb-2">Customer example:</p>
                <p className="italic border-l-2 border-gray-300 pl-3">
                  "Do you have any gluten-free options on your menu?"
                </p>
                <p className="mt-2 font-medium text-gray-700 mb-2">Vocacity response:</p>
                <p className="italic border-l-2 border-primary pl-3">
                  "Yes, we offer several gluten-free options. Our specialty gluten-free pasta, cauliflower crust pizzas, and all of our grilled entrées can be prepared gluten-free. Would you like me to email you our complete allergen menu?"
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-l-4 border-l-primary">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <ShoppingCart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Feedback Collection</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Vocacity proactively collects customer feedback through outbound calls or during interactions, gathering valuable insights to improve operations and customer satisfaction.
              </CardDescription>
              <div className="mt-6 text-sm text-gray-600">
                <p className="font-medium text-gray-700 mb-2">Vocacity outreach:</p>
                <p className="italic border-l-2 border-primary pl-3">
                  "Hi, this is Vocacity from Luigi's Restaurant. We hope you enjoyed your meal last night. Do you have a moment to share your experience with us?"
                </p>
                <p className="mt-2 font-medium text-gray-700 mb-2">Customer response:</p>
                <p className="italic border-l-2 border-gray-300 pl-3">
                  "The food was excellent, but we waited a bit long for our appetizers."
                </p>
                <p className="mt-2 font-medium text-gray-700 mb-2">Vocacity follow-up:</p>
                <p className="italic border-l-2 border-primary pl-3">
                  "Thank you for that feedback. We'll share this with our kitchen staff to improve timing. Would you like to receive a coupon for a free appetizer on your next visit?"
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
