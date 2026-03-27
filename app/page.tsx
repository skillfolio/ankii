import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
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
        <Hero />
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
