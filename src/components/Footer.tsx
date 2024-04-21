import React from "react";

const Footer = () => {
  const linkProps = {
    className: "text-black underline",
    target: "_blank",
    rel: "noreferrer",
  };

  return (
    <footer className="bg-gray-200 py-2 flex justify-between items-center px-2">
      {/* footer left  */}
      <div className="flex items-center space-x-3">
        <p className="text-sm text-black flex items-center space-x-1">
          <span>©</span>
          <a href="https://github.com/itsmeharsh" {...linkProps}>
            BanLister.com
          </a>
          <span>- 2019</span>
          <span>| Powered by </span>
          <div className="flex items-center space-x-1">
            <span>©</span>
            <a href="https://github.com/itsmeharsh" {...linkProps}>
              STEAM
            </a>
            <sup> & </sup>
            <a href="https://github.com/itsmeharsh" {...linkProps}>
              Faded Servers
            </a>
          </div>
        </p>
      </div>
      {/* footer right  */}
      <div className="flex items-center space-x-3">
        {/* Discord Logo  */}
        <img
          src="/src/assets/logo/pngwing.com.png"
          className="h-4"
          alt="Discord Logo"
        />
        <span>|</span>
        <a href="https://github.com/itsmeharsh" {...linkProps}>
          Terms of Service
        </a>
      </div>
    </footer>
  );
};

export default Footer;
