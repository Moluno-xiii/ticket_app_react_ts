const Footer: React.FC = () => {
  return (
    <footer className="flex justify-center items-center  font-macondo text-white my-4">
      <span className="hover:cursor-pointer transition-all duration-300 hover:underline">
        &copy; {new Date().getFullYear()} Moluno @ HNG13
      </span>
    </footer>
  );
};

export default Footer;
