import ContactForm from "@/components/ContactForm";
import { Helmet } from "react-helmet";

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | OmiFoods</title>
        <meta name="description" content="Get in touch with OmiFoods for product inquiries, bulk orders, feedback, or any questions you may have about our food products." />
      </Helmet>

      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins text-dark mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We'd love to hear from you! Reach out for any questions, feedback, or order inquiries.
          </p>
        </div>
      </section>

      <ContactForm />
    </>
  );
};

export default ContactPage;
