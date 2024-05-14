import React from "react";
import Footer from "../components/Footer";
import MessageTable from "../components/MessageTable";
import Navbar from "../components/Navbar";

export default function Manage() {
  return (
    <div className="relative bg-[#e4dece] bg-cover bg-fixed bg-center bg-no-repeat">
      <Navbar />
      <MessageTable />
      <Footer />
    </div>
  );
}
