import React from "react";
import Album from "../components/Album";
import BackToTop from "../components/BackToTop";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Invitation from "../components/Invitation";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="relative bg-[#e4dece] bg-cover bg-fixed bg-center bg-no-repeat">
      <Navbar />
      <BackToTop />
      <Intro />
      <Header />
      <Invitation />
      <Album />
      <Contact />
      <Footer />
    </div>
  );
}
