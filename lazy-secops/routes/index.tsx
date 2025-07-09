import { useSignal } from "@preact/signals";
import { Head } from "$fresh/runtime.ts";
import Header from "../components/Header.tsx";
import Hero from "../components/Hero.tsx";
import ProblemSolution from "../components/ProblemSolution.tsx";
import Features from "../components/Features.tsx";
import Demo from "../components/Demo.tsx";
import Download from "../components/Download.tsx";
import Footer from "../components/Footer.tsx";


export default function Home() {
  return (
    <>
      <Head>
        <title>Spooners Security TUI - Unified Terminal Security</title>
        <meta 
          name="description" 
          content="Streamline audits, manage vulnerabilities, and foster a security-first culture with the lazygit-inspired Terminal User Interface." 
        />
        <meta property="og:title" content="Spooners Security TUI" />
        <meta property="og:description" content="Your Entire Security Workflow. Unified in Your Terminal." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div class="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-inter">
        <Header />
        <Hero />
        <ProblemSolution />
        <Features />
        <Demo />
        <Download />
        <Footer />
      </div>
    </>
  );
}
