import React from "react";
import Navbar from "../../Shared/NavBar/Navbar";
import InvoiceMainContent from "./Components/InvoiceMainContent";

const Invoice = () => {
  return (
    <div className=" main-wrapper">
      <Navbar />
      <InvoiceMainContent />
    </div>
  );
};

export default Invoice;
