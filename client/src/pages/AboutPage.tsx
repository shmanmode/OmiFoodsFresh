import AboutUs from "@/components/AboutUs";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import { Helmet } from "react-helmet";

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us | OmiFoods</title>
        <meta name="description" content="Learn more about OmiFoods and our commitment to quality, fresh ingredients, and authentic flavors in our ready-to-cook food products." />
      </Helmet>

      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins text-dark mb-4">About OmiFoods</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We are passionate about bringing authentic taste to your kitchen with premium ready-to-cook food products.
          </p>
        </div>
      </section>

      <AboutUs />
      <WhyChooseUs />
      <Testimonials />
    </>
  );
};

export default AboutPage;
