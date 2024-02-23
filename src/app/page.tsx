import ClientsSays from "@/components/sections/Clients";
import CustomiseNeeds from "@/components/sections/Customise";
import UseAsExtension from "@/components/sections/Extension";
import FavoriteApps from "@/components/sections/FavoriteApps";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Navbar from "@/components/sections/Navbar";
import ProjectManagement from "@/components/sections/PM";
import ChooseYourPlan from "@/components/sections/Plan";
import OurSponsors from "@/components/sections/Sponsors";
import WorkTogether from "@/components/sections/Work";
import WorkEverywhere from "@/components/sections/WorkEverywhere";
import YourData from "@/components/sections/YourData";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProjectManagement />
      <WorkTogether />
      <UseAsExtension />
      <CustomiseNeeds />
      <ChooseYourPlan />
      <WorkEverywhere />
      <YourData />
      <OurSponsors />
      <FavoriteApps />
      <ClientsSays />
      <Footer />
    </main>
  );
}
