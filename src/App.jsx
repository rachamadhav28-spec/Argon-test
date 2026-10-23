import React from "react";
import { Navbar } from "@/components/Navbar.jsx";
import { HeroSection } from "@/components/HeroSection.jsx";
import { MetricsGrid } from "@/components/MetricsGrid.jsx";
import { Footer } from "@/components/Footer.jsx";

export function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <HeroSection />
      <MetricsGrid />
      <Footer />
    </div>
  );
}
