import { Download, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function DownloadSection() {
  const { toast } = useToast();

  const handleWindowsDownload = () => {
    toast({
      title: "Download Started",
      description: "Your Windows download will begin shortly.",
    });
    // Simulate download
    setTimeout(() => {
      window.open("#", "_blank");
    }, 1000);
  };

  return (
    <section id="download" className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 animate-slide-up">
            Download
          </h2>
          <p className="text-white text-opacity-90 text-xl mb-8 animate-fade-in-delay">
            Get started with the most private browser available
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-10 max-w-4xl mx-auto">
          {/* Windows Download */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl p-10 border border-white border-opacity-20 text-center hover:bg-opacity-20 hover:scale-105 transition-all duration-500 animate-slide-in-left w-full md:w-96 max-w-md">
            <div className="w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-8 animate-float">
              <svg
                className="w-10 h-10 text-red-500"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M3 12V6.75l6-1.32v6.48L3 12zm17-9v8.75l-10 .15V5.21L20 3zM3 13l6 .09v6.81l-6-1.15V13zm17 .25V22l-10-1.91V13.1l10 .15z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-white mb-6">Windows</h3>
            <p className="text-white text-opacity-80 mb-8 text-lg">
              System Requirements
            </p>
            <ul className="text-left text-white text-opacity-70 mb-10 space-y-3">
              <li
                className="flex items-center animate-fade-in"
                style={{ animationDelay: "300ms" }}
              >
                <div className="w-3 h-3 bg-yellow-400 rounded-full mr-4 animate-pulse"></div>
                Windows 10 or later
              </li>
              <li
                className="flex items-center animate-fade-in"
                style={{ animationDelay: "400ms" }}
              >
                <div
                  className="w-3 h-3 bg-yellow-400 rounded-full mr-4 animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
                1 gigahertz (GHz) or faster compatible processor or System on a
                Chip (SoC)
              </li>
              <li
                className="flex items-center animate-fade-in"
                style={{ animationDelay: "500ms" }}
              >
                <div
                  className="w-3 h-3 bg-yellow-400 rounded-full mr-4 animate-pulse"
                  style={{ animationDelay: "2s" }}
                ></div>
                1GB of RAM / 2GB of RAM for the 64-bit version
              </li>
              <li
                className="flex items-center animate-fade-in"
                style={{ animationDelay: "600ms" }}
              >
                <div
                  className="w-3 h-3 bg-yellow-400 rounded-full mr-4 animate-pulse"
                  style={{ animationDelay: "3s" }}
                ></div>
                500MB of hard drive space
              </li>
            </ul>
            <Button
              onClick={handleWindowsDownload}
              className="bg-gradient-button hover:scale-110 transform transition-all duration-500 px-8 py-4 rounded-full text-black font-semibold text-lg w-full shadow-2xl hover:shadow-3xl hover:bg-gradient-button animate-bounce-subtle"
            >
              <Download className="mr-3 h-5 w-5" />
              Download for Windows
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
