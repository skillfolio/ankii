import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HomeHero from "@/components/sections/HomeHero";
import HomeStats from "@/components/sections/HomeStats";
import HomeDirections from "@/components/sections/HomeDirections";
import HomeFeatured from "@/components/sections/HomeFeatured";
import HomeWhy from "@/components/sections/HomeWhy";
import HomeTestimonials from "@/components/sections/HomeTestimonials";
import HomeCorporate from "@/components/sections/HomeCorporate";
import HomeExperts from "@/components/sections/HomeExperts";
import HomeCTA from "@/components/sections/HomeCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HomeHero />
        <HomeStats />
        <HomeDirections />
        <HomeFeatured />
        <HomeWhy />
        <HomeTestimonials />
        <HomeCorporate />
        <HomeExperts />
        <HomeCTA />
      </main>
      <Footer />
    </>
  );
}
