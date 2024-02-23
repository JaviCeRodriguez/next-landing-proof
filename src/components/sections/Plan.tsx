import { plansMock } from "@/utils/mock";
import Plan from "../cards/Plan";

const ChooseYourPlan = () => {
  return (
    <section className="bg-secondary-03 flex flex-col items-center text-center pt-[136px] pb-20 px-4">
      <h1 className="text-4xl text-secondary-04 font-bold mb-6">
        Choose Your Plan
      </h1>
      <p className="text-lg text-secondary-04 font-normal mb-[60px]">
        Whether you want to get organized, keep your personal life on track, or
        boost workplace productivity, Evernote has the right plan for you.
      </p>
      <Plan {...plansMock[1]} isMain />
    </section>
  );
};

export default ChooseYourPlan;
