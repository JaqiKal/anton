import React from "react";

const Footer = () => {
  return (
    <footer className=" text-customDutchL text-center text-xs mt-6 md:mt-8 lg:mt-10 xl:mt-12 2xl:mt-14">
      <p>{new Date().getFullYear()} Powered by Joy!</p>
    </footer>
  );
};

export default Footer;
