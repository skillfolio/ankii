import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FluidHero from "@/components/sections/FluidHero";
import Benefits from "@/components/sections/Benefits";
import Programs from "@/components/sections/Programs";
import Departments from "@/components/sections/Departments";
import Testimonials from "@/components/sections/Testimonials";
import Objections from "@/components/sections/Objections";
import ContactForm from "@/components/sections/ContactForm";
import About from "@/components/sections/About";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <FluidHero />
        <Benefits />
        <Programs />
        <Departments />
        <Testimonials />
        <About />
        <Objections />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
