import DiscordLogo from "../../public/assets/logo/pngwing.com.png";
const Footer = () => {
  const linkProps = {
    className: "text-black underline",
    target: "_blank",
    rel: "noreferrer",
  };

  return (
    <footer className="bg-gray-200 py-2 flex md:flex-row flex-col justify-between md:items-center px-2 gap-1 md:gap-0">
      {/* footer left  */}
      <div className="flex md:flex-row  items-center space-x-3">
        <div className="md:text-sm text-black flex items-center space-x-1 text-xs">
          <span>©</span>
          <a href="https://www.google.com/" {...linkProps}>
            BanLister.com
          </a>
          <span>- 2019</span>
          <span>| Powered by </span>
          <div className="flex items-center space-x-1">
            <span>©</span>
            <a href="https://www.google.com/" {...linkProps}>
              STEAM
            </a>
            <span> & </span>
            <a href="https://www.google.com/" {...linkProps}>
              Faded Servers
            </a>
          </div>
        </div>
      </div>
      {/* footer right  */}
      <div className="flex items-center space-x-3 text-xs md:text-sm">
        {/* Discord Logo  */}
        <img src={DiscordLogo} className="h-4" alt="Discord Logo" />
        <span>|</span>
        <a href="https://www.google.com/" {...linkProps}>
          Terms of Service
        </a>
      </div>
    </footer>
  );
};

export default Footer;
