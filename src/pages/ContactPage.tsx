import React from "react";
import { useLocation } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import Header from "../components/Header";
import { ContactPageProps } from "../types";

const ContactPage: React.FC = () => {
  const location = useLocation();
  const { preselectedPackage } = location.state as ContactPageProps || {};

  return (
    <div>
      <Header />
      <ContactForm preselectedPackage={preselectedPackage} />
    </div>
  );
};

export default ContactPage