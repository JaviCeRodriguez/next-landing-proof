import { testimonialsMock } from "@/utils/mock";
import ClientTestimonial from "../cards/Testimonial";

const ClientsSays = () => {
  return (
    <section className="bg-secondary-03 flex flex-col items-center text-center pt-[136px] pb-20 px-4">
      <h1 className="text-4xl text-secondary-04 font-bold mb-6">
        What Our Clients Says
      </h1>
      <ClientTestimonial {...testimonialsMock[1]} />
    </section>
  );
};

export default ClientsSays;
