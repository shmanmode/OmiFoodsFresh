import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import AboutUs from "@/components/AboutUs";
import ContactForm from "@/components/ContactForm";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>OmiFoods - Fresh Forever | Make it the way you like it!</title>
        <meta name="description" content="Discover OmiFoods premium ready-to-cook food products - Momos, Spring Rolls, Soya Chap, and more. Fresh ingredients and authentic flavors." />
      </Helmet>
      
      <Hero />
      <FeaturedProducts />
      <WhyChooseUs />
      <AboutUs />
      <Testimonials />
      <ContactForm />
    </>
  );
};

export default Home;
