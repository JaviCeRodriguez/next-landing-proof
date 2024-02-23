import Image from "next/image";

const ProjectManagement = () => {
  return (
    <section className="bg-secondary-03 flex flex-col items-center text-center pt-[136px] pb-20 px-4">
      <h1 className="text-4xl text-secondary-04 font-bold mb-6">
        Project Management
      </h1>
      <p className="text-lg text-secondary-04 font-normal mb-[60px]">
        Images, videos, PDFs and audio files are supported. Create math
        expressions and diagrams directly from the app. Take photos with the
        mobile app and save them to a note.
      </p>
      <button className="bg-primary-02 text-lg text-secondary-03 font-normal px-10 py-5 rounded-lg mb-[100px]">
        Get Started -&gt;
      </button>
      <Image
        src="https://placehold.co/1920x1080/png?text=Sarasa"
        alt="Sarasa"
        width={600}
        height={400}
      />
    </section>
  );
};

export default ProjectManagement;
