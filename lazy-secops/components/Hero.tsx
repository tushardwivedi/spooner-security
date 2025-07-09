export default function Hero() {
    const scrollToSection = (sectionId: string) => {
      const element = document.querySelector(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };
  
    return (
      <section class="relative flex-grow flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 text-center overflow-hidden bg-gradient-to-br from-white to-orange-50">
        <div class="relative z-10 max-w-4xl mx-auto">
          <h1 class="text-4xl font-extrabold text-slate-900 sm:text-5xl md:text-6xl leading-tight">
            Your Entire Security Workflow.
            <br />
            <span class="text-orange-700">Unified in Your Terminal.</span>
          </h1>
          <p class="mt-6 text-lg text-slate-600 md:text-xl max-w-2xl mx-auto">
            Streamline audits, manage vulnerabilities, and foster a security-first culture with the `lazygit`-inspired Terminal User Interface.
          </p>
          <div class="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={() => scrollToSection("#download")}
              class="hero-button inline-block bg-orange-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-orange-700"
            >
              Download Now
            </button>
            <button
              onClick={() => scrollToSection("#features")}
              class="hero-button inline-block bg-transparent border-2 border-orange-600 text-orange-700 font-bold py-3 px-8 rounded-lg hover:bg-orange-600 hover:text-white"
            >
              Learn More
            </button>
          </div>
        </div>
        
        {/* Subtle background pattern */}
        <div class="absolute inset-0 z-0 opacity-10">
          <svg 
            class="w-full h-full" 
            fill="none" 
            viewBox="0 0 100 100" 
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 L 0 10" fill="none" stroke="#64748b" stroke-width="0.1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </section>
    );
  }