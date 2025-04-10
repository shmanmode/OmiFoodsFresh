import { Leaf, Medal, Utensils, Truck } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Leaf className="text-primary text-2xl" />,
      title: "Fresh Ingredients",
      description: "We use only the freshest ingredients in all our products."
    },
    {
      icon: <Medal className="text-primary text-2xl" />,
      title: "Premium Quality",
      description: "Quality control at every step to ensure the best products."
    },
    {
      icon: <Utensils className="text-primary text-2xl" />,
      title: "Ready to Cook",
      description: "Easy preparation with minimal effort for maximum taste."
    },
    {
      icon: <Truck className="text-primary text-2xl" />,
      title: "Quick Delivery",
      description: "Fast delivery to ensure products stay fresh to your doorstep."
    }
  ];

  return (
    <section className="py-16 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-dark">Why Choose OmiFoods</h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">We prioritize quality, freshness, and authentic flavors in every product</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 mx-auto bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold font-poppins text-dark mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
