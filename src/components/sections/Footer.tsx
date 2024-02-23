import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-primary-01 flex flex-col items-start text-left pt-[136px] px-4">
      <h1 className="text-4xl text-secondary-03 font-bold mb-6">
        Try Whitepace today
      </h1>
      <p className="text-lg text-secondary-03 font-normal mb-[60px]">
        Get started for free. Add your whole team as your needs grow.
      </p>
      <button className="bg-primary-02 text-lg text-secondary-03 font-normal px-10 py-5 rounded-lg mb-[40px]">
        Try TasKey free -&gt;
      </button>
      <p className="text-lg text-secondary-03 font-normal mb-[40px]">
        On a big team? Contact sales
      </p>

      <div className="flex flex-row w-full gap-10 mb-[40px]">
        <Image src="/apple-white.svg" alt="Sarasa" width={36} height={36} />
        <Image src="/windows-white.svg" alt="Sarasa" width={36} height={36} />
        <Image src="/android-white.svg" alt="Sarasa" width={36} height={36} />
      </div>

      <div className="flex flex-col items-center text-center gap-8 mt-40 mb-20">
        <Image src="/Logo.svg" alt="Sarasa" width={191} height={34} />
        <p className="text-lg text-secondary-03 font-normal">
          whitepace was created for the new ways we live and work. We make
          beautyfully designed around the world
        </p>
      </div>

      <div className="flex flex-col items-center text-center gap-20">
        <div className="flex flex-col justify-center text-lg text-secondary-03 font-normal gap-2">
          <p className="font-bold hover:text-secondary-01">Product</p>
          <p className="hover:text-secondary-01">Overview</p>
          <p className="hover:text-secondary-01">Pricing</p>
          <p className="hover:text-secondary-01">Customer stories</p>
        </div>
        <div className="flex flex-col justify-center text-lg text-secondary-03 font-normal gap-2">
          <p className="font-bold hover:text-secondary-01">Resources</p>
          <p className="hover:text-secondary-01">Blog</p>
          <p className="hover:text-secondary-01">Guides & tutorials</p>
          <p className="hover:text-secondary-01">Help center</p>
        </div>
        <div className="flex flex-col justify-center text-lg text-secondary-03 font-normal gap-2">
          <p className="font-bold hover:text-secondary-01">Company</p>
          <p className="hover:text-secondary-01">About us</p>
          <p className="hover:text-secondary-01">Careers</p>
          <p className="hover:text-secondary-01">Media kit</p>
        </div>
        <div className="flex flex-col items-center text-lg text-secondary-03 font-normal gap-8">
          <h3 className="text-2xl text-secondary-03 font-bold">Try It Today</h3>
          <p className="text-lg text-secondary-03 font-normal">
            Get started for free. Add your whole team as your needs grow.
          </p>
          <button className="bg-primary-02 text-lg text-secondary-03 font-normal px-10 py-5 rounded-lg mb-[100px]">
            Start today -&gt;
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center text-lg text-secondary-03 font-normal gap-2 md:border-t md:border-secondary-04 w-full">
        <p className="font-bold hover:text-secondary-01">🌏 English 🔽</p>
        <p className="hover:text-secondary-01">Terms & privacy</p>
        <p className="hover:text-secondary-01">Security</p>
        <p className="hover:text-secondary-01">Status</p>
        <p className="hover:text-secondary-01">&copy;2021 Whitespace LLC.</p>
        <hr className="border-1 border-secondary-04 w-[100%] my-6 md:hidden" />
        <div className="flex flex-row justify-center w-full gap-10 mb-10">
          <Image src="/Facebook.svg" alt="Sarasa" width={9} height={17} />
          <Image src="/Twitter.svg" alt="Sarasa" width={17} height={14} />
          <Image src="/Linkedin.svg" alt="Sarasa" width={15} height={15} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
