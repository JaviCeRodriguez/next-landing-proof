import Image from "next/image";

const OurSponsors = () => {
  return (
    <section className="bg-secondary-03 flex flex-col items-center text-center pt-[136px] pb-20">
      <h1 className="text-4xl text-secondary-04 font-bold mb-6">
        Our sponsors
      </h1>
      <div className="flex flex-col items-center gap-20 mt-10">
        <Image src="/Apple.svg" alt="Sarasa" width={56} height={68} />
        <Image src="/Microsoft.svg" alt="Sarasa" width={213} height={46} />
        <Image src="/Slack.svg" alt="Sarasa" width={192} height={49} />
        <Image src="/Google.svg" alt="Sarasa" width={140} height={47} />
      </div>
    </section>
  );
};

export default OurSponsors;
