import React from "react";
import { Header } from "../common/Header";
import { Footer } from "../common/Footer";
export const MainLayout = ({ children }) => {
  return (
    <div className="bg-gray-300">
      <div className="container mx-auto bg-red-300 shadow-2xl">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
};
