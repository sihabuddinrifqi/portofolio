import { Typography } from "@material-tailwind/react";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-sky-600 text-white py-6">
      <div className="container mx-auto text-center">
        <Typography variant="body2">
          &copy; {currentYear} Uddin-S {"</>"}. All Rights Reserved.
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
