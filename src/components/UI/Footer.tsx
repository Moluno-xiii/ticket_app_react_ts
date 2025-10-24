const Footer: React.FC = () => {
  return (
    <footer className="flex justify-center items-center  font-macondo text-white">
      <span className="hover:cursor-pointer transition-all duration-300 hover:underline">
        &copy; {new Date().getFullYear()} Moluno Progress
      </span>
    </footer>
  );
};

export default Footer;
