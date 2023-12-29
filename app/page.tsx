import Header from "./components/Header";
import Hero from "./components/Hero";
import Ecosystem from "./components/Ecosystem";
import SeasonTwo from "./components/SeasonTwo";
import Footer from "./components/Footer";
import React from "react";
export default function Home(): React.ReactNode {
  return (
    <div className="bg-dark overflow-hidden relative ">
      <Header />
      <Hero />
      <div className="bg-light">
        <Ecosystem />
      </div>
      <SeasonTwo />
      <div className="bg-black">
        <Footer />
      </div>
    </div>
  );
}
