import Image from "next/image";

const YourData = () => {
  return (
    <section className="bg-secondary-03 flex flex-col items-center text-center pt-[80px] pb-20 px-4">
      <Image src="/element.svg" alt="Sarasa" width={600} height={400} />
      <h1 className="text-4xl text-secondary-04 font-bold mt-[100px] mb-6">
        100% your data
      </h1>
      <p className="text-lg text-secondary-04 font-normal mb-[60px]">
        The app is open source and your notes are saved to an open format, so
        you&apos;ll always have access to them. Uses End-To-End Encryption
        (E2EE) to secure your notes and ensure no-one but yourself can access
        them.
      </p>
      <button className="bg-primary-02 text-lg text-secondary-03 font-normal px-10 py-5 rounded-lg">
        Read more -&gt;
      </button>
    </section>
  );
};

export default YourData;
