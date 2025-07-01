// Standard Tailwind CSS configuration file for Fresh projects using the official plugin
import { type Config } from "npm:tailwindcss";

export default {
  // Define where Tailwind should look for classes to process
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  theme: {
    // Extend Tailwind's default theme with your custom values
    extend: {
      // Custom font family for Inter
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      // Custom color palette for the application
      colors: {
        'slate-50': '#f8fafc',
        'slate-100': '#f1f5f9',
        'slate-200': '#e2e8f0',
        'slate-500': '#64748b',
        'slate-600': '#475569',
        'slate-700': '#334155',
        'slate-800': '#1e293b',
        'slate-900': '#0f172a',
        'orange-50': '#fff7ed',
        'orange-100': '#ffedd5',
        'orange-200': '#fed7aa',
        'orange-400': '#fb923c',
        'orange-500': '#f97316',
        'orange-600': '#ea580c',
        'orange-700': '#c2410c',
        'red-50': '#fef2f2',
        'red-200': '#fecaca',
        'red-500': '#ef4444',
        'red-700': '#b91c1c',
        'green-50': '#f0fdf4',
        'green-100': '#dcfce7',
        'green-200': '#bbf7d0',
        'green-800': '#22c55e',
        'green-700': '#15803d',
        'yellow-100': '#fefce8',
        'yellow-800': '#a16207',
        'blue-100': '#dbeafe',
        'blue-800': '#1e40af',
        'amber-50': '#fffbeb',
        'amber-100': '#fef3c7',
        'amber-800': '#92400e',
        'amber-900': '#78350f',
        'sky-100': '#e0f2fe',
        'sky-800': '#075985',
      },
    },
  },
  plugins: [], // Add any Tailwind plugins here if needed
} satisfies Config;
