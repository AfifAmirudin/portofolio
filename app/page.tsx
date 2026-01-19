import Hero from "../components/Hero";
import VideoSection from "../components/VideoSection";
import GraphicSection from "../components/GraphicSection";
import ArticleSection from "../components/ArticleSection";
import ContactSection from "../components/ContactSection";
import FAQ from "../components/FAQ";
import BackToTop from "../components/BackToTop";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <VideoSection />
        <GraphicSection />
        <ArticleSection />
        <FAQ />
      </main>
      <BackToTop />
      <Footer />

    </>
  );
}
