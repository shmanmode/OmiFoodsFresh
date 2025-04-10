import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="hero-pattern py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins text-white leading-tight">
              Fresh Forever
            </h1>
            <p className="text-xl md:text-2xl text-white font-light mt-2 mb-6">
              Make it the way you like it!
            </p>
            <p className="text-white opacity-90 mb-8 max-w-lg">
              Discover our range of premium quality food products made with fresh ingredients and authentic recipes. Perfect for quick meals, parties, or anytime cravings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products">
                <Button size="lg" className="bg-white text-primary hover:bg-opacity-90 font-semibold py-3 px-8 rounded-full shadow-lg">
                  Explore Products
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" className="bg-secondary text-white hover:bg-opacity-90 font-semibold py-3 px-8 rounded-full shadow-lg">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Main image */}
              <img
                src="https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=800&q=80"
                alt="OmiFoods signature momos"
                className="rounded-lg shadow-2xl w-full"
              />
              {/* Floating elements */}
              <div className="absolute -bottom-6 -left-6 bg-white p-3 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <i className="fas fa-leaf text-green-500 mr-2"></i>
                  <span className="font-poppins font-medium">Fresh Ingredients</span>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white p-3 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <i className="fas fa-fire text-primary mr-2"></i>
                  <span className="font-poppins font-medium">Ready to Cook</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
