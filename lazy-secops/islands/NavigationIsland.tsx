import { useState } from "preact/hooks";

export default function NavigationIsland() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#features", text: "Features" },
    { href: "#demo", text: "Demo" },
    { href: "#download", text: "Download" },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div class="relative">
      {/* Desktop Navigation */}
      <div class="hidden md:block">
        <div class="ml-10 flex items-baseline space-x-4">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              class="nav-link text-slate-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              {item.text}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div class="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          class="p-2 text-slate-600 hover:text-orange-700 transition-colors"
          aria-label="Toggle navigation menu"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {isOpen && (
          <div class="absolute right-0 top-full mt-2 w-48 bg-white rounded-md shadow-lg border border-slate-200 z-50">
            <div class="py-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  class="block w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-orange-700 transition-colors"
                >
                  {item.text}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}