export default function ProblemSolution() {
    return (
      <>
        {/* Problem Section */}
        <section class="py-20 px-4 sm:px-6 lg:px-8 bg-slate-100">
          <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 class="text-3xl font-bold text-slate-900">
                The Challenge: Fragmented Security Tools
              </h2>
              <p class="mt-4 text-lg text-slate-700">
                Security operations often involve a complex ecosystem of disparate command-line tools. 
                This fragmentation leads to manual switching, inefficient workflows, and a steep learning curve, 
                ultimately increasing the risk of overlooked vulnerabilities and compliance gaps.
              </p>
              <ul class="mt-6 space-y-3 text-slate-600">
                <li class="flex items-start">
                  <span class="text-red-500 mr-2 mt-1">✕</span>
                  <span>Context switching between many CLI utilities.</span>
                </li>
                <li class="flex items-start">
                  <span class="text-red-500 mr-2 mt-1">✕</span>
                  <span>Manual consolidation of diverse scan reports.</span>
                </li>
                <li class="flex items-start">
                  <span class="text-red-500 mr-2 mt-1">✕</span>
                  <span>Inconsistent security practices due to tool complexity.</span>
                </li>
              </ul>
            </div>
            <div class="bg-white p-8 rounded-xl shadow-xl border border-red-200">
              <h3 class="text-xl font-semibold text-center text-red-700 mb-4">
                Before Spooners TUI
              </h3>
              <div class="relative grid grid-cols-3 gap-4 text-center">
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="text-5xl text-red-500" title="Security Analyst">👤</div>
                </div>
                {["Lynis", "OpenVAS", "Nmap", "Rkhunter", "flawz", "havn"].map((tool) => (
                  <div key={tool} class="p-3 bg-red-50 rounded-lg border border-red-200 z-10 text-sm">
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
  
        {/* Solution Section */}
        <section class="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div class="bg-white p-8 rounded-xl shadow-xl border border-green-200 order-2 md:order-1">
              <h3 class="text-xl font-semibold text-center text-green-700 mb-4">
                With Spooners TUI
              </h3>
              <div class="p-6 bg-green-50 rounded-lg border border-green-200">
                <div class="font-mono text-green-800 text-center font-bold text-3xl">
                  Spooners TUI
                </div>
                <div class="grid grid-cols-3 gap-3 mt-4 text-sm text-center">
                  {["Scan", "Audit", "Comply", "Triage", "Report", "Learn"].map((action) => (
                    <span key={action} class="p-2 bg-green-100 rounded-md shadow-sm">
                      {action}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div class="order-1 md:order-2">
              <h2 class="text-3xl font-bold text-slate-900">
                The Solution: Seamless Terminal Integration
              </h2>
              <p class="mt-4 text-lg text-slate-700">
                The Spooners Security TUI provides a single, intelligent orchestration layer, 
                inspired by `lazygit`, transforming complex security workflows into an intuitive 
                and actionable terminal dashboard. Focus on what matters, not on managing tools.
              </p>
              <ul class="mt-6 space-y-3 text-slate-600">
                <li class="flex items-start">
                  <span class="text-green-500 mr-2 mt-1">✓</span>
                  <span>Unified interface for all security operations.</span>
                </li>
                <li class="flex items-start">
                  <span class="text-green-500 mr-2 mt-1">✓</span>
                  <span>Automated data parsing and consolidated views.</span>
                </li>
                <li class="flex items-start">
                  <span class="text-green-500 mr-2 mt-1">✓</span>
                  <span>Intuitive keyboard navigation and interactive workflows.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </>
    );
  }