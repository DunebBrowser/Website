import { Image } from "lucide-react";

export default function ScreenshotsSection() {
  const screenshots = [
    { title: "Screenshot 1", subtitle: "Desktop Interface" },
    { title: "Screenshot 2", subtitle: "Privacy Settings" },
    { title: "Screenshot 3", subtitle: "Mobile View" },
    { title: "Screenshot 4", subtitle: "Dark Mode" }
  ];

  return (
    <section id="screenshots" className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-slide-up">Screenshots</h2>
          <p className="text-white text-opacity-90 text-lg animate-fade-in-delay">See our browser in action across different platforms</p>
        </div>
        
        <div className="grid grid-cols-2 gap-4 md:gap-6 animate-slide-up">
          {screenshots.map((screenshot, index) => (
            <div 
              key={index}
              className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-20 hover:bg-opacity-20 hover:scale-105 transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Desktop Screenshot Placeholder */}
              <div className="w-full aspect-[16/10] rounded-lg overflow-hidden mb-3">
                <img 
                  src={`data:image/svg+xml;base64,${btoa(`<svg viewBox="0 0 1600 1000" xmlns="http://www.w3.org/2000/svg">
                    <rect width="1600" height="1000" fill="#1f2937"/>
                    <rect width="1600" height="60" fill="#374151"/>
                    <circle cx="40" cy="30" r="8" fill="#ef4444"/>
                    <circle cx="70" cy="30" r="8" fill="#f59e0b"/>
                    <circle cx="100" cy="30" r="8" fill="#10b981"/>
                    <rect x="150" y="15" width="1300" height="30" rx="15" fill="#6b7280"/>
                    <text x="170" y="35" fill="#d1d5db" font-size="16" font-family="Arial">https://privatebrowser.com</text>
                    <rect x="50" y="100" width="1500" height="850" fill="#111827"/>
                    <rect x="100" y="150" width="400" height="20" fill="#4b5563"/>
                    <rect x="100" y="190" width="600" height="15" fill="#6b7280"/>
                    <rect x="100" y="220" width="500" height="15" fill="#6b7280"/>
                    <rect x="100" y="260" width="200" height="120" fill="#374151"/>
                    <rect x="320" y="260" width="200" height="120" fill="#374151"/>
                    <g transform="translate(1350, 150)">
                      <path d="M50 10 L50 40 Q50 60 30 70 Q10 60 10 40 L10 10 Q30 0 50 10" fill="#10b981"/>
                      <path d="M30 25 L40 35 L55 20" stroke="#ffffff" stroke-width="3" fill="none"/>
                    </g>
                    <text x="800" y="500" text-anchor="middle" fill="#ffffff" font-size="48" font-family="Arial">Screenshot ${index + 1}</text>
                    <text x="800" y="550" text-anchor="middle" fill="#9ca3af" font-size="24" font-family="Arial">${screenshot.subtitle}</text>
                  </svg>`)}`}
                  alt={`${screenshot.title} - Replace this screenshot`}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="text-center">
                <p className="text-white text-opacity-70 font-medium text-sm">{screenshot.title}</p>
                <p className="text-white text-opacity-50 text-xs mt-1">{screenshot.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
