import NavigationIsland from "../islands/NavigationIsland.tsx";

export default function Header() {
  return (
    <header class="bg-white/80 backdrop-blur-lg sticky top-0 z-50 border-b border-slate-200">
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <span class="font-bold text-xl text-slate-800">
              Spooners Security TUI
            </span>
          </div>
          <NavigationIsland />
        </div>
      </nav>
    </header>
  );
}