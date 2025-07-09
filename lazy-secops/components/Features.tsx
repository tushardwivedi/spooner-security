interface Feature {
    icon: string;
    title: string;
    description: string;
  }
  
  export default function Features() {
    const features: Feature[] = [
      {
        icon: "🔍",
        title: "Vulnerability Management",
        description: "Orchestrate popular scanners, triage findings, track remediation, and get contextual CVE details, all within an interactive terminal interface."
      },
      {
        icon: "📊",
        title: "Strategy & Compliance",
        description: "Map regulatory requirements to technical controls, track company-wide security challenges, and streamline strategic initiatives with clear oversight."
      },
      {
        icon: "💡",
        title: "Threat Intelligence & Culture",
        description: "Stay updated with emerging threats, browse internal security knowledge base, and foster a security-aware culture with interactive learning elements."
      }
    ];
  
    return (
      <section id="features" class="py-20 px-4 sm:px-6 lg:px-8 bg-slate-100">
        <div class="max-w-7xl mx-auto text-center">
          <h2 class="text-3xl font-bold text-slate-900">
            Empower Your Security Workflow
          </h2>
          <p class="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            Spooners TUI is built with modules designed to cover every aspect of your security operations, 
            ensuring comprehensive protection and efficiency.
          </p>
        </div>
  
        <div class="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              class="feature-card"
            >
              <div class="text-5xl mb-4">{feature.icon}</div>
              <h3 class="text-xl font-semibold text-slate-900 mb-2">
                {feature.title}
              </h3>
              <p class="text-slate-600 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }