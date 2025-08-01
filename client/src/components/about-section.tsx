import { Shield, EyeOff, Zap } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 animate-fade-in">About Us</h2>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl p-10 border border-white border-opacity-20 hover:bg-opacity-15 transition-all duration-500 animate-scale-in">
            <p className="text-white text-opacity-90 text-xl leading-relaxed mb-8 animate-slide-in-left">
              The internet in Europe is being taken over by large American corporations, such as Google, Microsoft, and Apple. But what many Europeans do not know is how much data these overseas companies take off us. Therefore at Duneb, we’re working to create a private, safe and purely European browser, where we in Europe can feel safe about how our data is used. 
            </p>
          </div>
        </div>
      </div>
    </section>
);
}
