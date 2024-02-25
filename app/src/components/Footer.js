import SocialLinks from "./SocialLinks";
const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-end py-4 dark-footer-name">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="ml-3 md:text-2xl text-1.5xl mb-2 sm:text-xl">
          <p className="font-serif text-2xl dark-footer-name">Chris Anderson</p>
          <p className="font-sans dark-footer-text">
            React Node.js FullStack Developer 2020 - present date{" "}
          </p>
        </div>
      </div>
      <SocialLinks />
    </footer>
  );
};

export default Footer;
