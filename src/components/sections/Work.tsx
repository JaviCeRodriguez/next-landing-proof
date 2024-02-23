import Image from "next/image";

const WorkTogether = () => {
  return (
    <section className="bg-secondary-03 flex flex-col items-center text-center pt-[136px] pb-20 px-4">
      <h1 className="text-4xl text-secondary-04 font-bold mb-6">
        Work together
      </h1>
      <p className="text-lg text-secondary-04 font-normal mb-[60px]">
        With whitepace, share your notes with your colleagues and collaborate on
        them. You can also publish a note to the internet and share the URL with
        others.
      </p>
      <button className="bg-primary-02 text-lg text-secondary-03 font-normal px-10 py-5 rounded-lg mb-[100px]">
        Try it now -&gt;
      </button>
      <Image src="/work.svg" alt="Sarasa" width={600} height={400} />
    </section>
  );
};

export default WorkTogether;
