import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Quote } from "lucide-react";

const AboutUs = () => {
  const features = [
    "Premium Ingredients",
    "Quality Assurance",
    "FSSAI Certified",
    "Authentic Recipes"
  ];

  return (
    <section id="about" className="py-16 bg-light">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-12">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-dark mb-4">About OmiFoods</h2>
            <p className="text-gray-600 mb-4">
              At OmiFoods, we are passionate about bringing authentic and delicious food products to your kitchen. 
              Founded with a vision to make quality ready-to-cook items easily accessible, we have been serving 
              customers with premium products made from fresh ingredients.
            </p>
            <p className="text-gray-600 mb-6">
              Our team of expert chefs carefully craft each recipe to ensure that the taste, texture, and aroma meet 
              the highest standards. We take pride in our quality control processes and commitment to food safety.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="text-primary mr-2 h-5 w-5" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
            
            <Link href="/contact">
              <Button className="inline-flex items-center bg-secondary hover:bg-secondary/90 text-white font-medium py-3 px-6 rounded-full shadow-md">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="OmiFoods kitchen" 
                className="rounded-lg shadow-lg"
              />
              {/* Overlay elements */}
              <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg max-w-xs">
                <div className="flex items-center mb-2">
                  <Quote className="text-primary text-xl mr-2" />
                  <h4 className="font-bold font-poppins text-dark">Our Mission</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  Bringing quality food to every home with convenience and authentic taste.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
