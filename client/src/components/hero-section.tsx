import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToDownload = () => {
    const element = document.getElementById('download');
    if (element) {
      const headerHeight = 80;
      const targetPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 text-center animate-fade-in">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight animate-slide-up">
            The most private<br />
            browser. <span className="gradient-text animate-pulse">Ever.</span>
          </h1>
          <p className="text-white text-opacity-90 text-xl md:text-2xl mb-12 max-w-3xl mx-auto animate-fade-in-delay">
            Built in Europe. Made for Europe.
          </p>
          <Button 
            onClick={scrollToDownload}
            className="bg-gradient-button hover:scale-110 transform transition-all duration-500 px-12 py-6 rounded-full text-black font-semibold text-xl shadow-2xl hover:shadow-3xl animate-float hover:bg-gradient-button animate-bounce-subtle"
          >
            <Download className="mr-3 h-6 w-6" />
            Download Now
          </Button>
        </div>
      </div>
    </section>
  );
}
