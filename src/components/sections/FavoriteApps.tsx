import Image from "next/image";

const FavoriteApps = () => {
  return (
    <section className="bg-primary-01 flex flex-col items-center text-center pt-[80px] pb-10 px-4">
      <Image src="/Apps.svg" alt="Sarasa" width={600} height={400} />
      <h1 className="text-4xl text-secondary-03 font-bold mt-[60px] mb-6">
        Work with Your Favorite Apps Using whitepace
      </h1>
      <p className="text-lg text-secondary-03 font-normal mb-[60px]">
        Whitepace teams up with your favorite software. Integrate with over
        1000+ apps with Zapier to have all the tools you need for your project
        success.
      </p>
      <button className="bg-primary-02 text-lg text-secondary-03 font-normal px-10 py-5 rounded-lg mb-[100px]">
        Read more -&gt;
      </button>
    </section>
  );
};

export default FavoriteApps;
