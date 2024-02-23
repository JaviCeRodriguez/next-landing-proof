import Image from "next/image";

const CustomiseNeeds = () => {
  return (
    <section className="bg-secondary-03 flex flex-col items-center text-center pt-[100px] pb-20 px-4">
      <Image
        src="https://placehold.co/1920x1080/png?text=Sarasa"
        alt="Sarasa"
        width={600}
        height={400}
      />
      <h1 className="text-4xl text-secondary-04 font-bold mt-[60px] mb-6">
        Customise it to your needs
      </h1>
      <p className="text-lg text-secondary-04 font-normal mb-[60px]">
        Customise the app with plugins, custom themes and multiple text editors
        (Rich Text or Markdown). Or create your own scripts and plugins using
        the Extension API.
      </p>
      <button className="bg-primary-02 text-lg text-secondary-03 font-normal px-10 py-5 rounded-lg mb-[100px]">
        Let&apos;s Go -&gt;
      </button>
    </section>
  );
};

export default CustomiseNeeds;
