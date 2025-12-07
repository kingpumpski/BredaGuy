import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import About from "@/components/About";
import StoreRegistration from "@/components/StoreRegistration";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Categories />
      <About />
      <StoreRegistration />
      <Footer />
    </div>
  );
};

export default Index;
