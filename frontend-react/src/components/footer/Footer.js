import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class="bg-black h-10 w-full absolute bottom-0 left-0 text-center">
        <p class="text-blue-900 font-bold text-sm">
          &copy; {new Date().getFullYear()} Fades inc. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
