import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ScreenshotsSection from "@/components/screenshots-section";
import DownloadSection from "@/components/download-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-main">
      <Header />
      <HeroSection />
      <AboutSection />
      <ScreenshotsSection />
      <DownloadSection />
      <Footer />
    </div>
  );
}
