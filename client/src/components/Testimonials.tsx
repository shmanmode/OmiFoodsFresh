import { useQuery } from "@tanstack/react-query";
import { Testimonial } from "@shared/schema";
import { Card, CardContent } from "@/components/ui/card";
import { Star, StarHalf } from "lucide-react";

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  const { name, location, rating, comment, initials, avatarColor } = testimonial;
  
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="fill-accent text-accent" />);
    }
    
    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" className="fill-accent text-accent" />);
    }
    
    return stars;
  };

  return (
    <Card className="bg-light p-6 rounded-xl">
      <div className="flex text-accent mb-3">
        {renderStars(rating)}
      </div>
      <CardContent className="p-0">
        <p className="text-gray-600 mb-4">
          "{comment}"
        </p>
        <div className="flex items-center">
          <div className={`w-10 h-10 bg-${avatarColor === 'primary' ? 'primary' : 'secondary'} rounded-full overflow-hidden mr-3 flex items-center justify-center text-white`}>
            <span>{initials}</span>
          </div>
          <div>
            <h4 className="font-bold text-dark">{name}</h4>
            <p className="text-gray-500 text-sm">{location}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Testimonials = () => {
  const { data: testimonials, isLoading, error } = useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials"],
  });

  if (isLoading) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-dark">What Our Customers Say</h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">Hear from people who love our products</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-light p-6 rounded-xl animate-pulse">
                <div className="flex mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <div key={star} className="w-5 h-5 bg-gray-200 rounded-full mr-1"></div>
                  ))}
                </div>
                <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-4"></div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-16"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center text-red-500">
            Error loading testimonials. Please try again.
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-dark">What Our Customers Say</h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">Hear from people who love our products</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials?.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
