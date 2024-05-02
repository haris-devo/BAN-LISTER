import FormSection from "./FormSection";
import NumbersSection from "./NumbersSection";
import ImageLogo from "../../public/assets/logo/logo.png";
import backgroundImage from "../../public/rust_initial_background.png";

// BackgroundImage component definition
const BackgroundImage = () => {
  return (
    <img
      src={backgroundImage}
      className="absolute inset-0 object-cover w-full h-full"
      alt=""
    />
  );
};

// LoginButton component definition
const LoginButton = () => {
  return (
    <button className="absolute top-3 right-4 p-1 px-5 text-white bg-[#71A030] text-xs shadow-lg">
      Log in with{" "}
      <span className="uppercase">
        STEAM <sup>&#169;</sup>
      </span>
    </button>
  );
};

// ContentSection component definition
const ContentSection = () => {
  return (
    <div className="px-4 pt-10 py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-2 h-2/5">
      <div className="flex flex-col items-center justify-center xl:flex-row">
        <div className="w-full max-w-4xl xl:px-8 xl:w-11/12">
          <div className="p-7 sm:p-10">
            <Logo />
            <h3 className="mt-4 text-2xl text-center mb-2  md:text-4xl text-white font-thin font-lato">
              2256 Bans for 2125 users
            </h3>
            <SearchForm />
          </div>
        </div>
      </div>
    </div>
  );
};

// Logo component definition
const Logo = () => {
  return <img src={ImageLogo} alt="" className="w-full h-full" />;
};

// SearchForm component definition
const SearchForm = () => {
  return (
    <form className="max-w-4xl mx-auto mt-2">
      <div className="flex">
        <div className="relative w-full">
          <input
            type="search"
            id="search-dropdown"
            className="block p-2 md:p-3 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded focus:border-none focus:outline-none"
            placeholder="Search By steam 64 ID"
            required
          />
          <button
            type="submit"
            className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-[#7289D9] rounded-r focus:outline-none md:w-32"
          >
            <span>Search</span>
            <span className="sr-only">Search</span>
          </button>
        </div>
      </div>
    </form>
  );
};

// NewSection component definition
const NewSection = () => {
  return (
    <div className="text-white bg-white/30 mt-5 py-2">
      <NumbersSection />
      <div className="w-full flex justify-center items-center my-5 flex-col gap-6">
        <h1 className="text-2xl  md:text-4xl text-center text-black font-light">
          Connect your server to a secure repository
        </h1>{" "}
        <DownloadButton />
        <h1 className="text-xl md:text-2xl text-center text-black font-light">
          Get your community partnered and contribute to the ever-growing list
        </h1>
      </div>
    </div>
  );
};

// DownloadButton component definition
const DownloadButton = () => {
  return (
    <button className="p-0.5 px-1 bg-[#3CB979] rounded flex space-x-1 items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 transform rotate-180"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
        />
      </svg>

      <span>Download</span>
    </button>
  );
};

// HeroSection component definition
const HeroSection = () => {
  return (
    <div className="relative w-full h-full">
      <BackgroundImage />
      <LoginButton />
      <div className="absolute inset-0 bg-black/30 opacity-50"></div>
      <div className="relative h-full">
        <ContentSection />
        <NewSection />
        <FormSection />
      </div>
    </div>
  );
};

export default HeroSection; // Exporting HeroSection component
